function Button(props) {
    return(
        <a  target="_blank" rel="noreferrer"  href={props.link}><button className={`button-link ${props.styleName}`}>{props.children}</button></a>
    )
}
export default Button