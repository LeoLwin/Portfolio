import React, { useState } from "react";
import "./Portfolio.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { CheckCircleOutline } from "@mui/icons-material";

const Contact = () => {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [textValues, setTextValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (name) => (event) => {
    setTextValues({
      ...textValues,
      [name]: event.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k4zoz57",
        "template_g4knusp",
        form.current,
        "ilTQiaTJGP1ELGkhe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 5000);
          setTextValues({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const isInvalid = (value) => !value.trim();

  return (
    <div className="info border border-info px-5 pt-3 rounded-4 ">
      {showAlert && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert icon={false} severity="success">
            This is a success alert !
          </Alert>
        </Stack>
      )}

      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="row">
          <div className="col">
            <TextField
              required
              id="outlined-required"
              label="Your Name"
              name="user_name"
              placeholder="Name??"
              value={textValues.user_name}
              onChange={handleChange("user_name")}
              className={isInvalid(textValues.user_name) ? "is-invalid" : ""}
            />
            <div className="invalid-feedback">Name is required.</div>
            <br />
            <TextField
              required
              id="outlined-required"
              label="Your Email"
              name="user_email"
              placeholder="yourEmail@gmail.com"
              value={textValues.user_email}
              onChange={handleChange("user_email")}
              className={isInvalid(textValues.user_email) ? "is-invalid" : ""}
            />
            <div className="invalid-feedback">Email is required.</div>
            <br />
          </div>
          <div className="col">
            <TextField
              id="outlined-multiline-static"
              label="Tell Me...."
              multiline
              name="message"
              rows={6}
              placeholder="Get in touch and let's make things happen! "
              value={textValues.message}
              onChange={handleChange("message")}
              className={isInvalid(textValues.message) ? "is-invalid" : ""}
            />
            <div className="invalid-feedback">Message is required.</div>
          </div>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              onClick={sendEmail}
              className="mb-2"
            >
              Send
            </Button>
          </Stack>
        </div>
      </Box>
    </div>
  );
};

export default Contact;
