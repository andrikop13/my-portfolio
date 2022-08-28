import { ContactForm, MyLocation } from "@components/sections";

const Contact = () => {
  return (
    <section className="section-contact" id="contact">
      <h1 className="section-heading special">Get In Touch</h1>
      <div className="contact">
        <ContactForm></ContactForm>
        <MyLocation></MyLocation>
      </div>
    </section>
  );
};

export default Contact;
