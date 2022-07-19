export default function FullPage(props) {
   
  return (
    <div className={`full-page ${props.styleName}`} style={{backgroundImage : `linear-gradient(${props.gradient}) , url(${props.background_image})`}}>
        {props.children}
    </div>
  )
}
