const Random = (props) => {
  return (
    <div className="id-card">
      <span>
        Random value between 1 and 6: {props.min} {props.max}
      </span>
    </div>
  );
};

export default Random;