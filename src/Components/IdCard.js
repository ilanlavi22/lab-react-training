const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card">
      <div className="id-card-image">
        <img src={picture} alt={firstName} />
      </div>
      <div className="id-card-info">
        <span>FirstName: {firstName}</span>
        <span>Last Name: {lastName}</span>
        <span>Gender: {gender}</span>
        <span>Height: {height / 100}m</span>
        <span>Birth: {birth.toDateString()}</span>
      </div>
    </div>
  );
};

export default IdCard;