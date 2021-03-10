import { juventus } from '../actions/juventusTeam';

export const juventusData = (state = {}, action) => {
    const { type, juventusObj } = action;
    switch (type) {
        case juventus:
            return juventusObj;
        default:
            return state;
    }
};