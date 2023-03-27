
import emailjs from "@emailjs/browser";

export const sendEmail = (e,form) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_nq68zlv",
        "template_jz2fafs",
        form.current,
        "3Xj1FFOzzlVfAPWbH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          
          console.log(error.text);
        }
      );
  
    e.target.reset();
  };

