const Rating = ({ children }) => {
  let emptyStar = '☆'
  let fullStar = '★'
  let rating
  const numberOfFullStars = Math.round(children)
  /*
  0 => 0
  1.49 => 1
  1.5 => 2
  */
  rating = fullStar.repeat(numberOfFullStars).padEnd(5, emptyStar)
  /*
  using repeat on string
  using string prototype padEnd('given length' 'character to repeat')
  using string prototype padEnd(5 '☆')
  */
  return (
    <div className="rating">
      <span>{rating}</span>
    </div>
  )
}
export default Rating