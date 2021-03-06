import { useState } from "react";
import { useHistory } from "react-router-dom";
 
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = { name, email, message };
    console.log(submission);

    fetch('http://localhost:8000/submissions', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission)
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="h-screen items-center bg-white mt-10">
      <div className="contact-us">
        <h2 className="font-mono text-xl uppercase font-black">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input 
            type="text" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email:</label>
          <input 
            type="text" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Send Message</button>
        </form>
      </div>
    </div>
  );
}
 
export default ContactUs;