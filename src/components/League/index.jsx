import { useState } from 'react';
import Team from '../Team';
import { useSelector } from 'react-redux';
import { getSeriaATeamsData, getPremierLeagueTeamsData } from '../../store/selectors';

const League = ({ name }) => {
    const [isOpened, setIsOpened] = useState(false);
    const seriaATeams = useSelector((state) => getSeriaATeamsData(state));
    const premierLeagueTeams = useSelector((state) => getPremierLeagueTeamsData(state));

    const handleClick = () => {
        setIsOpened((isOpened) => !isOpened);
    };

    return (
        <div>
            <ul>
                <li onClick={handleClick}>{name}</li>
                {isOpened && name === 'seriaA' && <ul>{seriaATeams.map((name) => <li>{<Team name={name} />}</li>)}</ul>}
                {isOpened && name === 'premierLeague' && <ul>{premierLeagueTeams.map((name) => <li>{<Team name={name} />}</li>)}</ul>}
            </ul>
        </div>
    )
};

export default League;