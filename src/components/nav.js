import {Link} from "react-router-dom";

export default function Nav(props) {
	let home=""
	let work=""
	let cv=""

  	switch(props.location){
  	  	case "home":
  	  	  	home = "active";
  	  	break;  
  	  	case "work": 
  	  	  	work = "active";
  	  	break;  
  	  	default:
  	  	  	cv="active";
  	}
  	return (
  	  	<nav className=" navbar navbar-expand ">
  	  	    	<ul className="navbar-nav">
  	  	    	  	<li className='nav-item'>
  	  	    	  	  	<Link to="/" id="home" className={`nav-link ${home}`} >Home</Link>
  	  	    	  	</li>
  	  	    	  	<li className='nav-item'>
  	  	    	  	  	<Link to="/work" id="work" className={`nav-link ${work}`} >Work</Link>
  	  	    	  	</li>
  	  	    	  	<li className='nav-item'>
  	  	    	  	  	<Link to="/cv" id="cv" className={`nav-link ${cv}`} >Cv</Link>
  	  	    	  	</li>
  	  	    	</ul>
  	  	</nav>
  	)
}

