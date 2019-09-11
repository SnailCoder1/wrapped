import React from "react"
import NetlifyForm from 'react-netlify-form'

const Contact = () => { 
  return (
    <NetlifyForm name='Contact Form'>
      {({ loading, error, success }) => (
        <div>
          {loading &&
            <div>Loading...</div>
          }
          {error &&
            <div>Your information was not sent. Please try again later.</div>
          }
          {success &&
            <div>Thank you for contacting us!</div>
          }
          {!loading && !success &&
            <div>
              <div className="contact-form-wrapper">
                        <input className="input-field-sm" type='text' placeholder="Your name" name='name' required />
                        <input className="input-field-sm" type='email' placeholder="Your email address" name='email' required />
                        <textarea className="input-field" placeholder="Your message" name='message' required />
                        <button className="button">Send</button>
                    </div>
            </div>
          }
        </div>
      )}
    </NetlifyForm>
  )
}

export default Contact