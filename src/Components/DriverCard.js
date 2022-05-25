import Rating from "./Rating"

const DriverCard = ({ name, rating, img, car }) => {

  // My Solution

  // const star = '☆'
  // const fullStar = '★'
  // let rate

  // const numberOfStars = Math.round(rating)
  // rate = fullStar.repeat(numberOfStars).padEnd(5, star)

  // return (
  //   <div className="driver-card">
  //     <img src={img} alt={name} />
  //     <div className="driver-info">
  //       <span>{name}</span>
  //       <span>{rate}</span>
  //       <span>{`${car.model} - ${car.licensePlate}`}</span>
  //     </div>
  //   </div>
  // )

  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div className="driver-info">
        <span>{name}</span>
        <Rating>{rating}</Rating>
        <span>{`${car.model} - ${car.licensePlate}`}</span>
      </div>
    </div>
  )
}
export default DriverCard