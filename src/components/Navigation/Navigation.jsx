import styles from "./Navigation.modules.css";
import { BsSearch } from "react-icons/bs";
const Navigation = () => {
  console.log(styles);
  return (
    <nav className="navb">
      <div className="logo">
        <img
          src="/images/logo.png"
          alt="flipkart_logo"
          className="flipkart_logo"
        />
        <a href="#" className="under_logo">
          <p>
            Explore <span className="left_under_logo">Flipkart</span>
            <img src="/images/plus.png" className="plus_logo" alt="" />
          </p>
        </a>
      </div>
      <div className="search_bar">
        <form className="search_component">
          <input className="input_search container" />
          <BsSearch className="mag_search container" />
          <button className="button_search container">Login</button>
        </form>
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">Find</li>

        <li href="#">Cart</li>
      </ul>
    </nav>
  );
};

export default Navigation;
