import React from "react"
import jsonp from "jsonp"
import PropTypes from 'prop-types';

class Mailchimp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  };

  handleSubmit(evt) {
    evt.preventDefault();
    const { fields, action } = this.props;
    const values = fields.map(field => {
      return `${field.name}=${encodeURIComponent(this.state[field.name])}`;
    }).join("&");
    const path = `${action}&${values}`;
    const url = path.replace('/post?', '/post-json?');
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    const email = this.state['EMAIL'];
    (!regex.test(email)) ? this.setState({ status: "empty" }) : this.sendData(url);
  };

  sendData(url) {
    this.setState({ status: "sending" });
    jsonp(url, { param: "c" }, (err, data) => {
      if (data.msg.includes("already subscribed")) {
        this.setState({ status: 'duplicate' });
      } else if (err) {
        this.setState({ status: 'error' });
      } else if (data.result !== 'success') {
        this.setState({ status: 'error' });
      } else {
        this.setState({ status: 'success' });
      };
    });
  }

  render() {
    const { messages, fields, styles, className } = this.props;
    const { status } = this.state;
    return (
        <div className="form-container">
            <form onSubmit={this.handleSubmit.bind(this)} className={status}>
                {fields.map(input =>
                <input key={Math.random()}
                    onBlur={({ target }) => this.setState({ [input.name]: target.value })}
                    placeholder={input.placeholder}
                    name={input.name}
                    type={input.type}
                    defaultValue={this.state[input.name]} />
                )}
                <div className="submit-button-wrapper">
                    <button
                    disabled={status === "sending" || status === "success"}
                    type="submit"
                    >
                    {messages.button}
                    </button>
                </div>
                <div className='msg-alert'>
                {status === "sending" && <p style={styles.sendingMsg}>{messages.sending}</p>}
                {status === "success" && <p style={styles.successMsg}>{messages.success}</p>}
                {status === "duplicate" && <p style={styles.duplicateMsg}>{messages.duplicate}</p>}
                {status === "empty" && <p style={styles.errorMsg}>{messages.empty}</p>}
                {status === "error" && <p style={styles.errorMsg}>{messages.error}</p>}
                </div>
            </form>
            {status === "success"?
                 <div className="success-content" visible={status === "success"}>
                    <p className="success-title">
                        Great! You’re in!
                    </p>
                    <p className="success-sub-title">
                    Thank you for contacting us. You’re now one step closer to having an organised closet. We will contact you once we have offically launched.
                    <br/><br/>
                    cheers!
                    </p>
                </div> : null }
        </div> 
    );
  }
}

Mailchimp.defaultProps = {
  messages: {
    sending: "Sending...",
    success: "Thank you for subscribing!",
    error: "An unexpected internal error has occurred.",
    empty: "You must write an e-mail.",
    duplicate: "Too many subscribe attempts for this email address",
    button: "I'M INTERESTED!"
  },
  styles: {
    sendingMsg: {
      color: '#0652DD'
    },
    successMsg: {
      color: '#009432'
    },
    duplicateMsg: {
      color: '#EE5A24'
    },
    errorMsg: {
      color: '#ED4C67'
    }
  }
}

Mailchimp.propTypes = {
  action: PropTypes.string,
  messages: PropTypes.object,
  fields: PropTypes.array,
  styles: PropTypes.object,
  className: PropTypes.string
};

export default Mailchimp;