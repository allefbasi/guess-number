import {NavLink} from "react-router-dom";

export function SelectGameModeScreen () {
    return (
        <>
            <div className='container'>
                <div style={{padding:'5px'}}>
                    <NavLink style={{marginRight:'10px'}} to={'/guess-number'}>User Guess</NavLink>
                    <NavLink to={'/keep-number'}>Computer Guess</NavLink>
                </div>

            </div>
        </>
    )
}
