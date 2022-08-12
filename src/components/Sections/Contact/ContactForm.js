import { useRef, useState } from "react";
import useInput from "../../../hooks/use-input";
import ConfirmationBox from "./confirmationBox";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui/ui-slice";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ContactForm = () => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const formRef = useRef();

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

  const {
    value: subjectValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubject,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (fullNameIsValid && emailIsValid && messageIsValid && subjectIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    setDialogOpen(true);
  };

  const sendEmail = () => {
    dispatch(
      uiActions.showMessage({
        message: "Sending email...",
        status: "info",
      })
    );
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          dispatch(
            uiActions.showMessage({
              message: "Your message was sent succesfully",
              status: "success",
            })
          );
        },
        () => {
          dispatch(
            uiActions.showMessage({
              message:
                "Something went wrong. Please contact me through my LinkedIn account!",
              status: "error",
            })
          );
        }
      )
      .finally(() => {
        dispatch(uiActions.setLoading(false));
        resetFullName();
        resetEmail();
        resetMessage();
        resetSubject();
      });
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

  const subjectClasses = subjectHasError
    ? "contact-form__input invalid"
    : "contact-form__input";

  return (
    <>
      <div className="form-container">
        <form onSubmit={submitHandler} className="contact-form" ref={formRef}>
          <div className="contact-form__group">
            <input
              placeholder="Full Name"
              className={fullNameClasses}
              type="text"
              name="user_name"
              value={fullNameValue}
              onChange={fullNameChangeHandler}
              onBlur={fullNameBlurHandler}
            />
            <input
              placeholder="Email Address"
              className={emailClasses}
              type="text"
              name="user_email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
          </div>

          <div className="contact-form__group">
            <input
              placeholder="Subject"
              className={subjectClasses}
              type="text"
              name="email_subject"
              value={subjectValue}
              onChange={subjectChangeHandler}
              onBlur={subjectBlurHandler}
            />
          </div>

          <div className="contact-form__group">
            <textarea
              value={messageValue}
              placeholder="Message"
              rows="7"
              name="user_message"
              className={messageClasses}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            />
          </div>

          <div className="contact-form__group" style={{ marginTop: "1rem" }}>
            <button
              className="form-button"
              type="submit"
              value="Send"
              disabled={!formIsValid}
            >
              Send Message &rarr;
            </button>
          </div>
        </form>

        <ConfirmationBox
          open={dialogOpen}
          setOpen={setDialogOpen}
          confirm={sendEmail}
        />
      </div>
    </>
  );
};

export default ContactForm;
