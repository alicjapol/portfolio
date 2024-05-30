import css from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={css.wrapper}>
      <a href="mailto:alicjaxpoltorak@gmail.com" className={css.link}>Send me an email</a>
      <a
        href="https://www.linkedin.com/in/alicja-półtorak-6b5268248/"
        target="_blank"
        rel="noopener noreferrer"
        className={css.link}
      >
        Text me on Linkedin
      </a>
    </div>
  );
};

export default Contact;
