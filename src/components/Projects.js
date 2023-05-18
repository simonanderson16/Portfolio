export default function Projects() {

    const openWeatherApp = () => {
        window.open("https://simonanderson16.github.io/WeatherNewsApp/");
    }

    const openTicTacToe = () => {
        window.open("https://simonanderson16.github.io/ReactTicTacToe/");
    }

    return (
        <div className="projects-container" id="projects-section">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project-item">
                <h3>This site!</h3>
                <p>Description of this site</p>
            </div>
            <div className="project-item" id="openable" onClick={openWeatherApp}>
                <h3>Weather App</h3>
                <p>Description of Weather App</p>
            </div>
            <div className="project-item">
                <h3>Dice Art</h3>
                <p>Description of Dice Art</p>
            </div>
            <div className="project-item" id="openable" onClick={openTicTacToe}>
                <h3>Tic-Tac-Toe</h3>
                <p>Description of Tic-Tac-Toe</p>
            </div>
            <div className="project-item">
                <h3>Tag</h3>
                <p>Description of Tag Game</p>
            </div>
            <div className="project-item">
                <h3>Wordle Clone</h3>
                <p>Description of Wordle Clone</p>
            </div>
            <div className="project-item">
                <h3>Quiz App</h3>
                <p>Description of Quiz App</p>
            </div>
            <div className="project-item">
                <h3>Course Review Simulation</h3>
                <p>Description of Course Review</p>
            </div>
            <div className="project-item">
                <h3>And more to come...</h3>
                <p>Potential future projects</p>
            </div>
        </div>
    </div>
    );
}