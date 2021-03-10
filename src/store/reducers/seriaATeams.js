import { getSeriaATeams } from '../actions/seriaATeams';

export const seriaATeamsData = (state = [], action) => {
    const { type, seriaATeamsArr } = action;

    switch (type) {
        case getSeriaATeams:
            return seriaATeamsArr;
        default:
            return state;
    }
};