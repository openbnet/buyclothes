import React from "react";
import Mailchimp from '../components/mailchimp'
import SimpleSchema from "simpl-schema";

const mailChimpAction = "https://madthread.us17.list-manage.com/subscribe/post?u=936000290ca667d12dd8f65c0&amp;id=1337436acd"

const EmailFormSchema = new SimpleSchema({
    name: {
      type: String,
    },
    email: {
      type: String,
      optional: true,
      regEx: SimpleSchema.RegEx.Email
    },
    cnumber: {
      type: String,
    },
  });
  

class MailChimpForm extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      email: "",
      name:"",
      cnumber:""
    };
  }


  render() {
    return (
      <div className="mailchimp-container">
        <Mailchimp
            action={mailChimpAction}
            fields={[
              {
                name: 'NAME',
                placeholder: 'NAME',
                type: 'text',
                required: true
              },
              {
                name: 'EMAIL',
                placeholder: 'EMAIL',
                type: 'email',
                required: true
              },
              {
                name: 'CNUMBER',
                placeholder: 'CONTACT NUMBER',
                type: 'text',
                required: true
              }
            ]}
            messages={
              {
                sending: "Sending Information...",
                success: "Thank you for subscribing!",
                error: "An unexpected internal error has occurred.",
                empty: "You must write an e-mail.",
                duplicate: "Too many subscribe attempts for this email address",
                button: "I'M INTERESTED!"
              }
            }
            />
      </div>
    );
  }

}

export default MailChimpForm