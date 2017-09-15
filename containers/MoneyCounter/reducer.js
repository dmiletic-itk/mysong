import constants from './constants';

const initialState = { money: 0 };

export default function moneyReducer(state = initialState, action) {
    switch (action.type) {
        case constants.EARN_MONEY:
            return Object.assign({}, state, { money: action.money });
        default:
            return state;
    }
}
