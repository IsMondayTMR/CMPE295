import React from "react";
import { SearchComp } from "../styledComponents/export";
import PropTypes from "prop-types";
import history from "../history";
import * as ROUTES from "../router/routes";
class Search extends React.Component {
    state = { searchTerm: "" };

    onFormSubmit = (e) => {
        e.preventDefault();
        history.push(`${ROUTES.SEARCH}/${this.state.searchTerm}`);
    };
    render() {
        return (
            <SearchComp.Form
                onSubmit={this.onFormSubmit}
                height={this.props.height}
                width={this.props.width}
                border={this.props.border}
                borderRadius={this.props.borderRadius}>
                <SearchComp.Input
                    value={this.state.searchTerm}
                    onChange={(e) => { this.setState({ searchTerm: e.target.value }); }}
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
};

export default Search;