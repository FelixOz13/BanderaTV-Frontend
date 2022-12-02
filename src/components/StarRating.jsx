
import ReactStars from "react-rating-stars-component";



function StarRating(props) {

  return (
    <>
    <ReactStars
      size={35}
      isHalf={true}
      count={5}
      value={4.5}/>
     </>
    
  )
}
export default StarRating