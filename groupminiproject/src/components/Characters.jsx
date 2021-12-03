
import axios from 'axios';
import { useEffect, useState } from "react";
import background from "../resources/charactersbg.jpg";

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

        let DearGod = [];
        for (let i = 0; i < data.length; i++) {
            DearGod.push(data[i]._id);
        }
        console.log(DearGod);

        let HelpMe = [];
        for (let i = 0; i < DearGod.length; i++) {
            HelpMe.push(`Id:${DearGod[i]}   Name:${Please[i]}`)
        }

        console.log(Please);
        return (
            <div style={{ backgroundImage: `url(${background})`, height: '100%', width: '100%' }} class="container-fluid">
                <div>

                    <>
                        {
                            HelpMe.map((a) => (
                                <p>{a}</p>
                            ))
                        }
                    </>




                </div>
            </div>
        )
    }
}




export default Characters;