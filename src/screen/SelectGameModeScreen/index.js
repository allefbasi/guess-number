import {NavLink} from "react-router-dom";
import './index.css'
export function SelectGameModeScreen () {
    return (
        <>
            <div className='container'>
                    <h1>
                        SELECT GAME MODE
                    </h1>
                    <ul>
                        <li>
                            <div>
                                <NavLink className='navLink' to={'/guess-number'}>USER GUESS</NavLink>
                            </div>
                        </li>
                        <li>
                            <div>
                                <NavLink className='navLink' to={'/keep-number'}>COMPUTER GUESS</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
        </>
    )
}
