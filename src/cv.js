import FullPage from './components/fullPage';
import Skill from "./components/skill.js"
import Info from "./components/info.js"
import background from "./images/presentation.jpg";
import Nav from './components/nav';
import logoReact from "./images/react.png";
import logoMysql from "./images/mysql.png";
import logoSymfony from "./images/symfony.png"
import logoPhp from "./images/php.png"
import logoCss from "./images/css.png"
import logoJs from "./images/javascript.png"
import Git from "./images/git.png";




function Cv() {

	/**function calcul age */
	function CalculAge(dtn) {  
		var today = new Date(); 
		
		var an=dtn.substr(6,4); 
		var mois=dtn.substr(3,2);
		var day= dtn.substr(0,2); 
	
		var dateNaissance = new Date(an + "-" + mois + "-" + day);
	
		var age = today.getFullYear() - dateNaissance.getFullYear();
		var m = today.getMonth() - dateNaissance.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
			age = age - 1;
		}
		return age;
		
	}
 
    return (
        <>
        	<Nav location="cv"></Nav>
			<FullPage background_image={background} gradient="rgba(106, 173, 199, 0.699), rgba(255, 255, 255, .68)">
			  	<h1 class="text-center">Mon CV</h1>
        	    <div className="container cv">
        	        <div className="wrapper-infos"> 
						<div className="box-opacity">
							<div className="text-center">
								<h2>Mes infos personnelles</h2>
							</div>
							<div className="infos row">
								<Info label="NOM"> Jolan Aubry</Info>
								<Info label="AGE"> {CalculAge("08/02/1996")} ans</Info>
								<Info label="FORMATION"> Graduate développeur full-stack <span className="d-none d-xl-inline">(Studi)</span></Info>
								<Info label="VILLE"> Bordeaux</Info>
								<Info label="NATIONALITE"> Français</Info>
								<Info label="EMAIL"> jolan.aubry@hotmail.fr</Info>
							</div>
						</div>
        	        </div>
        	        <div className="wrapper-skills">   
						<div className="text-center">
							<h2>Compétences</h2>
							<div className="skills row">	
								<Skill background="#A5F8D3" width="70%" label="Css" logo={logoCss} styleName="typing-70"/>
								<Skill background="#4F5B93" width="50%" label="PHP" logo={logoPhp} styleName="typing-50"/>
								<Skill background="#F0DB4F" width="60%" label="Javascript" logo={logoJs} styleName="typing-60"/>
								<Skill background="#802392" width="50%" label="Symfony" logo={logoSymfony} styleName="typing-50"/>
								<Skill background="#61DBFB" width="40%" label="React" logo={logoReact} styleName="typing-40"/>
								<Skill background="red" width="40%" label="Mysql" logo={logoMysql} styleName="typing-40"/>
								<Skill background="black" width="40%" label="Github" logo={Git} styleName="typing-40"/>
							</div>
						</div> 
        	        </div>	
        	    </div>
			</FullPage>
    	</>
  	);
}
export default Cv;