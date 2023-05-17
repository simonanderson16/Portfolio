import ButtonLinks from "./ButtonLinks";

export default function About() {
    return (
        <div className="about-container" id="about-section">
            <h1>About</h1>
            {/*<div className="headshot-container" style={{marginTop:'20px', marginLeft:'10px'}}>
                    <img src={require("../images/MeInSpain.jpg")} className="headshot"></img>
    </div>*/}
            <img src={require("../images/MeInSpainLong.jpg")} className="spain-image"></img>
            <h3>Hi, I'm Simon!</h3>
            <p className="pronouns">(He/Him)</p>
            <div className="about-grid">
                <div className="about-box">
                    <p> I am currently a third-year in UVA’s School of Engineering and Applied Science pursuing a B.S. in Computer Science. 
                        I love learning new skills in this subject area, and I am currently trying to learn as much as I can to see where 
                        my areas of interest lie.
                    </p>
                    </div>
                <div className="about-box">
                    <p className="about-box-heading">Relevant Coursework:</p>
                    <ul>
                        <li>CS 1110 - Introduction to Programming</li>    
                        <li>CS 2120 - Discrete Mathematics</li>
                        <li>CS 2100 - Data Structures and Algorithms</li>
                        <li>CS 2130 - Computer Systems and Orgnization</li>
                        <li>CS 3140 - Software Development Essentials</li>
                        <li>Forge Launch Program</li>
                    </ul> 
                    </div>
                <div className="about-box">
                    <p> In addition to my passion for learning, I am also passionate about spreading my knowledge to others through teaching, 
                        working together, and problem solving. Communication and organization are some of my strong suits, so I am able to work 
                        successfully either independently or in a team environment. I can’t wait to see where my future in computer science may 
                        take me!
                    </p>
                </div>
                <div className="about-box">
                    <p className="about-box-heading">Outside Interests & Hobbies:</p>
                    <ul>
                        <li>Drone Photography</li>    
                        <li>Frisbee Golf</li>
                        <li>Traveling Around the World</li>
                        <li>Eating Ice Cream</li>
                        <li>Watching Soccer</li>
                        <li>Lifting Weights</li>
                    </ul> 
                </div>
            </div>
        </div>
    );
}