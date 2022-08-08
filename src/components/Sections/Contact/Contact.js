import ContactForm from "./ContactForm";
import MyLocation from "./MyLocation";

const Contact = () => {
  return (
    <section className="section-contact" id="contact">
      <div className="contact">
        <ContactForm></ContactForm>
        <MyLocation></MyLocation>
      </div>
    </section>
  );
};

export default Contact;
