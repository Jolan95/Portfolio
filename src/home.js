import FullPage from './components/fullPage';
import background from "./images/dev.webp";
import Nav from './components/nav';
import { saveAs } from "file-saver";
import SectionLink from './components/section-link';


function Home() {
    //Function downloading file
    const saveFile = () => {
        saveAs(
          "https://jolanaubry.com/CVJolan.pdf", "cv_JolanAubry.pdf"
        );
      };
    return (
        <>
		    <Nav location="home"></Nav>
            <FullPage background_image={background} gradient="rgba(106, 173, 199, 0.399), rgba(255, 255, 255, .51)" styleName="full-center">
                <div className="text-center">
                    <div className="portrait">
                        <div className="zone-img">
                        </div>
                    </div>
                    <h1 className="my-3 name">Jolan Aubry</h1>
                    <div className="typewriter">
                        <h2>
                        Développeur web
                        </h2>
                    </div>
                    <div className="d-flex justify-content-center">
                    <h2 className="typewriter-city">Bordeaux</h2>
                    </div>
                    <button className="btn btn-light mt-3" onClick={saveFile}>Mon CV</button>
                    <SectionLink ></SectionLink>
                </div>
            </FullPage>
        </>
    );
}

export default Home;