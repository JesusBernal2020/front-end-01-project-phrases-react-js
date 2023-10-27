/* eslint-disable react/prop-types */
import "./styles/PhraseStyle.css";

const Phrase = ({ phrases, handleChangePhrase }) => {
  return (
    <section className="phrase__box">
      <article className="text-box">
        <p>{phrases}</p>
      </article>
      <span className="btn" onClick={handleChangePhrase}>
        <img src="/public/images/arrown.png" alt="" />
      </span>
    </section>
  );
};

export default Phrase;
