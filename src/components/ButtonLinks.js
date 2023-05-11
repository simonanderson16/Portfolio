import {FaGithub, FaLinkedin, FaEnvelope, FaFile, FaFilePdf} from "react-icons/fa";

const openGithub = () => {
    window.open("https://github.com/simonanderson16");
};

const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/simon-anderson-84baa8274");
};

const openEmail = () => {
    window.open("mailto:uhx8bu@virginia.edu");
};

export default function ButtonLinks() {
    return (
        <>
            <button className="github-button" onClick={openGithub}><FaGithub size={30}/></button>
            <button className="linkedin-button" onClick={openLinkedin}><FaLinkedin size={35}/></button>
            <button className="email-button" onClick={openEmail}><FaEnvelope size={35}/></button>
            <button className="resume-button">
                <div className="resume-button-content">
                    <FaFilePdf size={30}/>
                    <p style={{marginLeft: '1vmin', marginRight: '1vmin', fontSize: '12px'}}>Resume</p>
                </div>
            </button>
        </>
    );
}