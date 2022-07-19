function Button(props) {
    return(
            <a href={props.link}><button className={`button-link ${props.styleName}`}>{props.children}</button></a>
        )
}
export default Button