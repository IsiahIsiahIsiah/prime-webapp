import * as React from 'react';

import Form from '@/components/Form';
import ContactInfo from '@/components/ui/contact-info';

export const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact mb-8 mx-8 md:mx-16 pt-16">
      <h2 className="text-center text-5xl font-bold mb-8">Contact Me</h2>
      <p className="text-center text-lg text-white/60 mb-16">
        Interested in working together? Fill out the form below to get in touch.
      </p>
      <div id="contact-methods" className="grid grid-cols-[0.7fr_1fr] md:grid-cols-2 gap-8 mb-16">
        <div className="contact-methods">
          <ContactInfo title="Email" method="mailto" detail="isiah-toilalo@outlook.com" />
          <ContactInfo title="LinkedIn" method="https" detail="linkedin.com/in/isiah-toilalo" />
          <ContactInfo title="GitHub" method="https" detail="github.com/isiah-toilalo" />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Contact;