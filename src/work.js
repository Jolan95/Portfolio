import Projet from './components/projet'
import Nav from "./components/nav.js";
import FullPage from './components/fullPage';
import background3 from "./images/keyboard.jpg";
import logoWerService from "./images/wrs.jpg";
import logoLQS from "./images/le_quotidien_sport.jpg"
import logoJgames from "./images/games.jpg"
import logoSymfony from "./images/symfony.png"
import logoPhp from "./images/php.png"
import logoLess from "./images/less.png"
import logoJs from "./images/js.png"




function Work() {
 	let langageGames = [logoPhp, logoJs, logoLess];
 	let langageSport = [logoSymfony, logoJs]
 	let langageWer = [logoSymfony, logoJs, logoLess]
 	let buttonsGames = [{link : "https://github.com/Jolan95/Games-Projet", styleName : "git", label : ""},{link : "https://games-online.herokuapp.com/", styleName : "web", label : ""}];
 	let buttonsSport = [{link : "https://github.com/Jolan95/LeQuotidienSport", styleName : "git", label : ""}]
 	let buttonsWer = [{link : "https://www.werservice.fr/", styleName : "web", label : ""}]
  	return (
		<div>
    	    <Nav location="work"></Nav> 
			<FullPage background_image={background3} gradient="rgba(255, 255, 255, .68),rgba(106, 173, 199, 0.699)" styleName="pt-5">
    	        <div>
    	            <div>
    			        <h1 className="text-center mb-5">Mes Réalisations</h1>
    	            </div>
    	        	<div className="container-fluid container-xl">
					    <div className="d-flex justify-content-around flex-column flex-lg-row align-items-center">
					        <Projet  alt="hello" languages={langageGames} title="Jeux en Ligne" details="Mon premier projet en PHP brut et une base de donnée Mysql" background={logoJgames} buttons={buttonsGames}></Projet>  
					        <Projet  alt="hello" languages={langageSport} title="Le Quoditien sport" details="Projet Symfony d'un site d'article de sport en ligne"  background={logoLQS} buttons={buttonsSport}></Projet>  
					        <Projet  alt="hello" languages={langageWer} title="We'r Service" details="Refonte intégrale du site vitrine We'r service" background={logoWerService} buttons={buttonsWer}></Projet>  
					    </div>
    	        	</div>
    	        </div>
			</FullPage>	
		</div>
  	);
}

export default Work;