
import {FaGraduationCap, FaBookOpen, FaPenSquare, FaNetworkWired, FaSchool, FaCodeBranch, FaCode} from "react-icons/fa";



export default function Timeline() {
    return (
        /*<div className="timeline-container" id="timeline-section">
            <h1>Timeline</h1>
            <div className="timeline-items">
                <div className="timeline-item">
                    <h3>Started Pursuing BS in Computer Science @ UVA</h3>
                    <p>August 2021</p>
                </div>
                <div className="timeline-item">
                    <h3>Forge Launch Program</h3>
                    <p>December 2022 - May 2023</p>
                </div>
                <div className="timeline-item">
                    <h3>Sotware Engineering Intern @ CommonLit</h3>
                    <p>June - August 2023</p>
                </div>
                <div className="timeline-item">
                    <h3>Teaching Assistant for Software Development Essentials</h3>
                    <p>Ausust 2023 - Present</p>
                </div>
                <div className="timeline-item">
                    <h3>Expected Graduation Date</h3>
                    <p>May 2025</p>
                </div>
            </div>
        </div>*/
        <div className="timeline-container" id="timeline-section">
            <h1>Timeline</h1>
            <div className="vertical-timeline">
                <div className="timeline-box">
                    <div className="timeline-icon">
                        <FaSchool className="icon"/>                 
                    </div>
                    <div className="timeline-body">
                        <h3 className="header">Started Pursuing BS in Computer Science @ UVA</h3>
                        <p className="timeline-date">August 2021</p>
                        <p>Description</p>
                    </div>
                </div>

                <div className="timeline-box">
                    <div className="timeline-icon">
                        <FaPenSquare className="icon"/>                    
                    </div>
                    <div className="timeline-body">
                        <h3 className="header">Forge Launch Program</h3>
                        <p className="timeline-date">December 2022 - May 2023</p>
                        <p>Description</p>
                    </div>
                </div>

                <div className="timeline-box">
                    <div className="timeline-icon">
                        <FaCode className="icon"/>                  
                    </div>
                    <div className="timeline-body">
                        <h3 className="header">Sotware Engineering Intern @ CommonLit</h3>
                        <p className="timeline-date">June - August 2023</p>
                        <p>Description</p>
                    </div>
                </div>

                <div className="timeline-box">
                    <div className="timeline-icon">
                        <FaCodeBranch className="icon"/>   
                    </div>
                    <div className="timeline-body">
                        <h3 className="header">Teaching Assistant for Software Development Essentials</h3>
                        <p className="timeline-date">Ausust 2023 - Present</p>
                        <p>Description</p>
                    </div>
                </div>

                <div className="timeline-box">
                    <div className="timeline-icon">
                        <FaGraduationCap className="icon"/>    
                    </div>
                    <div className="timeline-body">
                        <h3 className="header">Expected Graduation Date</h3>
                        <p className="timeline-date">May 2025</p>
                        <p>Description</p>
                    </div>
                </div>

            </div>
        </div>
    );
}