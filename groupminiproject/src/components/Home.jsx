import DataGetter from "./DataGetter";
import background from "../resources/homebg.jpg";

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, height: '100vh' }} class="container-fluid">
            <div class="container">
                <h1>Homepage</h1>
            </div>
        </div>
    );
}

export default Home;