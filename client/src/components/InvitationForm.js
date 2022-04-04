import React, { useEffect, useState } from "react";
import { FormComp } from "../styledComponents/export";
import { connect } from "react-redux";
import { getListing } from "../actions";
import { send_2_way_invitation } from "../actions/invitationAction";
import PropTypes from "prop-types";
const InvitationForm = (props) => {

    const [active, setActive] = useState(0);
    const [selected, setSelected] = useState({});
    useEffect(() => {
        if (props.user?.user != null) {
            props.getListing(props?.user?.user?.sub).then(() => {
                if (props.listing?.item != null && props.listing?.item.length > 0) {
                    setSelected(props.listing?.item[active]);
                }
            });
        }
    }, []);
    const onInvitationFormSubmit = (e) => {
        e.preventDefault();

        props.send_2_way_invitation(props?.user?.user?.sub, props?.item?.item?.sub, props?.item?.item?.id, selected.id)
            .then(() => {
                props.close();
            })
            .catch((err) => {
                alert(err);
            });
    };

    const renderLisitng = () => {
        if (props?.listing?.success == null ||
            props?.listing?.success == false ||
            props?.listing?.item == null) {
            return <>null</>;
        }

        var cards = props?.listing?.item.map((curItem, index) => {
            return <FormComp.Card key={index}>
                <FormComp.ItemImage src={curItem?.media_urls == null ? "" : curItem?.media_urls[0]} alt={curItem.title} />

                <FormComp.CardInforContainer>
                    <FormComp.CardTitle>{curItem.title}</FormComp.CardTitle>
                </FormComp.CardInforContainer>
                <FormComp.RadioInput
                    type="radio"
                    checked={active == index}
                    onChange={() => {
                        setSelected(curItem);
                    }}
                    onClick={() => {
                        setActive(index);
                    }} />
            </FormComp.Card>;
        });


        return <FormComp.CardsContainer>
            {cards}
        </FormComp.CardsContainer>;

    };

    return <React.Fragment>
        <FormComp hide={props.hide ? "none" : "block"} width="600px">
            <FormComp.CloseButton
                onClick={() => props.close()}
                data-test="close-btn" />
            <FormComp.Form
                onSubmit={(e) => onInvitationFormSubmit(e)}>
                <FormComp.FormTitle>
                    Items
                </FormComp.FormTitle>
                {renderLisitng()}

                <FormComp.SubmitButton >
                    Send
                </FormComp.SubmitButton>
            </FormComp.Form>

        </FormComp>
        <FormComp.Modal hide={props.hide ? "none" : "block"} />
    </React.Fragment>;
};

InvitationForm.propTypes = {
    hide: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    getListing: PropTypes.func.isRequired,
    listing: PropTypes.object.isRequired,
    send_2_way_invitation: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listing: state.listing,
    };
};
export default connect(mapStateToProps, { getListing, send_2_way_invitation })(InvitationForm);