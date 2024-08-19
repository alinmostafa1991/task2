import './../Section 2/Section2.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ; 
import{ faPlay} from'@fortawesome/free-solid-svg-icons' ;

function Section2() {
  return (
    <div className='Section2'>

      <img src="./images/img01.jpg" alt="" />

      <div className='Section2-Titel'>
        <h4>VIDEO VIEW</h4>
        <p>
          <span>Get Closer View</span>
          <span>& Different </span>
          <span>Feeling</span>
        </p>
        <img src="./images/video-frame.jpg" alt="" />
        <div className='Section2-icon'>
          <FontAwesomeIcon icon={faPlay} style={{color: "#f04014",fontSize:28,width: "30px" , height: "30px" , padding:"20px 15px 20px 20px"}} />
        </div>
      </div>
      
    </div>
  )
}

export default Section2
