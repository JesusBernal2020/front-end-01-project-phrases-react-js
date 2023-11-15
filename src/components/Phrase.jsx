import PropTypes from "prop-types";
import btn from "/public/images/arrown.png";
import "./styles/PhraseStyle.css";

const Phrase = ({ phrases, handleChangePhrase }) => {
  return (
    <section className="phrase__box">
      <article className="text-box">
        <p>{phrases}</p>
      </article>
      <span className="btn" onClick={handleChangePhrase}>
        <img src={btn} alt="" />
      </span>
    </section>
  );
};

Phrase.propTypes = {
  phrases: PropTypes.string,
  handleChangePhrase: PropTypes.func,
};

export default Phrase;
