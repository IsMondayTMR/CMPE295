import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchItem } from "../actions/";
import { ItemDetailComp } from "../styledComponents/export";
import defaultImg from "../resources/1.jpg";
import axios from "axios";
import { PROJECTID, USERNAME, USERSECRET } from "./Chat/chatConst";
class ItemDetail extends React.Component {
    state = { activeImage: defaultImg, active: 1 };
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchItem(id);
        window.scroll(0, 0);
    }

    renderImage() {
        // console.log(defaultImage);
        const array = [1, 2, 3, 4, 5, 6];
        let images = array.map((current) => {
            let image = require(`../resources/${current}.jpg`);
            return (
                <ItemDetailComp.SecondaryImage
                    active={this.state.active === current ? true : false}
                    onMouseEnter={() => { this.setState({ activeImage: image, active: current }); }}
                    src={image}
                    alt={`image${current}`} key={current} />
            );
        });
        return <ItemDetailComp.ImageContainer>
            <ItemDetailComp.ImageList>
                {images}
            </ItemDetailComp.ImageList>
            <ItemDetailComp.PrimaryImage src={this.state.activeImage} alt="Primary Image" />
        </ItemDetailComp.ImageContainer>;
    }

    async startChat(e) {
        e.preventDefault();

        console.log(this.props?.user?.user[9]?.Value);
        console.log(this.props?.item?.item?.Email);
        const headers = {
            "Project-ID": PROJECTID,
            "User-Name": USERNAME,
            "User-Secret": USERSECRET
        };

        if (this.props?.user?.user[9]?.Value === this.props?.item?.item?.Email) {
            console.log(this.props?.user?.user[9]?.Value);
            console.log(this.props?.item?.item?.Email);
            console.log("same user");
            return;
        }

        var response = await axios.put("https://api.chatengine.io/chats/", {
            "usernames": ["IsMondayTMR", this.props?.item?.item?.Username],
            "title": "Another Surprise Party!",
            "is_direct_chat": true
        }, {
            headers: headers
        });
        console.log(response);
    }
    renderInfor() {
        return <ItemDetailComp.InforContainer>
            <ItemDetailComp.Title>
                Title: {this.props.item.item.Title}
            </ItemDetailComp.Title>
            <ItemDetailComp.Text>
                Id: {this.props.item.item.id}
            </ItemDetailComp.Text>
            <ItemDetailComp.Text onClick={(e) => this.startChat(e)}>
                Username: {this.props.item.item.Username}
            </ItemDetailComp.Text>
            <ItemDetailComp.Text>
                Description: {this.props.item.item.Description}
            </ItemDetailComp.Text>
        </ItemDetailComp.InforContainer>;
    }
    render() {

        return <ItemDetailComp>

            <ItemDetailComp.Container>
                <ItemDetailComp.IconContainer onClick={() => { this.props.history.goBack(); }}>
                    <ItemDetailComp.BackIcon />
                    <ItemDetailComp.BackText>Back To Results</ItemDetailComp.BackText>
                </ItemDetailComp.IconContainer>

                <ItemDetailComp.ContentContainer>
                    {this.renderImage()}
                    {this.renderInfor()}
                </ItemDetailComp.ContentContainer>

            </ItemDetailComp.Container>
            <ItemDetailComp.Break />
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
        item: state.item,
        user: state.user
    };
};

export default connect(mapStateToProps, { fetchItem })(withRouter(ItemDetail));