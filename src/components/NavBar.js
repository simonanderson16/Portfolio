import {FaGithub, FaLinkedin, FaEnvelope, FaFile} from "react-icons/fa";

export default function NavBar() {

    const openGithub = () => {
        window.open("https://github.com/simonanderson16");
    };

    const openLinkedin = () => {
        window.open("https://www.linkedin.com/in/simon-anderson-84baa8274");
    };

    const openEmail = () => {
        window.open("mailto:uhx8bu@virginia.edu");
    };


    return (
        <div className="nav-bar">
        <h2>Simon Anderson</h2>
        <h3>About</h3>
        <h3>Skills</h3>
        <h3>Projects</h3>
        <h3>Timeline</h3>
        <div className="navbar-buttons">
            <button className="github-button" onClick={openGithub}><FaGithub size={30}/></button>
            <button className="linkedin-button" onClick={openLinkedin}><FaLinkedin size={35}/></button>
            <button className="email-button" onClick={openEmail}><FaEnvelope size={35}/></button>
            <button className="resume-button">
                <div className="resume-button-content">
                    <FaFile size={30}/>
                    <p>Resume</p>
                </div>
            </button>
        </div>
        </div>
    );
}