import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchItem } from "../actions/";
import { ItemDetailComp } from "../styledComponents/export";
import defaultImg from "../resources/defaultPlaceholder.png";
import Recommendation from "./Recommendation";
import axios from "axios";
import { PROJECTID, USERNAME, USERSECRET } from "./Chat/chatConst";
import * as ROUTES from "../router/routes";
class ItemDetail extends React.Component {
    state = { activeImage: defaultImg, active: 0 };
    componentDidMount() {
        const item_id = this.props.match.params.item_id;
        console.log(item_id);
        this.props.fetchItem(item_id);
        window.scroll(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps?.item != this.props?.item) {
            this.setState({ activeImage: this.props?.item?.item?.media_urls[0] == null ? defaultImg : this.props?.item?.item?.media_urls[0] });
        }
    }
    renderImage() {
        if (this.props?.item?.item?.media_urls == null) {
            return null;
        }
        let images = this.props?.item?.item?.media_urls.map((image, index) => {
            return (
                <ItemDetailComp.SecondaryImage
                    active={this.state.active === index ? true : false}
                    onMouseEnter={() => { this.setState({ activeImage: image, active: index }); }}
                    src={image}
                    alt={`${image}`} key={index} />
            );
        });

        return <ItemDetailComp.ImageContainer>
            <ItemDetailComp.ImageList>
                {images}
            </ItemDetailComp.ImageList>
            <ItemDetailComp.PrimaryImage src={this.state.activeImage} alt="Primary Image" />
        </ItemDetailComp.ImageContainer>;
    }

    startChat = async (e) => {
        e.preventDefault();

        if (this.props?.user?.user?.email == null) {
            alert("please login first");
            return;
        }
        const headers = {
            "Project-ID": PROJECTID,
            "User-Name": USERNAME,
            "User-Secret": USERSECRET
        };

        if (this.props?.user?.user.email === this.props?.item?.item?.email) {
            // console.log(this.props?.user?.user[9]?.Value);
            // console.log(this.props?.item?.item?.Email);
            alert("you cannot send message to yourself");
            return;
        }

        var response = await axios.put("https://api.chatengine.io/chats/", {
            "usernames": [this.props?.user?.user.username, this.props?.item?.item?.name],
            "title": `${this.props?.user?.user.username} and ${this.props?.item?.item?.name}`,
            "is_direct_chat": true
        }, {
            headers: headers
        });
        console.log(response);
    };
    renderInfor() {

        if (this.props.item.success == false) {
            return <>
            </>;
        }
        return <ItemDetailComp.InforContainer>
            <ItemDetailComp.Title>
                {this.props?.item?.item?.title}
            </ItemDetailComp.Title>
            <ItemDetailComp.UserInfoContainer>
                <ItemDetailComp.Username to={`${ROUTES.USER}/${this.props?.item?.item?.sub}`}>
                    User: {this.props?.item?.item.name}
                </ItemDetailComp.Username>

            </ItemDetailComp.UserInfoContainer>

            <ItemDetailComp.IconContainer>

                <ItemDetailComp.IconBox onClick={() => { }}>
                    <ItemDetailComp.Icon>
                        <i className="fas fa-exchange"></i>
                    </ItemDetailComp.Icon>
                    trade
                </ItemDetailComp.IconBox>
                <ItemDetailComp.IconBox onClick={(e) => { this.startChat(e); }}>
                    <ItemDetailComp.Icon>
                        <i className="far fa-comment"></i>
                    </ItemDetailComp.Icon>
                    message
                </ItemDetailComp.IconBox>
                <ItemDetailComp.IconBox>
                    <ItemDetailComp.Icon color={"#40bced"}>
                        <i className="fas fa-map-marker-alt"></i>
                    </ItemDetailComp.Icon>
                    location
                </ItemDetailComp.IconBox>
            </ItemDetailComp.IconContainer>

            <ItemDetailComp.Break />
            <ItemDetailComp.DetailContainer>
                <ItemDetailComp.Text>
                    Description: {this.props?.item?.item.description}
                </ItemDetailComp.Text>
                <ItemDetailComp.Text>
                    Brand: {this.props?.item?.item.brand}
                </ItemDetailComp.Text>
                <ItemDetailComp.Text>
                    material: {this.props?.item?.item.material}
                </ItemDetailComp.Text>
                <ItemDetailComp.Text>
                    Worn Condition: {this.props?.item?.item.worncondition}
                </ItemDetailComp.Text>
            </ItemDetailComp.DetailContainer>

        </ItemDetailComp.InforContainer>;
    }
    render() {
        return <ItemDetailComp>

            <ItemDetailComp.Container>
                <ItemDetailComp.BackIconContainer onClick={() => { this.props.history.goBack(); }}>
                    <ItemDetailComp.BackIcon />
                    <ItemDetailComp.BackText>Back</ItemDetailComp.BackText>
                </ItemDetailComp.BackIconContainer>
                <ItemDetailComp.ContentContainer>
                    {this.renderImage()}
                    {this.renderInfor()}
                </ItemDetailComp.ContentContainer>

            </ItemDetailComp.Container>
            <ItemDetailComp.Break />
            <Recommendation breakHide={true} text="Recommendations For You" />
        </ItemDetailComp>;
    }
}

ItemDetail.propTypes = {
    match: PropTypes.object.isRequired,
    item: PropTypes.any.isRequired,
    fetchItem: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {

    return {
        user: state.user,
        item: state.item
    };
};

export default connect(mapStateToProps, { fetchItem })(withRouter(ItemDetail));