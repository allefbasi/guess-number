import {useNavigate, useSearchParams} from "react-router-dom";
import './index.css';

export function KeepNumberEndGameScreen() {
    const [searchParam, setSearchParam] = useSearchParams();
    const win = searchParam.get('win')
    const navigate = useNavigate();
    const onRestartClick = () => {
        navigate('/keep-number');
    }
    return (
        <div className='container'>
            {win === 'true' ? 'I win!' : 'End game .I lost.'}
            <div>
                <button className='start-button' onClick={() => onRestartClick()}> RESTART</button>
            </div>
        </div>
    )
}
