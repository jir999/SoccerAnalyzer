import { milan } from '../actions/milanTeam';

export const milanData = (state = {}, action) => {
    const { type, milanObj } = action;
    switch (type) {
        case milan:
            return milanObj;
        default:
            return state;
    }
};