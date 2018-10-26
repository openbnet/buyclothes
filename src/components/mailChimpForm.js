import React from "react";
import Mailchimp from 'react-mailchimp-form'
import SimpleSchema from "simpl-schema";

const mailChimpAction = "https://madthread.us17.list-manage.com/subscribe/post?u=936000290ca667d12dd8f65c0&amp;id=1337436acd"

const EmailFormSchema = new SimpleSchema({
    email: {
      type: String,
      optional: true,
      regEx: SimpleSchema.RegEx.Email
    }
  });
  

class MailChimpForm extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      email: "",
    };
  }


  render() {
    return (
      <div>
        <Mailchimp
            action={mailChimpAction}
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'JOIN THE WAITLIST',
                type: 'email',
                required: true
              }
            ]}
            />
      </div>
    );
  }

}

export default MailChimpForm