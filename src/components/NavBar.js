import {FaGithub, FaLinkedin, FaEnvelope, FaFile, FaFilePdf} from "react-icons/fa";
import ButtonLinks from "./ButtonLinks";

export default function NavBar() {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const scrollToAbout = () => {
        const section = document.getElementById('about-section');
        const sectionRect = section.getBoundingClientRect();
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = sectionRect.top + scrollPosition - (8 * window.innerHeight / 100); // 8vmin equivalent calculation
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };

    const scrollToSkills = () => {
        const section = document.getElementById('skills-section');
        const sectionRect = section.getBoundingClientRect();
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = sectionRect.top + scrollPosition - (8 * window.innerHeight / 100); // 8vmin equivalent calculation
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        const section = document.getElementById('projects-section');
        const sectionRect = section.getBoundingClientRect();
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = sectionRect.top + scrollPosition - (8 * window.innerHeight / 100); // 8vmin equivalent calculation
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };

    const scrollToTimeline = () => {
        const section = document.getElementById('timeline-section');
        const sectionRect = section.getBoundingClientRect();
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = sectionRect.top + scrollPosition - (8 * window.innerHeight / 100); // 8vmin equivalent calculation
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };

    return (
        <div className="nav-bar">
        <button className="name-button" onClick={scrollToTop}>Simon Anderson</button>
        <div className="nav-scroll-buttons">
            <button className="navigation-button" onClick={scrollToAbout}>About</button>
            <button className="navigation-button" onClick={scrollToSkills}>Skills</button>
            <button className="navigation-button" onClick={scrollToProjects}>Projects</button>
            <button className="navigation-button" onClick={scrollToTimeline}>Timeline</button>
        </div>
        {/*<ButtonLinks/>*/}
        <div className="navbar-buttons">
            <ButtonLinks/>
        </div>
        </div>
    );
    
}