import axios from 'axios';
import { useEffect, useState } from "react";

const Characters = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://api.disneyapi.dev/characters").then((result) => {
            console.log(result.data.data);
            setData(result.data.data)
            console.log(data);
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
        console.log("**************************************");
        console.log(data[0]);


        console.log("---------------------------------------------------------------------");

        let Please = [];
        for (let i = 0; i < data.length; i++) {
            Please.push(data[i].name);
        }
        console.log(Please);
        return (
            <>
                {
                    Please.map((a) => (
                        <p>{a}</p>
                    ))
                }
            </>


        )
    }
}

export default Characters;