
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
                        {/*<FaSchool className="icon"/>*/}
                        <img src={require("../images/UVALogo.png")} className="icon"></img>                
                    </div>
                    <div className="timeline-body">
                        <h3 className="header">Started Pursuing BS in Computer Science @ UVA</h3>
                        <p className="timeline-date">August 2021</p>
                    </div>
                </div>

                <div className="timeline-box">
                    <div className="timeline-icon">
                        {/*<FaPenSquare className="icon"/>*/}   
                        <img src={require("../images/ForgeLogo.png")} style={{width:'35px', height:'35px', marginLeft:'6px', marginTop:'6px'}} className="icon"></img>                                 
                    </div>
                    <div className="timeline-body">
                        <h3 className="header">Forge Launch Program</h3>
                        <p className="timeline-date">December 2022 - May 2023</p>
                        <p>Through this program, I was trained for 50+ hours in the areas of GitHub, HTML & CSS, ReactJS, and more. In addition to these technical skills, I also received soft skills training, and this program helped me launch my career by connecting me with my first internship.</p>
                    </div>
                </div>

                <div className="timeline-box">
                    <div className="timeline-icon">
                        {/*<FaCode className="icon"/>*/}
                        <img src={require("../images/CommonLitLogo.png")} style={{marginLeft:'9px', marginTop:'10px', width:'30px', height:'30px'}} className="icon"></img>                                  
                    </div>
                    <div className="timeline-body">
                        <h3 className="header">Sotware Engineering Intern @ CommonLit</h3>
                        <p className="timeline-date">June - August 2023</p>
                        <p>Description</p>
                    </div>
                </div>

                <div className="timeline-box">
                    <div className="timeline-icon">
                        <FaCode className="icon" style={{color: 'gold'}}/>
                        {/*<img src={require("../images/SDELogo.png")} style={{marginTop:'12px'}} className="icon"></img>*/}                                  
                    </div>
                    <div className="timeline-body">
                        <h3 className="header">Teaching Assistant for Software Development Essentials</h3>
                        <p className="timeline-date">Ausust 2023 - Present</p>
                        <p>In this role, my responsibilities include grading homeworks and exams, as well as aiding in student learning. This can come in many forms, such as holding online and in-person office hours, answering questions in online class forums, and helping to give lectures if needed.</p>
                    </div>
                </div>

                <div className="timeline-box">
                    <div className="timeline-icon">
                        <FaGraduationCap className="icon"/>    
                    </div>
                    <div className="timeline-body">
                        <h3 className="header">Expected Graduation Date</h3>
                        <p className="timeline-date">May 2025</p>
                    </div>
                </div>

            </div>
        </div>
    );
}