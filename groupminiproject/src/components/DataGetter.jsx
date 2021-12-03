import axios from "axios";
import { useEffect, useState } from "react";

const DataGetter = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get("http://api.disneyapi.dev/characters").then((result) => {

            setData(result.data.data)
        }, (error) => {

            setError(error);
        })
    }, [])

    if (error) {
        return <div>
            <h1>Big Fat Error : {error.message}</h1>
        </div>
    } else {
        console.log(data);
        return <h2>Data Got</h2>
    }

}

export default DataGetter;