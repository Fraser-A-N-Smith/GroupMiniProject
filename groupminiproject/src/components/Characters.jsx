import background from "../resources/charactersbg.jpg";

const Characters = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, height: '100vh' }} class="container-fluid">
            <div>
                <h1>Characters</h1>
            </div>

        </div>
    );
}

export default Characters;