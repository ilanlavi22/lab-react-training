import { useState } from "react";


// My Solution

// const ClickablePicture = ({ img, imgClicked }) => {

//   let [maxence, setMaxence] = useState(img);

//   const imgClickHandler = () => {
//     maxence !== img ? setMaxence(img) : setMaxence(imgClicked);
//   }
//   return (
//     <div className="click-picture">
//       <img src={maxence} alt="name" onClick={imgClickHandler} />
//     </div>
//   )
// }

const ClickablePicture = ({ img, imgClicked }) => {

  let [clicked, setClicked] = useState(false);

  const imgClickHandler = () => {
    setClicked(!clicked);
  };
  const imageSource = clicked ? imgClicked : img;

  return (
    <div className="click-picture">
      <img src={imageSource} alt="Maxence" onClick={imgClickHandler} />
    </div>
  )
}

export default ClickablePicture;