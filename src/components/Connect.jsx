import { useRef, useState } from "react";
import "./Connect.scss";
import * as motion from "motion/react-client";
import "animate.css";
import robot from "./../../assets/robot.png";
import { Button, TextField } from "@mui/material";
import { Helmet } from "react-helmet-async";

const Connect = () => {
  const formRef = useRef(null);
  const [formFields, setFormFileds] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    if (Object.entries(formFields).some(([_, value]) => value == "")) {
      return null;
    }
    return setTimeout(() => {
      alert("Submitted Successfully!");
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 100);
  };

  const handleInputChange = (field, value) => {
    setFormFileds((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  return (
    <div className="connectContainer">
      <Helmet>
        <title>Connect | Nishant Mourya</title>
      </Helmet>
      <div className="connectCardsContainer animate__animated animate__slideInRight">
        <div className="socialsFlexContainer animate__animated animate__headShake animate__infinite">
          <img className="roboImg" src={robot} />
        </div>
        <div className="formCard">
          <span className="formHeader">Get In Touch</span>
          <div className="formContainer">
            <form ref={formRef}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="standard"
                fullWidth
                required={true}
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
              <TextField
                id="email"
                type="email"
                label="Email"
                name="email"
                variant="standard"
                fullWidth
                required={true}
                className="marginTop"
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
              <TextField
                id="message"
                label="Message"
                name="message"
                variant="standard"
                multiline
                rows={4}
                fullWidth
                required={true}
                className="marginTop"
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
              <Button
                onClick={() => handleSubmit()}
                className="marginTop"
                variant="text"
                disabled={Object.entries(formFields).some(
                  ([_, value]) => value == ""
                )}
                fullWidth
              >
                Submit
              </Button>
            </form>
            {/* <div> */}
            <div className="socialsCard marginTopmore ">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/nishhantm/"
                >
                  <i className="socialIcon devicon-linkedin-plain" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <a target="_blank" href="https://github.com/iamthedawn">
                  <i className="socialIcon devicon-github-original" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <a target="_blank" href="mailto:nishhantm@gmail.com">
                  <i className="socialIcon fa-solid fa-envelope" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <a target="_blank" href="https://www.instagram.com/nishhantm/">
                  <i className="socialIcon fab fa-instagram" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <a target="_blank" href="https://x.com/nishhantm">
                  <i className="socialIcon devicon-twitter-original" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <a
                  target="_blank"
                  href="https://discordapp.com/users/nishhantm"
                >
                  <i className="socialIcon fab fa-discord" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <a
                  target="_blank"
                  href="https://www.facebook.com/its.nishant.maurya"
                >
                  <i className="socialIcon devicon-facebook-plain" />
                </a>
              </motion.div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
