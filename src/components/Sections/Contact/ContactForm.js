import useInput from "../../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ContactForm = () => {
  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (fullNameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(fullNameValue, emailValue);

    resetFullName();
    resetEmail();
    resetMessage();
  };

  const fullNameClasses = fullNameHasError
    ? "contact-form__input invalid"
    : "contact-form__input";

  const emailClasses = emailHasError
    ? "contact-form__input invalid"
    : "contact-form__input";

  const messageClasses = messageHasError
    ? "contact-form__input invalid"
    : "contact-form__input";

  return (
    <div className="form-container">
      <form onSubmit={submitHandler} className="contact-form">
        <div className="contact-form__group">
          <input
            placeholder="Full Name"
            className={fullNameClasses}
            type="text"
            id="name"
            value={fullNameValue}
            onChange={fullNameChangeHandler}
            onBlur={fullNameBlurHandler}
          />
          <input
            placeholder="Email Address"
            className={emailClasses}
            type="text"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>

        <div className="contact-form__group">
          <textarea
            value={messageValue}
            placeholder="Message"
            rows="7"
            id="message"
            className={messageClasses}
            // style={{ resize: "none" }}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          ></textarea>
        </div>

        <div className="contact-form__group">
          <button className="form-button" disabled={!formIsValid}>
            Send Message &rarr;
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
