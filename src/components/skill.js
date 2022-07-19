
function Skill(props) {

    return (
        <div className="col-12 col-xl-6">
             <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="wrapper-logo justify-content-center justify-content-sm-start">  
                    <img className="img100" alt={props.label} src={props.logo}/><div className="d-none d-sm-block px-1">{props.label}</div>
                </div>
                <div className="progressbar-wrapper">
                    <div  style={{backgroundColor : props.background, width : props.width}} className={`progressbar ${props.styleName}`}></div>
                </div>
             </div>
        </div>
    );
}

export default Skill;