import React from 'react';

const features = [
  {
    title: 'Innovative Design',
    description: 'Crafting products that boast sleek designs and cutting-edge technology.',
  },
  {
    title: 'User-centric',
    description: 'Our solutions are meticulously designed keeping the end-user in mind.',
  },
  {
    title: 'Superior Quality',
    description: 'We prioritize quality and deliver products that attest to our commitment.',
  },
  {
    title: 'Exceptional Support',
    description: 'Backed by an exceptional support team to assist with all your queries.',
  },
];

const Features = () => {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-6xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Simplifying Complexity</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Smart Solutions
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Explore the range of thoughtfully designed solutions that effectively cater to your needs, while encapsulating the essence of technological simplicity. Amidst the complexity of technology, we carve a path to seamless usability.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.title} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.title}
                    </dt>
                    <dd className="inline"> {feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-blue-300 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-200 opacity-50 ring-1 ring-inset ring-white" />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Product screenshot"
                  className="-mb-12 w-[500px] h-[500px] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;