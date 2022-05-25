import { useState } from 'react'

const bgColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

const LikeButton = () => {
  const [like, setLike] = useState(0)

  const likeHandler = () => {
    setLike(like + 1)
  };

  const bgColor = bgColors[like % bgColors.length];

  return (
    <div className="like-button">
      <button onClick={likeHandler} style={{ backgroundColor: bgColor }}>
        {like} Like{like !== 1 ? 's' : ''}
      </button>
    </div>
  )
}
export default LikeButton