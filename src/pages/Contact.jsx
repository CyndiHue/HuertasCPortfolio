import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mrgwrwon");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="card" style={{ marginTop: '20px', marginLeft: '100px', marginRight: '100px'}}>
  
      <form onSubmit={handleSubmit} className="row mb-4">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className="rounded-input"
        
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message" className="row">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="rounded-input"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="rounded-button">
        Submit
      </button>
    </form>
    </div>
  );
}

