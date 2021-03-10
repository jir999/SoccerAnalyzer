import TeamPlayer from '../TeamPlayer';
import { useSelector } from 'react-redux';
import {
    getJuventusData,
    getMilanData,
    getLiverpoolData,
    getTottenhamData,
} from '../../store/selectors';
import './index.css';

const Team = ({ name }) => {

    const { juventusData, acMilanData, liverpoolData, tottenhamData } = useSelector((state) => ({
        juventusData: getJuventusData(state),
        acMilanData: getMilanData(state),
        liverpoolData: getLiverpoolData(state),
        tottenhamData: getTottenhamData(state),
    }));
    const juventusPlayers = Object.keys(juventusData);
    const acMilanPlayers = Object.keys(acMilanData);
    const liverpoolPlayers = Object.keys(liverpoolData);
    const tottenhamPlayers = Object.keys(tottenhamData);

    const handleDragStart = (e) => {
        console.log('handleDragStart');
        const { target } = e;
        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.color = 'red';
        }, 0);
    };

    const handleDragOver = (e) => {
        console.log('handleDragOver');
        e.stopPropagation();
    };

    return (
        <ul className="teams">
            <li
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
            >
                {name}
            </li>
            {name === 'fcJuventus' && <ul>{juventusPlayers.map((playerName, id) => <li
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
            >
                {<TeamPlayer key={id} name={playerName} />}
            </li>)}
            </ul>}
            {name === 'acMilan' && <ul>{acMilanPlayers.map((playerName, id) => <li
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
            >
                {<TeamPlayer key={id} name={playerName} />}
            </li>)}
            </ul>}
            {name === 'fcLiverPool' && <ul>{liverpoolPlayers.map((playerName, id) => <li
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
            >
                {<TeamPlayer key={id} name={playerName} />}
            </li>)}
            </ul>}
            {name === 'TottenhamHotspur' && <ul>{tottenhamPlayers.map((playerName, id) => <li
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
            >
                {<TeamPlayer key={id} name={playerName} />}
            </li>)}
            </ul>}
        </ul>
    );
};

export default Team;
