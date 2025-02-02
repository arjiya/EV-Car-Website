import video1 from '../assets/ev.mp4'
import image2 from '../assets/ev1.jpg'
import image3 from '../assets/ev6.jpg'
import image1 from '../assets/ev4.jpg'
import './Background.css'


const Background = ({playStatus,heroCount}) => {
 
  
      if (playStatus){
        return(
        <video className='background' autoPlay loop muted>
            <source src={video1} type='video/mp4'/>
        </video>
        )
      }
   
      else if(heroCount===0)
      {
        return<img src={image1} className='background' alt=""/>
      }

       else if(heroCount===1)
        {
          return<img src={image2} className='background' alt=""/>
        }

        else if(heroCount===2)
            {
              return<img src={image3} className='background' alt=""/>
            }
            return null;
    };


export default Background;
 