import { getPremierLeagueTeams } from '../actions/premierLeagueTeams';

export const premierLeagueTeamsData = (state = [], action) => {
    const { type, premierLeagueTeamsArr } = action;

    switch (type) {
        case getPremierLeagueTeams:
            return premierLeagueTeamsArr;
        default:
            return state;
    }
};