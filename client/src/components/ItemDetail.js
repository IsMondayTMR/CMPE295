import React from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchItem } from "../actions/";
import { ItemDetailComp } from "../styledComponents/export";
import defaultImg from "../resources/1.jpg";

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
    renderInfor() {
        return <ItemDetailComp.InforContainer>
            <ItemDetailComp.Title>
                Title: {this.props.item.item.Title}
            </ItemDetailComp.Title>
            <ItemDetailComp.Text>
                Id: {this.props.item.item.id}
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
};

const mapStateToProps = (state) => {

    return {
        item: state.item,
    };
};

export default connect(mapStateToProps, { fetchItem })(withRouter(ItemDetail));