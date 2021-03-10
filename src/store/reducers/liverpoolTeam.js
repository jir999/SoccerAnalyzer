import { liverpool } from '../actions/liverpoolTeam';

export const liverpoolData = (state = {}, action) => {
    const { type, liverpoolObj } = action;
    switch (type) {
        case liverpool:
            return liverpoolObj;
        default:
            return state;
    }
};