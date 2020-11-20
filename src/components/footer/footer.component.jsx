import "./footer.styles.css";

const Footer = () => {
  return (
    <div className="bg-primary footer">
      <h6>
        <sup>&copy;</sup>Made with ❤ by Sajjan
      </h6>
      <h6>
        {new Date().getFullYear()} - {new Date().getFullYear() + 1}
      </h6>
    </div>
  );
};

export default Footer;
