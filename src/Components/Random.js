const Random = ({ min, max }) => {

  const random = Math.floor(
    Math.random() * (max - min) + min
  );

  return (
    <div className="id-card">
      <div>
        {`Random value between ${min} and ${max} => ${random}`}
      </div>
    </div>
  );
};

export default Random;