
import ReactStars from "react-rating-stars-component";



function StarRating(props) {

  return (
    <div>
    <ReactStars
      size={35}
      isHalf={true}
      count={5}
      value={4.5}/>
     </div>
    
  )
}
export default StarRating