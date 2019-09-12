import React from "react"
import NetlifyForm from 'react-netlify-form'

const Contact = () => {
    return (
      <NetlifyForm name='contact'>
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
              <input type='text' placeholder="Your name" name='Name' required />
              <input type='email' placeholder="Your email address" name='email' required />
              <textarea name='Message' required />
              <button>Submit</button>
            </div>
          }
        </div>
      )}
    </NetlifyForm>
    )
}
export default Contact
