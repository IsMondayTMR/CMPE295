import React  from "react";
import { SearchComp } from "../styledComponents/export";
class Search extends React.Component {
    render() {
        return (
            <SearchComp >
                <SearchComp.Container>
                    <SearchComp.Input/>
                    <SearchComp.Icon> <i className="fas fa-search"></i> </SearchComp.Icon>
                </SearchComp.Container>
            </SearchComp>
        )
    }
}

export default Search