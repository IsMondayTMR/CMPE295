import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
const ChatHeader = (props) => {

    const renderHeader = () => {
        const header = props?.people?.filter((person) => {
            if (person?.person?.username != props?.admin?.username && person?.person?.username != props?.auth?.user?.Email) {
                return person;
            }
        });

        if (header === undefined) {
            return <></>;
        }
        return header[0]?.person?.username ? header[0]?.person?.username : props?.auth.user.Username;
    };

    // box - sizing: border - box;
    // min - height: 1px;
    // position: relative;
    // padding: 18px 0px;
    // width: 100 %;
    // flex: 0 0 100 %;
    // max - width: 100 %;
    // margin - left: 0 %;
    // right: auto;
    // left: auto;
    // text - align: center;
    // color: rgb(24, 144, 255);
    // overflow - x: hidden;

    return (
        <div className="ce-feed-container-top" style={{
            backgroundColor: "white",
            textAlign: "center",
            position: "relative",
            right: "auto",
            left: "auto",
            overflowX: "hidden",
            boxSizing: "border-box",
        }}>
            {renderHeader()}

        </div >

    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

ChatHeader.propTypes = {
    people: PropTypes.array,
    admin: PropTypes.object,
    auth: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(ChatHeader);