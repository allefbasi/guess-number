import {useNavigate, useSearchParams} from "react-router-dom";
import './index.css';

export function GuessNumberEndGameScreen() {
    const [searchParam, setSearchParam] = useSearchParams();
    const win = searchParam.get('win');
    const number = searchParam.get('number')
    const navigate = useNavigate();
    const onRestartClick = () => {
        navigate('/');
    }
    return (
        <div className='container'>
            End game. {win === 'true' ? 'You win!' : `You lost. The number was ${number}.`}
            <button onClick={() => onRestartClick()}> RESTART</button>
        </div>
    )
}
