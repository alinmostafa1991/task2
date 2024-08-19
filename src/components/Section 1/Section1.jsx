import './../Section 1/Section1.css' ;
import Card1 from './../Card1/Card1.jsx' ;

function Section1() {
  return (
    <div className='Section1'>
      
      <div className='Section1-images'>
        <img src="./images/featured.jpg" className='Section1-photo' alt="" />
        <img src="./images/featured-icon.png" className='Section1-icon' alt="" />
      </div>

      <div className='Section1-Featured'>
        <div className='Featured-Title'><h4>FEATURED</h4></div>
        <p className='Featured-Hero'>
          <span>Best</span>
          <span>Appartment & </span>
          <span>Sea View </span>
        </p>
        <div className='Section1-Description'>
        <h4 className='Section1-Description-title'>Best useful links ?</h4>
        <div className='Section1-Description-Text1'>
          <p>Get <span className='Section1-Description-Text1-Span1'>the best villa </span>website template in HTML CSS and Bootstrap for your business,TemlateMo provides you the <span className='Section1-Description-Text1-Span2'>best free CSS templates </span>in the world, Please tell your friends about it.</p>
          <h4>How does this work?</h4>
        </div>
        <h4 className='Section1-Description-Text2'>Why is Villa Agency the best ?</h4>
        </div>
      </div>
      
      <div className='Specifications-Container'>
      <Card1 img = "./images/info-icon-01.png" title = "250 m2" value = "Total Flat Space" setstyle = "Specifications1" />
      <Card1 img = "./images/info-icon-02.png" title = "Contract" value = "Contract ready" setstyle = "Specifications1" />
      <Card1 img = "./images/info-icon-03.png" imgtext = "Process" title = "Payment" value = "Payment" setstyle = "Specifications1" />
      <Card1 img = "./images/info-icon-04.png" imgtext = "Control" title = "Safety" value = "24/7 Under" setstyle = "Specifications2" />
      </div>
      
    </div>
  )
}

export default Section1
