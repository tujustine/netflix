import netflixLogo from "../assets/img/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={netflixLogo} className="logo" alt="logo Netflix" />
      </div>
    </>
  );
};

export default Header;
