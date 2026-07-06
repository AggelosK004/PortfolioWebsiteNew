import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { useForm, ValidationError } from '@formspree/react';

export const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm('xeebdjgk');

  return (
    <section id="contact" className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] py-20 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          {/* LEFT COLUMN */}
          <div>
            <FadeIn delay={0.1} y={40}>
              <h2 className="hero-heading font-black uppercase tracking-tight leading-none text-[12vw] sm:text-[8vw] lg:text-[5vw] mb-6 sm:mb-10">
                LET'S WORK TOGETHER
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} y={30}>
              <p className="text-[#D7E2EA] opacity-80 font-light leading-relaxed max-w-md">
                Have a project in mind or just want to say hi? Fill out the form and I'll get back to you as soon as possible.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} y={20}>
              <a href="mailto:aggelosk2004@gmail.com" className="font-medium text-lg sm:text-xl uppercase tracking-wider hover:opacity-70 transition-opacity mt-8 block">
                aggelosk2004@gmail.com
              </a>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN */}
          <FadeIn delay={0.4} y={40}>
            {state.succeeded ? (
              <div className="flex flex-col items-start justify-center h-full py-10">
                <h3 className="hero-heading font-black uppercase tracking-tight text-3xl sm:text-4xl mb-4">
                  MESSAGE SENT!
                </h3>
                <p className="text-[#D7E2EA]/80 font-light text-lg">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 sm:gap-10">
                <div className="relative flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/70">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b-2 border-[#D7E2EA]/20 rounded-none px-0 py-3 text-base sm:text-lg text-[#D7E2EA] placeholder-transparent focus:outline-none focus:border-[#D7E2EA] transition-colors duration-300 peer"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs uppercase tracking-widest mt-1" />
                </div>

                <div className="relative flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/70">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b-2 border-[#D7E2EA]/20 rounded-none px-0 py-3 text-base sm:text-lg text-[#D7E2EA] placeholder-transparent focus:outline-none focus:border-[#D7E2EA] transition-colors duration-300 peer"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs uppercase tracking-widest mt-1" />
                </div>

                <div className="relative flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/70">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    placeholder="Subject"
                    className="w-full bg-transparent border-b-2 border-[#D7E2EA]/20 rounded-none px-0 py-3 text-base sm:text-lg text-[#D7E2EA] placeholder-transparent focus:outline-none focus:border-[#D7E2EA] transition-colors duration-300 peer"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs uppercase tracking-widest mt-1" />
                </div>

                <div className="relative flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/70">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    placeholder="Your Message"
                    className="w-full min-h-[120px] resize-y bg-transparent border-b-2 border-[#D7E2EA]/20 rounded-none px-0 py-3 text-base sm:text-lg text-[#D7E2EA] placeholder-transparent focus:outline-none focus:border-[#D7E2EA] transition-colors duration-300 peer"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs uppercase tracking-widest mt-1" />
                </div>

                <div className="mt-4 self-start">
                  <Magnet>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="rounded-full uppercase tracking-widest text-white font-medium px-10 py-4 text-sm sm:text-base hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:hover:scale-100"
                      style={{
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                        outline: '2px solid white',
                        outlineOffset: '-3px'
                      }}
                    >
                      {state.submitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                  </Magnet>
                </div>
              </form>
            )}
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
};
