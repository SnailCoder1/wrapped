// import React from "react"
// import NetlifyForm from 'react-netlify-form'

// const Contact = () => {
//     return (
//       <NetlifyForm name='contact'>
//       {({ loading, error, success }) => (
//         <div>
//           {loading &&
//             <div>Loading...</div>
//           }
//           {error &&
//             <div>Your information was not sent. Please try again later.</div>
//           }
//           {success &&
//             <div>Thank you for contacting us!</div>
//           }
//           {!loading && !success &&
//             <div>
//               <input type='text' placeholder="Your name" name='Name' required />
//               <input type='email' placeholder="Your email address" name='email' required />
//               <textarea name='Message' required />
//               <button>Submit</button>
//             </div>
//           }
//         </div>
//       )}
//     </NetlifyForm>
//     )
// }
// export default Contact


import React from "react"
import NetlifyForm from "react-netlify-form"

const Contact = () => {
  return (
    <div>
    <h1 className="w-full md:w-1/2 px-3 mb-10 md:mb-3">Get in Touch</h1>
    <NetlifyForm name='contact' netlify-honeypot="bot-field" data-netlify="true" >
      {({ loading, error, success }) => (
        <div>
          {loading &&
            <div>Loading...</div>
          }
          {error &&
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">Your information was not sent. Please try again later.</div>
          }
          {success &&
            <div>Thank you for contacting us!</div>
          }
          {!loading && !success &&

            <form>    
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type='text' placeholder="Your name" name='name' required />
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type='email' placeholder="Your email" name='email' required />
                <textarea className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray py-16 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Your message" name='message' required />
                <button className="appearance-none block w-full bg-white-200 text-gray-700 border border-indigo py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:bg-indigo">Send your message</button>
              </div>
            </form>
          }
        </div>
      )}
    </NetlifyForm>
  </div>
  )
}
export default Contact



