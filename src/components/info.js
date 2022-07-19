
function Info(props) {
    return (
        <div className="col-12 col-lg-6 ">
            <div className="typewriter">
                <span className="d-none d-sm-inline">
                    {props.label} : 
                </span>
                {props.children}
            </div>
        </div>
    );
}

export default Info;