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

const openResume = () => {
    window.open("https://drive.google.com/file/d/1AfXM1wI0m1gaMV1GRwxx-8MKmzY-LosY/view?usp=sharing");
};

export default function ButtonLinks() {
    return (
        <div className="button-links">
            <button className="github-button" onClick={openGithub}><FaGithub size={25}/></button>
            <button className="linkedin-button" onClick={openLinkedin}><FaLinkedin size={30}/></button>
            <button className="email-button" onClick={openEmail}><FaEnvelope size={30}/></button>
            <button className="resume-button" onClick={openResume}>
                <div className="resume-button-content">
                    <FaFilePdf size={25}/>
                    <p style={{marginLeft: '1vmin', marginRight: '1vmin', fontSize: '12px'}}>Resume</p>
                </div>
            </button>
        </div>
    )
}