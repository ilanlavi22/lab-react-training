//import rgbHex from 'rgb-hex';


/* My Solution   */
// const BoxColor = ({ r, g, b }) => {
//   return (
//     <div
//       className="box-color"
//       style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
//       <span>
//         rgb({r},{g},{b})
//       </span>
//       <span>#{rgbHex(`${r},${g},${b}`)}</span>
//     </div>
//   );
// };

// return (
//   <div
//     className="box-color"
//     style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
//     <span>
//       rgb({r},{g},{b})
//     </span>
//     <span>#{rgbHex(`${r},${g},${b}`)}</span>
//   </div>
// );
// };

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

const rgbToHex = (r, g, b) =>
  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

const BoxColor = ({ r, g, b }) => {
  const color = `rgb(${r},${g},${b})`;
  const hexColor = rgbToHex(r, g, b);
  const backgroundIsLight = r + g + b > (255 * 3) / 2;

  return (
    <div
      className="box-color"
      style={{
        backgroundColor: color,
        color: backgroundIsLight ? 'black' : 'white'
      }}>
      <span>{color}</span>
      <span>{hexColor}</span>
    </div>
  );
};

export default BoxColor;