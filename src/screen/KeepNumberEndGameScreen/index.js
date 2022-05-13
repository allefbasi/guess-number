import {useNavigate, useSearchParams} from "react-router-dom";
import './index.css';

export function KeepNumberEndGameScreen() {
    const [searchParam, setSearchParam] = useSearchParams();
    const win = searchParam.get('win')
    const navigate = useNavigate();
    const onRestartClick = () => {
        navigate('/');
    }
    return (
        <div className='container'>
            End game. {win === 'true' ? 'I win!' : 'I lost.'}
            <button onClick={() => onRestartClick()}> RESTART</button>
        </div>
    )
}
