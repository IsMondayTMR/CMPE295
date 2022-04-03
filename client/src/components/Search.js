import React from "react";
import { SearchComp } from "../styledComponents/export";
import PropTypes from "prop-types";
import history from "../history";
import * as ROUTES from "../router/routes";
import { connect } from "react-redux";
import { search } from "../actions";
class Search extends React.Component {
    state = { key: null, category: "item", user_id: this.props?.user?.user?.sub == null ? null : this.props?.user?.user.sub };

    onFormSubmit = (e) => {
        e.preventDefault();
        // this.props.search(this.state.category, this.state.user_id, this.state.key).then(() => {
        history.push(`${ROUTES.SEARCH}/result/${this.state.category}/${this.state.user_id}/${this.state.key}`);
        // });

    };
    render() {
        return (
            <SearchComp.Form
                onSubmit={this.onFormSubmit}
                height={this.props.height}
                width={this.props.width}
                border={this.props.border}
                borderRadius={this.props.borderRadius}>
                <SearchComp.Select
                    defaultValue="item"
                    onChange={(e) => {
                        this.setState({ category: e.target.value });
                    }}
                    fontSize={this.props.fontSize}>
                    <SearchComp.Option fontSize={this.props.fontSize}>
                        item
                    </SearchComp.Option>
                    <SearchComp.Option fontSize={this.props.fontSize}>
                        user
                    </SearchComp.Option>
                </SearchComp.Select>
                <SearchComp.Input
                    value={this.state.searchTerm}
                    onChange={(e) => { this.setState({ key: e.target.value }); }}
                    placeholder="Search items/locations/Communities"
                    fontSize={this.props.fontSize}
                    borderRadius={this.props.borderRadius}
                />
                <SearchComp.Button
                    borderRadius={this.props.borderRadius}>
                    <i className="fas fa-search"></i>
                </SearchComp.Button>
            </SearchComp.Form>
        );
    }
}

Search.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fontSize: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.string,
    user: PropTypes.object,
    search: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps, { search })(Search);