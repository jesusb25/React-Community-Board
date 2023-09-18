import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="card">
      <img className="cardImg" src={props.imgSource} alt="food truck" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>

      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button>View Menu</button>
      </a>
    </div>
  );
}

Card.propTypes = {
  imgSource: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
