import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getLeaguesData } from '../../store/selectors';

import League from '../League';
import { fetchedleagues } from '../../store/actions/leagues';
import { setJuventusData } from '../../store/actions/juventusTeam';
import { setMilanData } from '../../store/actions/milanTeam';
import { setLiverpoolData } from '../../store/actions/liverpoolTeam';
import { setTottenhamData } from '../../store/actions/tottenhamTeam';
import { setSeriaATeams } from '../../store/actions/seriaATeams';
import { setPremierLeagueTeams } from '../../store/actions/premierLeagueTeams';

const LeagueDashboard = () => {
    const dispatch = useDispatch();
    const leaguesData = useSelector((state) => getLeaguesData(state));

    useEffect(() => {
        fetch('./data.json')
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch(fetchedleagues(Object.keys(data)));
                dispatch(setSeriaATeams(Object.keys(data.seriaA)));
                dispatch(setPremierLeagueTeams(Object.keys(data.premierLeague)));
                dispatch(setJuventusData(data.seriaA.fcJuventus));
                dispatch(setMilanData(data.seriaA.acMilan));
                dispatch(setLiverpoolData(data.premierLeague.fcLiverPool));
                dispatch(setTottenhamData(data.premierLeague.TottenhamHotspur));
            });
    }, []);

    return (
        <div>
            {leaguesData.map((name) => <League name={name} />)}
        </div>
    )
};

export default LeagueDashboard;