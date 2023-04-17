import Button from './button.js';

function Projet (props){
	
   	let languages = props.languages.map(function(language, i){
   	   return <img src={language} alt={props.alt} key={i} className="logo-language"></img>
   	})
   	let displayButtons = props.buttons.map(function(button, i){
   	   return <Button link={button.link} styleName={button.styleName} key={i}>{button.label}</Button>
   	})

	return (

   		<div className="wrapper-project mt-5 mb-4">
    	  	<div  style={{backgroundImage : `url(${props.background})`}} className="project">
    	  	</div>
    	  	<div className="details d-flex flex-column justify-content-between">
    	     	<div>
    	        	<h2 className="text-center title-project">{props.title}</h2>
				</div>
				<div className=" text-center">{props.details}
				</div>
    	     	<div className="d-flex justify-content-center">
    	        	<div>
    	        	{languages}
    	        	</div>
    	     	</div>
    	     	<div>
    	        	<div className="d-flex justify-content-around ">
    	         	{displayButtons}   
    	        	</div>
    	     	</div>
    	  	</div>
   		</div>
   )
}



export default Projet;