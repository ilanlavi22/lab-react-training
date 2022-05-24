import { useState } from 'react'

const LikeButton = () => {
  let [like, setLike] = useState(0)

  const likeHandler = () => {
    setLike(like + 1)
  }

  return (
    <div className="like-button">
      <button onClick={likeHandler}>{`${like} Likes`}</button>
    </div>
  )
}
export default LikeButton