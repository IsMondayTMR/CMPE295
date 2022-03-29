import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchItem } from "../actions/";
import { ItemDetailComp } from "../styledComponents/export";
import defaultImg from "../resources/1.jpg";
import Recommendation from "./Recommendation";
// import axios from "axios";
// import { PROJECTID, USERNAME, USERSECRET } from "./Chat/chatConst";

class ItemDetail extends React.Component {
    state = { activeImage: defaultImg, active: 0 };
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchItem(id);
        window.scroll(0, 0);

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

    // startChat(e) {
    //     e.preventDefault();

    //     console.log(this.props?.user?.user[9]?.Value);
    //     console.log(this.props?.item?.item?.Email);
    //     const headers = {
    //         "Project-ID": PROJECTID,
    //         "User-Name": USERNAME,
    //         "User-Secret": USERSECRET
    //     };

    //     if (this.props?.user?.user[9]?.Value === this.props?.item?.item?.Email) {
    //         console.log(this.props?.user?.user[9]?.Value);
    //         console.log(this.props?.item?.item?.Email);
    //         console.log("same user");
    //         return;
    //     }

    //     var response = await axios.put("https://api.chatengine.io/chats/", {
    //         "usernames": ["IsMondayTMR", this.props?.item?.item?.Username],
    //         "title": "Another Surprise Party!",
    //         "is_direct_chat": true
    //     }, {
    //         headers: headers
    //     });
    //     console.log(response);
    // }
    renderInfor() {
        console.log(this.props?.item);
        return <ItemDetailComp.InforContainer>
            <ItemDetailComp.Title>
                {this.props?.item?.item?.title}
            </ItemDetailComp.Title>
            <ItemDetailComp.UserInfoContainer>
                <ItemDetailComp.Username>
                    {this.props?.item?.item.name}
                </ItemDetailComp.Username>
                <ItemDetailComp.IconBox>
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
            </ItemDetailComp.UserInfoContainer>
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
                <ItemDetailComp.IconContainer onClick={() => { this.props.history.goBack(); }}>
                    <ItemDetailComp.BackIcon />
                    <ItemDetailComp.BackText>Back</ItemDetailComp.BackText>
                </ItemDetailComp.IconContainer>

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