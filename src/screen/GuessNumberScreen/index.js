import {useState} from "react";
import {useNavigate} from "react-router-dom";
import './index.css';

const maxCount = 7;
const guessMaxLength = 2;
function getRandomNumber() {
    return Math.round(Math.random() * 99 + 1)
}

export function GuessNumberScreen() {
    const [isStarted, setIsStarted] = useState(false);
    const [didUserWin, setDidUserWin] = useState(null);
    const [guessCount, setGuessCount] = useState(1);
    const [guessValue, setGuessValue] = useState('');
    const [number, setNumber] = useState(null);
    const navigate = useNavigate();
    const [value, setValue] = useState(null);

    const onStartClick = () => {
        onRetryClick();
    }

    const onGuessClick = () => {
        const newValue = parseInt(guessValue);
        if (newValue === number) {
            setDidUserWin(true);
            return;
        }
        if (maxCount === guessCount) {
            setDidUserWin(false);
            return;
        }
        setGuessCount(guessCount + 1);
        setValue(newValue)
        setGuessValue('');
    }

    const onRetryClick = () => {
        setIsStarted(true);
        setDidUserWin(null);
        setGuessCount(1);
        setNumber(getRandomNumber());
    }

    if (!isStarted) {
        return (
            <div className='container'>
                <div>GUESS NUMBER (1-100)</div>
                <button className='start-button' onClick={() => onStartClick()}>START</button>
                <span onClick={()=>navigate('/')} style={{fontSize:'15px', marginTop:'7px', cursor:'pointer'}}> or back to menu</span>
            </div>
        )
    }

    if (didUserWin !== null) {
        navigate(`/guess-number-end-game?win=${didUserWin}&number=${number}`)
        return null;
    }

    return (
        <div className='container'>
            <div className='guess-number-game-div'>
                <span>The Number Is:</span>
                <input value={guessValue}
                       onInput={guessValue.length > guessMaxLength ? setGuessValue(guessValue.slice(0, guessMaxLength)) : null}
                       onChange={(e) => setGuessValue(e.target.value)}
                       type='number'/>
                <button disabled={guessValue===''} className='guess-button' onClick={() => onGuessClick()}>Guess {guessCount}/7</button>
            </div>
            <div>
                {value !== null ?
                    <span>
                        My number is
                        <span className={value > number ? 'lower-hint' : 'higher-hint'}>
                            {' '}{value > number ? 'less' : 'more'} than{' '}
                        </span>
                        {value}. Try again.
                    </span> : ''
                }
            </div>
        </div>
    )
}
