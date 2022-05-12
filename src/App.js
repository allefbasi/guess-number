import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {SelectGameModeScreen} from "./screen/SelectGameModeScreen";
import {KeepNumberScreen} from "./screen/KeepNumberScreen";
import {GuessNumberScreen} from "./screen/GuessNumberScreen";
import {EndGameScreen} from "./screen/EndGameScreen";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<SelectGameModeScreen/>}/>
                    <Route path={'/guess-number'} element={<GuessNumberScreen/>}/>
                    <Route path={'/keep-number'} element={<KeepNumberScreen/>}/>
                    <Route path={'/end-game'} element={<EndGameScreen/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
