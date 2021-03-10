import { fetchData } from '../actions/leagues';

export const leaguesData = (state = [], action) => {
    const { type, fetchedData } = action;

    switch (type) {
        case fetchData:
            return fetchedData;
        default:
            return state;
    }
};