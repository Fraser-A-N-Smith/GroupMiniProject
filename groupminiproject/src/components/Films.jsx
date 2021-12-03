import background from "../resources/filmsbg.jpg";

const Films = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, height: '100vh' }} class="container-fluid">
            <div>
                <h1>Films</h1>
            </div>
        </div>
    );
}

export default Films;