import axios from "axios";
import { useEffect, useState } from "react";
import DisneyList from "./DisneyList";

const DataGetter = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get("http://api.disneyapi.dev/characters").then((result) => {
            printData(result.data.data)
            setData(result.data.data)
        }, (error) => {
            
            setError(error);
        })
    }, [])
    const printData = (data) => {
        
        data.list.map((data) => {
           
            if (data.films[0] !== undefined) {
                console.log(data.films[0]);
                return <DisneyList list={data.films}/>
            }
        })
    }

    if (error) {
        return <div>
            <h1>Big Fat Error : {error.message}</h1>
        </div>
    } else {
        console.log(data);
       return <DisneyList list={data}/>
    }
   
}
 
export default DataGetter;