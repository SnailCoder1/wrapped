import React from "react"
import NetlifyForm from "react-netlify-form"
import { UndrawMailSent } from 'react-undraw-illustrations';


const Contact = () => {
  return (
    <NetlifyForm name="contact" method='post' data-netlify='true' data-netlify-honeypot="bot-field">
      {({ error, success }) => (
        <>
        
        {!success &&
          <>    
            <h1 className="w-full text-center  md:w-1/2 px-3 mb-10 md:mb-3">Get in Touch</h1>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input className="block w-full bg-white-200 text-gray-700 border border-gray py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type='text' placeholder="Your name" name='name' required />
              <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="Your email" name='email' required />
              <textarea className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray py-16 px-4 mb-3 py-4 leading-tight focus:outline-none focus:bg-white" placeholder="Your message" name='message' required />
              <button className="appearance-none block w-full bg-white-200 text-gray-700 border border-indigo py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:bg-indigo">Send your message</button>
            </div>
          </>
        }
        {error &&
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">Your information was not sent. Please try again later.</div>
        }
        {success &&
          <>
          {/* <h1>Thank you for getting in touch! I will be back as soon as possible.</h1> */}
          <h1 className="content-header">Thank you for your message!</h1>
        
                    <UndrawMailSent
                        primaryColor='#019ebd'
                        height= '200px'
                        />
                    </>
          // </>
        }
        </>
      )}
    </NetlifyForm>
  )
}

export default Contact


