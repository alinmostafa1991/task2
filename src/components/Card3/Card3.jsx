import './../Card3/Card3.css'

function Card3(props) {
  return (
    <div >
      <button className={props.background}>{props.titel}</button>
    </div>
  )
}

export default Card3