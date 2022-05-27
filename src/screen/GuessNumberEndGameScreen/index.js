import {useNavigate, useSearchParams} from "react-router-dom";
import './index.css';

export function GuessNumberEndGameScreen() {
    const [searchParam, setSearchParam] = useSearchParams();
    const win = searchParam.get('win');
    const number = searchParam.get('number')
    const navigate = useNavigate();
    const onRestartClick = () => {
        navigate('/guess-number');
    }
    return (
        <div className='container'>
            {win === 'true' ? 'You win!' : `End game. You lost. The number was ${number}.`}
            <button className='start-button' onClick={() => onRestartClick()}> RESTART</button>
        </div>
    )
}
