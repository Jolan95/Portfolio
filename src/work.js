import Projet from './components/projet'
import Nav from "./components/nav.js";
import FullPage from './components/fullPage';
import background3 from "./images/keyboard.webp";
import logoWerService from "./images/wrs.webp";
import logoTime from "./images/time.webp";
import logoRunners from "./images/logorr.webp"
import logoLQS from "./images/le_quotidien_sport.webp"
import logoJgames from "./images/games.webp"
import logoSymfony from "./images/symfony.webp"
import logoPhp from "./images/php.webp"
import logoLess from "./images/less.webp"
import logoJs from "./images/js.webp"
import logoFit from "./images/fitngo.webp"
import logoReact from "./images/react.webp"
import logoNode from "./images/node.webp"
import logoMongo from "./images/mongo.webp"
import logoExpress from "./images/express.webp"
import logoHeroku from "./images/heroku.webp"

function Work() {
 	let langageGames = [logoPhp, logoJs, logoLess, logoHeroku];
 	let langageFit = [logoSymfony, logoJs, logoHeroku];
 	let langageSport = [logoSymfony, logoJs, logoHeroku]
 	let langageWer = [logoSymfony, logoJs, logoLess]
	let langageTime = [logoJs, logoReact,logoNode ,logoExpress, logoMongo ]
	let langageRunner = [logoJs, logoReact, logoNode, logoExpress]
 	let buttonsGames = [{link : "https://github.com/Jolan95/Games-Projet", styleName : "git", label : ""},{link : "https://games-online.herokuapp.com/", styleName : "web", label : ""}];
 	let buttonsRunners = [{link : "https://github.com/Jolan95/RoadRunners", styleName : "git", label : ""},{link : "https://road-runners.netlify.app", styleName : "web", label : ""}];
 	let buttonsSport = [{link : "https://github.com/Jolan95/LeQuotidienSport", styleName : "git", label : ""},{link : "https://lequotidiensport.herokuapp.com/", styleName : "web", label : ""}]
 	let buttonsWer = [{link : "https://www.werservice.fr/", styleName : "web", label : ""}]
 	let buttonsFit = [{link : "https://github.com/Jolan95/Fitngo", styleName : "git", label : ""},{link : "https://fitngo.herokuapp.com/", styleName : "web", label : ""}]
 	let buttonsTime = [{link : "https://github.com/Jolan95/HistoryGame", styleName : "git", label : ""},{link : "https://chrono-story.netlify.app/", styleName : "web", label : ""}]
  	return (
		<div>
    	    <Nav location="work"></Nav> 
			<FullPage background_image={background3} gradient="rgba(255, 255, 255, .68),rgba(106, 173, 199, 0.699)" styleName="pt-5">
    	        <div>
    	            <div>
    			        <h1 className="text-center">Mes Réalisations</h1>
    	            </div>
    	        	<div className="container">
					    <div className="row d-flex justify-content-center justify-content-md-around pb-5">
					        <Projet  alt="Road Runners" languages={langageRunner} title="Road Runners" details="Site créé pour une jeune entreprise de transport Road Runners" background={logoRunners} buttons={buttonsRunners}></Projet>  
					        <Projet  alt="Chrono-story" languages={langageTime} title="Chrono-Story" details="Projet MERN (MongoDB, Express, React, NodeJS). Site de jeu éducatif en full stack JavaScript." background={logoTime} buttons={buttonsTime}></Projet>  
					        <Projet  alt="We'r service" languages={langageWer} title="We'r Service" details="Refonte intégrale du site vitrine We'r service (réalisé en stage)." background={logoWerService} buttons={buttonsWer}></Projet>  
					        <Projet  alt="Le quotidien Sport" languages={langageSport} title="Le Quotidien sport" details="Site d'article d'actualité sportive + Panel d'administration (Projet Final de ma formation)"  background={logoLQS} buttons={buttonsSport}></Projet>  
					        <Projet  alt="Fitngo" languages={langageFit} title="Fitngo" details="Plateforme de gestion de salle de sport (Evaluation en Cours de Formation)" background={logoFit} buttons={buttonsFit}></Projet>  
					        <Projet  alt="Jeux en ligne" languages={langageGames} title="Jeux en Ligne" details="Premier projet en PHP brut et une base de donnée Mysql." background={logoJgames} buttons={buttonsGames}></Projet>  
					    </div>
    	        	</div>
    	        </div>
			</FullPage>	
		</div>
  	);
}

export default Work;