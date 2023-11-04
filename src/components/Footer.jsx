import PropTypes from "prop-types";
import "./styles/FooterStyle.css";

const Footer = ({ author, planetBg }) => {
  return (
    <footer className={`app__footer ${planetBg}`}>
      <div className="content-text">
        <h3 className="text__footer">Fuente: {author} </h3>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  author: PropTypes.object,
  planetBg: PropTypes.array,
};

export default Footer;
