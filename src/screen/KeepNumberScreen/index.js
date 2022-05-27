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
    }

    const onNoClick = () => {
        setDidWin(false);
    }

    if (!isStarted) {
        return (
            <div className='container'>
                <div>KEEP NUMBER (1-100)</div>
                <button className='start-button' onClick={() => onStartClick()}>START</button>
                <span onClick={()=>navigate('/')} style={{fontSize:'15px', marginTop:'7px', cursor:'pointer'}}> or back to menu</span>
            </div>
        )
    }

    if (didWin !== null) {
        navigate(`/keep-number-end-game?win=${didWin}`)
        return null;
    }

    return (
        <div className='container'>
            <div style={{fontSize:'20px'}}>Guess {guessCount}/7</div>
            <div>IS IT {guess}?</div>
            <div>
                <button className='guess-button' onClick={onYesClick}>YES!</button>
                {guessCount === maxGuessCount ? <button className='no-button' onClick={onNoClick}>NO</button> : null}
                {
                    guessCount < maxGuessCount ?
                        <span>
                            <span style={{fontSize:'20px'}}> or</span>
                            <button className='up-button' onClick={onUpClick}>UP</button>
                            <button className='down-button' onClick={onDownClick}>DOWN</button>
                        </span>:null
                }


            </div>

        </div>
    )
}
