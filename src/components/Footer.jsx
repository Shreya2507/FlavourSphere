import React from "react";
//
const Footer = () => {
  return (
    <div>
      <footer className="bg-footer-gradient footer xl:px-24 py-10 px-4 max-w-screen-2xl container mx-auto text-base-content">
        <aside className="logo-container">
          <img src="/logo.png" alt="" className="logo" />
          <p className="logo-text my-5  md:w-40">
            Savor the artistry where every dish is a secret masterpiece
          </p>
        </aside>
        <nav>
          <header className="footer-title ">Useful links</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <header className="footer-title">Main Menu</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Offers</a>
          <a className="link link-hover">Menus</a>
          <a className="link link-hover">Reservation</a>
        </nav>
        <nav>
          <header className="footer-title">Contact Us</header>
          <a className="link link-hover">example@email.com</a>
          <a className="link link-hover">+64 958 248 966</a>
          <a className="link link-hover">Social media</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
