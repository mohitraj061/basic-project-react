import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Fetch currency data from the API
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json()) // Convert response to JSON
            .then((res) => setData(res[currency])) // Update state with currency data
            .catch((error) => console.error("Error fetching data:", error)); // Handle errors
    }, [currency]); // Re-run effect when `currency` changes

    return data; // Return the fetched data
}

export default useCurrencyInfo; // Export the hook