import rgbHex from 'rgb-hex';

const BoxColor = ({ r, g, b }) => {
  return (
    <div
      className="box-color"
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <span>
        rgb({r},{g},{b})
      </span>
      <span>#{rgbHex(`${r},${g},${b}`)}</span>
    </div>
  );
};
export default BoxColor;