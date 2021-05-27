import React from "react";
import Footer from "../Components/footer/footer";
import Header from "../Components/header/header";
import './css/Contact.css'
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="Contact">
        <Header></Header>
        <div className = 'container container-sign container-cf' >
        <h1 style={{marginLeft:'26%',fontWeight:700, marginTop:'6%'}}>Contact With ISVietNam</h1>
        <form
          className="cf"
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="half left cf">
            <input
              className = "input-login"
              type="text"
              id="input-name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
            <input
              className = "input-login"
              type="email"
              id="input-email"
              placeholder="Email address"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
            <input type="text" className = "input-login" id="input-subject" placeholder="Subject" />
          </div>
          <div className='half left cf'>
            <input
              className = "input-message"
              // name="message"
              type="text"
              id="input-message"
              placeholder="Message"
              defaultValue={""}
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button className='btn btn-contact' defaultValue="Submit" id="input-submit" >Send</button>
        </form>
        </div>
        <Footer></Footer>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost/ISVietNam/api/contact", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }
}

export default Contact;
