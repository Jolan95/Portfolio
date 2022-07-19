import FullPage from './components/fullPage';
import background from "./images/sky2.jpg";
import Nav from './components/nav';
import { saveAs } from "file-saver";


function Home() {
    //Function downloading file
    const saveFile = () => {
        saveAs(
          "https://jolanaubry.com/CV_JolanAubry.pdf", "cv_JolanAubry.pdf"
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
                        <div>
                        Etudiant developpeur web
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                    <div className="typewriter-city">Bordeaux</div>
                    </div>
                    <button className="btn btn-light mt-3" onClick={saveFile}>Mon CV</button>
                </div>
            </FullPage>
        </>
    );
}

export default Home;