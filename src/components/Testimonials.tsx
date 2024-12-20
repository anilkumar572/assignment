import React from 'react';

const Testimonials = () => {
  return (
    <section className="isolate overflow-hidden bg-white px-6 lg:px-8" id="testimonials">
      <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center"></div>
        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                I've used a few products from Some Tech Company and they consistently exceed my expectations. Their innovative design and user-centric approach make them a delight to use. I highly recommend their products to anyone looking for high quality and great customer support.
              </p>
            </blockquote>
          </div>
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-52">
            <img
              className="rounded-full bg-indigo-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="John Appleseed"
              width="208"
              height="208"
            />
          </div>
          <figcaption className="text-base lg:col-start-1 lg:row-start-3">
            <div className="font-semibold text-gray-900">John Appleseed</div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;