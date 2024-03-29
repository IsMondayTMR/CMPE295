// import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../../reducers';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(reduxThunk));
}


/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}


/**
 * Assert that expected conforming props conform to propTypes definiton.
 * @param {React.Component} component - React component.
 * @param {object} conformingProps - Object of conforming props.
 * @returns {undefined} - Throws error if props do not conform.
 */
// export const checkProps = (component, conformingProps) => {
//   const propError = checkPropTypes(
//     component.propTypes,
//     conformingProps,
//     'prop',
//     component.name);
//   expect(propError).toBeUndefined();
// }