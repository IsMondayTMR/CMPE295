import React, { useEffect } from "react";
import { FormComp, InvitComp } from "../../styledComponents/export";
import * as ROUTES from "../../router/routes";
import IMAGE from "../../resources/1.jpg";
import AVATAR from "../../resources/maria-bo-schatzis-stream-profilpicture.jpg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { three_way_match } from "../../actions/invitationAction";
const MatchList = (props) => {

    useEffect(() => {
        if (props.itemId != null && props.userId != null) {
            console.log(props.userId, props.itemId);
            props.three_way_match(props.userId, props.itemId);
        }
    }, []);
    const renderMatches = () => {
        // console.log(props.matches);
        // const cards = props.matches.body.map(() => {

        // })
        return <InvitComp.Card width={"98%"}>
            <InvitComp.StarterContainer>
                <InvitComp.Starter>
                    <InvitComp.RouteLink to={`${ROUTES.USER}/123456789`}>
                        <InvitComp.Avatar src={AVATAR} />
                        <InvitComp.UserInfor>
                            <InvitComp.Username>
                                IsMondayTMR
                            </InvitComp.Username>
                            <InvitComp.UserId>
                                ID:123456789
                            </InvitComp.UserId>
                        </InvitComp.UserInfor>
                    </InvitComp.RouteLink>
                </InvitComp.Starter>


                <InvitComp.ButtonContainer>
                    <InvitComp.Button>
                        Message
                    </InvitComp.Button>
                    <InvitComp.Button>
                        Invitation
                    </InvitComp.Button>
                </InvitComp.ButtonContainer>
            </InvitComp.StarterContainer>
            <InvitComp.DetailContainer>
                <InvitComp.ItemContainer>
                    <InvitComp.RouteLink to={""}>
                        <InvitComp.Image src={IMAGE} />
                    </InvitComp.RouteLink>
                    <InvitComp.ItemInfor>
                        <InvitComp.ItemTitle>
                            Item1
                        </InvitComp.ItemTitle>
                        <InvitComp.ItemDesc>
                            Item1 desc
                        </InvitComp.ItemDesc>
                    </InvitComp.ItemInfor>
                </InvitComp.ItemContainer>
                <i className="fas fa-exchange"></i>
                <InvitComp.ItemContainer>
                    <InvitComp.RouteLink to={""}>
                        <InvitComp.Image src={IMAGE} />
                    </InvitComp.RouteLink>

                    <InvitComp.ItemInfor>
                        <InvitComp.ItemTitle>
                            Item2
                        </InvitComp.ItemTitle>
                        <InvitComp.ItemDesc>
                            Item2 desc
                        </InvitComp.ItemDesc>
                    </InvitComp.ItemInfor>
                </InvitComp.ItemContainer>

                <i className="fas fa-exchange"></i>
                <InvitComp.ItemContainer>
                    <InvitComp.RouteLink to={""}>
                        <InvitComp.Image src={IMAGE} />
                    </InvitComp.RouteLink>

                    <InvitComp.ItemInfor>
                        <InvitComp.ItemTitle>
                            Item3
                        </InvitComp.ItemTitle>
                        <InvitComp.ItemDesc>
                            Item3 desc
                        </InvitComp.ItemDesc>
                    </InvitComp.ItemInfor>
                </InvitComp.ItemContainer>

            </InvitComp.DetailContainer>
        </InvitComp.Card >;
    };

    return <React.Fragment>
        <FormComp width={"1000px"}>
            <FormComp.CloseButton
                onClick={() => props.close()}
            />
            <FormComp.FormContainer maxHeight="800px"
                style={{ margin: "20px auto", width: "90%" }}>

                {renderMatches()}
                {renderMatches()}
                {renderMatches()}
                {renderMatches()}

            </FormComp.FormContainer>
        </FormComp>
        <FormComp.Modal />
    </React.Fragment>;
};
MatchList.propTypes = {
    itemId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
    three_way_match: PropTypes.func.isRequired,
    matches: PropTypes.object.isRequired
};

const mapStateToProp = (state) => {
    return {
        matches: state.threeWayMatch
    };
};
export default connect(mapStateToProp, { three_way_match })(MatchList);