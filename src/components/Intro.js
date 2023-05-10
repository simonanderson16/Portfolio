

export default function Intro() {

    return (
        <>
        <div className="richmond-image-container">
            <img src={require("../RichmondSkyline.JPG")} className="richmond-image"></img>
            <div className="intro-overlay">
                <div className="headshot-container">
                    <img src={require("../PortfolioHeadshot.jpg")} className="headshot"></img>
                </div>
                <h1>Simon Anderson</h1>
            </div>
        </div>
        </>
    );
}