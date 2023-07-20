import React, { useState, useEffect } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const handleScroll = () => {
    const header = document.querySelector(".h-wrapper");
    if (header) {
      if (window.scrollY > 0) {
        // Nếu đã cuộn xuống, thêm class "shrink" để thu nhỏ header
        header.classList.add("shrink");
      } else {
        // Nếu cuộn lên đầu trang, xóa class "shrink" để hiển thị lại header ban đầu
        header.classList.remove("shrink");
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Hủy đăng ký khi component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { display: menuOpened ? "flex" : "none" };
    }
  };
  return (
    <div className="header">
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img
          src="./images/logo4.png"
          alt="logo"
          width={150}
          className="logo-image"
        />


          <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
            <a href="">
              <strong>Home</strong>
            </a>
            <a href="">
              <strong>About Us</strong>
            </a>
            <a href="">
              <strong>Products</strong>
            </a>
            <a href="">
              <strong>Services</strong>
            </a>
            <div className="button-handle">
            <button className="button">
              <a href="">Contact</a>
            </button>
            </div>
          </div>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
    </div>
  );
};

export default Header;
