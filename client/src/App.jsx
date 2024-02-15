import { useSelector, useDispatch } from "react-redux";

import { setCurrency } from "./features/slices/monoSlice";

const App = () => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.mono.data);
    const isLoading = useSelector(state => state.mono.isLoading);
    const isError = useSelector(state => state.mono.isError);

    const handleGetCurrency = () => {
        dispatch(setCurrency());
    }
    return (
        <>
            {
                isLoading && <h1>Loading...</h1>
            }

            {
                isError && <h1>Oops! Something went wrong...</h1>
            }

            <button onClick={handleGetCurrency}>Get currency</button>

            { data.map(el => {
            return (
                <div>
                    <p>{el.currencyCodeA}</p>
                    <p>{el.currencyCodeB}</p>
                    <p>{el.date}</p>
                    <p>{el.rateBuy}</p>
                    <p>{el.rateSell}</p>
                </div>
            )
        }) }
        </>
    )
}

export default App;