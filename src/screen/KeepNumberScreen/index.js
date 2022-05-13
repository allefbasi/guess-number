import './index.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const maxGuessCount = 7;
const maxGuess = 100;
const minGuess = 0;

export function KeepNumberScreen() {
    // const [currentScreen, setCurrentScreen] = useState('main_screen');
    const [isStarted, setIsStarted] = useState(false);
    const [guess, setGuess] = useState(maxGuess / 2);
    const [upperLimit, setUpperLimit] = useState(maxGuess);
    const [lowerLimit, setLowerLimit] = useState(minGuess);
    const [guessCount, setGuessCount] = useState(1);
    const [didWin, setDidWin] = useState(null);
    const navigate = useNavigate();

    // const onStartClick = () => {
    //     setCurrentScreen('game_screen');
    // }

    const onStartClick = () => {
        setIsStarted(true);
    }

    const onUpClick = () => {
        setLowerLimit(guess);
        const newGuess = Math.floor(guess + ((upperLimit - guess) / 2));
        setGuess(newGuess);
        setGuessCount(guessCount + 1);
    }

    const onDownClick = () => {
        setUpperLimit(guess);
        const newGuess = Math.floor(guess - ((guess - lowerLimit) / 2));
        setGuess(newGuess);
        setGuessCount(guessCount + 1);
    }

    const onYesClick = () => {
        setDidWin(true);
        // setCurrentScreen('end_screen');
    }

    const onNoClick = () => {
        setDidWin(false);
        // setCurrentScreen('end_screen');
    }

    // if (currentScreen === 'main_screen') {
    //     return (
    //         <div className='container'>
    //             <div>KEEP NUMBER (1-100)</div>
    //             <button onClick={onStartClick}>START</button>
    //         </div>
    //     )
    // }

    if (!isStarted) {
        return (
            <div className='container'>
                <div>KEEP NUMBER (1-100)</div>
                <button onClick={() => onStartClick()}>START</button>
            </div>
        )
    }
    // if(currentScreen === 'end_screen') {
    //     return (
    //         <div className='container'>
    //             {didWin ? <div>I Win!</div> : <div>I Fail</div>}
    //         </div>
    //     )
    // }


    if (didWin !== null) {
        navigate(`/keep-number-end-game?win=${didWin}`)
        return null;
    }

    return (
        <div className='container'>
            <div>GUESS {guessCount}/7</div>
            <button onClick={onUpClick} disabled={guessCount === maxGuessCount}>UP</button>
            <div>IS IT {guess}?</div>
            <button onClick={onDownClick} disabled={guessCount === maxGuessCount}>DOWN</button>
            <div>
                <button onClick={onYesClick}>YES</button>
                {guessCount === maxGuessCount ? <button onClick={onNoClick}>NO</button> : null}
            </div>

        </div>
    )
}
