import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useDarkMode } from "./DarkModeContext";
import AlertBox from "./AlertBox";
import "../styles/Contact.css";

function Contact() {
  const { isDarkMode } = useDarkMode();
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false); // State to control the visibility of the AlertBox

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_dtmuugb", "template_eya4btk", form.current, {
        publicKey: "DrAlmxZy6if1iMRAc",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowAlert(true);
          form.current.reset();
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      className={`container form-container  ${isDarkMode ? "dark-mode" : ""}`}
    >
      {showAlert && <AlertBox />}
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`_form  ${isDarkMode ? "dark-mode" : ""}`}
      >
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
