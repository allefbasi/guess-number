import {useSearchParams} from "react-router-dom";

export function EndGameScreen() {
    const [searchParam, setSearchParam] = useSearchParams();
    const win = searchParam.get('win')
    return (
        <>
            End game {win ==='true' ? 'User win' : 'User lose.'}
        </>
    )
}
