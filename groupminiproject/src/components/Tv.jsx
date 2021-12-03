import background from "../resources/tvbg.jpg";

const Tv = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, height: '100vh' }} class="container-fluid">
            <div>
                <h1>Tv</h1>
            </div>
        </div>

    );
}

export default Tv;