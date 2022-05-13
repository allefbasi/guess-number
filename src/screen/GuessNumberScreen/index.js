import {useState} from "react";
import {useNavigate} from "react-router-dom";

const maxCount = 7;
function getRandomNumber() {
    return Math.round(Math.random() * 99 + 1)
}

export function GuessNumberScreen() {
    const [isStarted, setIsStarted] = useState(false);
    const [didUserWin, setDidUserWin] = useState(null);
    const [guessCount, setGuessCount] = useState(1);
    const [guessValue, setGuessValue] = useState('');
    const [hint, setHint] = useState(null);
    const [number, setNumber] = useState(null);
    const navigate = useNavigate();

    const onStartClick = () => {
        onRetryClick();
    }

    const onGuessClick = () => {
        const value = parseInt(guessValue)
        if (value === number) {
            setDidUserWin(true);
            return;
        }
        if (maxCount === guessCount) {
            setDidUserWin(false);
            return;
        }
        setHint(value > number ? `${value} is too much than my number. Try again.` : `${value} is too less than my number. Try again.`)
        setGuessCount(guessCount + 1);
    }

    const onRetryClick = () => {
        setIsStarted(true);
        setDidUserWin(null);
        setGuessCount(1);
        setHint(null);
        setNumber(getRandomNumber());
    }

    if (!isStarted) {
        return (
            <div className='container'>
                <div>GUESS NUMBER (1-100)</div>
                <button onClick={() => onStartClick()}>START</button>
            </div>
        )
    }

    if (didUserWin !== null) {
        navigate(`/guess-number-end-game?win=${didUserWin}&number=${number}`)
        return null;
        // return (
        //     <div className='container'>
        //         {
        //             didUserWin ? `You Win in ${guessCount}!` : `You Lose.${number}`
        //         }
        //         <button onClick={() => onRetryClick()}>Retry</button>
        //     </div>
        // )
    }

    return (
        <div className='container'>
            <p>
                The Number Is:
                <input value={guessValue}
                       onChange={(e) => setGuessValue(e.target.value)}
                       type='number' style={{width: '40px', marginRight: '5px'}}/>
                <button onClick={() => onGuessClick()}>Guess {guessCount}/7</button>
            </p>
            <div>{hint}</div>
        </div>
    )
}
