import * as actionTypes from "../../const/reduxTypes";
import searchReducer from "../../reducers/searchReducer"

const INITIAL_STATE = {
    searchTerm: null,
    data: null
};

test(`when previous state is undefined, return initial state`, () => {
    const newState = searchReducer(undefined, {});
    expect(newState).toStrictEqual(INITIAL_STATE);
});

test(`when state is defined, return expected state`, () => {
    const newState = searchReducer(INITIAL_STATE, {
        type: actionTypes.SEARCH_SUCCESS,
        payload: {
            searchTerm: "test",
            data: "test"
        }
    })
    expect(newState).toStrictEqual({
        searchTerm: "test",
        data: "test"
    });
})