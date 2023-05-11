

export default function Intro() {

    return (
        <div className="intro-container">
        <div className="richmond-image-container">
            <img src={require("../images/RichmondSkyline.JPG")} className="richmond-image"></img>
            <div className="intro-overlay">
                <div className="headshot-container">
                    <img src={require("../images/PortfolioHeadshot.jpg")} className="headshot"></img>
                </div>
                <h1>Simon Anderson</h1>
                <h3>Computer Science Student @ the University of Virginia - Class of 2025</h3>
            </div>
        </div>
        </div>
    );
}