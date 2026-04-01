import * as React from 'react';

export const ContactInfo: React.FC<{ title: string, method: string, detail: string }> = ({
  title,
  method,
  detail,
}) => {
  return (
    <div className="contact-method mb-8">
      <h3 className="flex text-2xl font-semibold mb-4">{title}</h3>
      <a href={`${method}:${detail}`} className="text-blue-500 hover:underline">
        <p className="flex text-lg text-white/60">{detail}</p>
      </a>
    </div>
  );
}

export default ContactInfo;