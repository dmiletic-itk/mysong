import constants from './constants';

export function earnMoney(money) {
    return {
        type: constants.EARN_MONEY,
        money,
    };
}