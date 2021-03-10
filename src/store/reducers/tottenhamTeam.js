import { tottenham } from '../actions/tottenhamTeam';

export const tottenhamData = (state = {}, action) => {
    const { type, tottenhamObj } = action;
    switch (type) {
        case tottenham:
            return tottenhamObj;
        default:
            return state;
    }
};