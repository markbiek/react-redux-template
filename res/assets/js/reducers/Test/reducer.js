import { fromJS } from 'immutable';

/** Test Store **/
const testInitialState = fromJS({
    data: []
})

export const testReducer = function (state = testInitialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
