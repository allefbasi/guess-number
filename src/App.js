import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {SelectGameModeScreen} from "./screen/SelectGameModeScreen";
import {KeepNumberScreen} from "./screen/KeepNumberScreen";
import {GuessNumberScreen} from "./screen/GuessNumberScreen";
import {GuessNumberEndGameScreen} from "./screen/GuessNumberEndGameScreen";
import {KeepNumberEndGameScreen} from "./screen/KeepNumberEndGameScreen";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<SelectGameModeScreen/>}/>
                    <Route path={'/guess-number'} element={<GuessNumberScreen/>}/>
                    <Route path={'/keep-number'} element={<KeepNumberScreen/>}/>
                    <Route path={'/guess-number-end-game'} element={<GuessNumberEndGameScreen/>}/>
                    <Route path={'/keep-number-end-game'} element={<KeepNumberEndGameScreen/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
