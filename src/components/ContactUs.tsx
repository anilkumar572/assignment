import React from 'react';

const ContactUs = () => {
  return (
    <section className="w-full bg-white" id="contact-us">
      <div className="relative isolate">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-blue-300" />
            <h2 className="text-3xl font-bold tracking-tight">Reach Out</h2>
            <p className="mt-6 text-lg leading-8">
              Have questions or looking for personalized tech solutions? Feel free to contact us and we'll be glad to assist you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;