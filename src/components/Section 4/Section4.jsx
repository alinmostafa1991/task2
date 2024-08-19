import './../Section 4/Section4.css'
import Card3 from './../Card3/Card3.jsx' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

function Section4() {
  return (
    <div className='Section4'>
        <div className='Section4-Container1'>
            <div className='Section4-Container1-div1'>
                <h4>BEST DEAL</h4>
                <p><span>Find Your Best</span> Deal Right Now!</p>
            </div>
            <div className='Section4-Container1-div2'>
                <Card3 titel="Appartment" background = "red" />
                <Card3 titel="Villa House" background = "black" />
                <Card3 titel="Penthouse" background = "black" /> 
            </div>
        </div>
        <div className='Section4-Container2'>

            <div className='Section4-Container2-Properties'>
            <div className='Section4-border'> 
                <p>Total Flat Space <span>185 m2</span></p>
            </div>
            <div className='Section4-border'> 
                <p>Floor number <span>26th</span></p>
            </div>
            <div className='Section4-border'> 
                <p>Number of rooms  <span>4</span></p>
            </div>
            <div className='Section4-border'>
                <p>Parking  Available<span>Yes</span></p>
            </div>
            <p className='non-border'>Payment process <span>Bank</span></p>
            </div>

            <img src="./images/property-05.jpg" alt="" />

            <div className='Paragraf'>
                <h4>Erxtra Info About Prperty</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa velit voluptatem iure ut, nobis dolorum sequi labore?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt perferendis reprehenderit adipisci architecto cupiditate nam aliquam autem quae!</p>
                <div className='Section4-Table'>
                    <div><FontAwesomeIcon className='Section4-Icon' icon={faCalendar} style={{width: "20px" , height: "20px" ,color: "white" , background: "#f35525" , border: "11px solid #f35525",}} /></div>
                    <button>Schedule a Visit</button>
                </div>
            </div>

        </div>
   </div>
  )
}

export default Section4
