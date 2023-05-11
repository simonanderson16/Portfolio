import About from "./About";
import Footer from "./Footer";
import Intro from "./Intro";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Skills from "./Skills";
import Timeline from "./Timeline";

export default function Portfolio() {
    return (
        <>
            <NavBar/>
            <Intro/>
            <About/>
            <Skills/>
            <Projects/>
            <Timeline/>
            <Footer/>
        </>
    );
}