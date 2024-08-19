import './../Card1/Card1.css'

function Card1(props) {
  return (
    <div className={props.setstyle}>
        <div className='Card1-Properties1'>
        <img src={props.img} alt="" />
        <p>{props.imgtext}</p>
        </div>
        <div className='Card1-Properties2'>
            <h1>{props.title}</h1>
            <p>{props.value}</p>
        </div>
    </div>
  )
}

export default Card1
