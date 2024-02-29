import "./Header.css";
import { NavLink } from "react-router-dom";
import SearchImg from "../../../public/search.png";
import HeartImg from "../../../public/heart.png";
import BasketImg from "../../../public/basket.png";

export default function Header() {
  return (
    <>
      <header>
        <NavLink to="/">
          <div className="logo">
            <p>INFERNO</p>
          </div>
        </NavLink>

        <nav>
        <NavLink to="/">
          <a href="">Главная</a>
        </NavLink>
          <NavLink to="/catalog">
            <a href="">Каталог</a>
          </NavLink>
          <a href="/#actions">Акции</a>
          <a href="/#contacts">Контакты</a>
          
        </nav>
        <div className="icons">
          <img src={SearchImg} alt="" />
          <img src={HeartImg} alt="" />
          <img src={BasketImg} alt="" />
        </div>
      </header>
    </>
  );
}
