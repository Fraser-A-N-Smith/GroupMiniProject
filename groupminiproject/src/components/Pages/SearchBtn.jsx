import { useState } from "react"

const SearchBtn =()=>{


const [userName, setUserName]=useState("");
const [password, setPassword] = useState("");


const submit =(e) =>{
    e.preventDefault();
    const dataToSend = JSON.stringify({userName, password})
    console.log(dataToSend);
    setUserName("");
    setPassword("");
}
return(
    <div>
        <form onSubmit={submit}>
            <label>User Name</label>
            <input
            id="userName"
            type="text"
            name="userName"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            />
            <label>Password</label>
            <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        
    </div>
)

}

export default SearchBtn;