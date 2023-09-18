import awning from "../assets/awning.png";

function Header() {
  return (
    <div>
      <img src={awning} alt="food truck" />
      <h1>Food Truck Favorites</h1>
    </div>
  );
}

export default Header;
