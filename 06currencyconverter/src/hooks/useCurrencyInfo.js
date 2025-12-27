import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
    })
    .then((res) => {
        setData(res.rates);
        setLoading(false);
        console.log('Fetched rates for', currency, res.rates);
    })
    .catch((err) => {
        setError(err.message);
        // Fallback data for common currencies
        setData({
            "usd": 1,
            "inr": 83.5,
            "eur": 0.92,
            "gbp": 0.79,
            "jpy": 148.0,
            "aud": 1.52,
            "cad": 1.35,
            "chf": 0.85,
            "cny": 7.2,
            "sek": 10.8
        });
        setLoading(false);
        console.log('Using fallback data due to error:', err.message);
    });
   },[currency] )

    return { data, loading, error };


}
export default useCurrencyInfo;
