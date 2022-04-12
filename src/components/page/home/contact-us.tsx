import { useState } from 'react';

import { RadioGroup } from '@headlessui/react';
import Link from 'next/link';
import { FiInstagram, FiMail, FiTwitter } from 'react-icons/fi';
import { IoPaperPlaneOutline } from 'react-icons/io5';

import { Section } from '@components/layout';

const ContactUs = () => {
  const plans = ['$5k - $20k', '$20k - $50k', '$50k - $100k', '$100k +'];

  const [selected, setSelected] = useState(null as any);

  return (
    <Section yPadding="py-20">
      <div className="relative min-h-[720px] flex gap-20">
        <div className="w-1/3 px-16">
          <h3 className="text-2xl mb-3">Shoot us an e-mail</h3>
          <Link href={'mailto:hi@simpleduckstudios.com'} passHref>
            <a className="text-base">
              <FiMail className="text-secondary inline mr-2 w-[22px]" />
              <span className="inline">hi@simpleduckstudios.com</span>
            </a>
          </Link>

          <h3 className="text-2xl mb-3 mt-10">Follow our socials</h3>
          <div>
            <Link href={'https://instagram.com'} passHref>
              <a className="text-base">
                <FiInstagram className="text-secondary inline mr-2 w-[22px]" />
              </a>
            </Link>
            <Link href={'https://instagram.com'} passHref>
              <a className="text-base">
                <FiTwitter className="text-secondary inline mr-2 w-[22px]" />
              </a>
            </Link>
          </div>
        </div>

        <div className="w-2/3 px-16">
          <form action="https://formspree.io/f/mrgjyqgv" method="POST">
            <h2 className="text-2xl text-gray-500">Any inquiries?</h2>
            <h1 className="text-[40px] font-bold mb-4">
              Contact us, we’re happy to help!
            </h1>

            <div className="w-10/12 mt-6">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-gray-700"
              >
                Name & Company
              </label>
              <div className="mt-3 relative rounded-md">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full px-4 py-3 sm:text-sm rounded-md bg-[#F5F5F5]"
                  placeholder="John Doe from Simple Duck"
                  required
                />
              </div>
            </div>

            <div className="w-10/12 mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                E-mail
              </label>
              <div className="mt-3 relative rounded-md">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full px-4 py-3 sm:text-sm rounded-md bg-[#F5F5F5]"
                  placeholder="john@simpleduckstudios.com"
                  required
                />
              </div>
            </div>

            <div className="w-10/12 mt-6">
              <label
                htmlFor="project"
                className="block text-sm font-bold text-gray-700"
              >
                I’m interested in
              </label>
              <div className="mt-3 relative rounded-md">
                <select
                  id="project"
                  name="project"
                  className="block w-full px-4 py-3 sm:text-sm rounded-md bg-[#F5F5F5]"
                  required
                >
                  <option value="" disabled selected>
                    Choose your project type
                  </option>
                  <option value="web">Web Based</option>
                </select>
              </div>
            </div>

            <div className="w-10/12 mt-6">
              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="text-sm font-bold text-gray-700">
                  Project Budget
                </RadioGroup.Label>
                <div className="flex flex-col lg:flex-row gap-5 mt-3">
                  {plans.map((plan) => (
                    <RadioGroup.Option
                      key={plan}
                      value={plan}
                      className={({ active, checked }) =>
                        `${active ? '' : ''}
                  ${checked ? 'bg-secondary text-white' : 'bg-white'}
                    relative rounded-full px-5 py-2 flex focus:outline-none ring-2 ring-offset-2 ring-offset-black ring-white ring-opacity-60`
                      }
                    >
                      {({ checked }) => (
                        <>
                          <div
                            className={` whitespace-nowrap ${
                              checked ? 'text-white' : 'text-black'
                            }`}
                          >
                            {plan}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              <input type="hidden" name="budget" value={selected} />
            </div>

            <div className="w-10/12 mt-6">
              <label
                htmlFor="description"
                className="block text-sm font-bold text-gray-700"
              >
                Project Description
              </label>
              <div className="mt-3 relative rounded-md">
                <textarea
                  name="description"
                  id="description"
                  className="block w-full px-4 py-3 sm:text-sm rounded-md bg-[#F5F5F5]"
                  placeholder="We need help to...."
                />
              </div>
            </div>

            <div className="flex mt-10">
              <button
                type="submit"
                className="text-lg bg-primary px-6 py-4 rounded-full flex items-center gap-2 font-bold"
              >
                <IoPaperPlaneOutline size={24} />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
