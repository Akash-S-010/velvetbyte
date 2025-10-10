import React from "react";
import Button from "../components/ui/Button";
import FloatingInput from "../components/ui/FloatingInput";
import videoBg from "../assets/contactVideoBg.png";
import contactBg from "../assets/contactBg.mp4";
import { Mail, MapPin, Phone } from "lucide-react";
import ClientsSection from "../components/ui/ClientSection";
import WhatsappBtn from "../components/ui/WhatsappBtn";

const ContactUs = () => {
  return (
    <>
      <div className="relative w-full h-[50vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={videoBg}
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill"
        >
          <source src={contactBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 opacity-20 bg-black z-2"></div>
        <div className="relative z-10 flex items-center h-full text-white text-start px-5 md:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold md:leading-18">
            Ready to Start
            <br />
            your Next
            <span className="text-primary"> Project ?</span>
          </h2>
        </div>
      </div>
      {/* Contact Form */}
      <div className="bg-white text-black flex flex-col items-center justify-center space-y-8 sm:space-y-14 px-8 py-18">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
            Let's Talk
          </h1>
        </div>
        <form className="w-full max-w-4xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FloatingInput label="Name" type="text" />
            <FloatingInput label="Email" type="email" />
            <FloatingInput label="Phone Number" type="tel" />
            <FloatingInput label="Required Service" type="text" />
          </div>
          <FloatingInput label="Message" type="text" />
          <div className="sm:pt-8 flex-col md:flex-row flex justify-between items-center">
            <p className="text-sm text-muted">
              <span className="text-primary">*</span> We promise not to disclose
              your personal information to third parties.
            </p>
            <Button
              text="Send Message"
              theme="white"
              type={"submit"}
              className={"mt-5"}
            />
          </div>
        </form>
      </div>

      {/* trusted companies */}
      <div className="my-30">
        <ClientsSection />
      </div>

      {/* Contact Info */}
      <section className="w-full">
        <div className="max-w-5xl w-full mx-auto p-10 text-gray-800 my-10">
          <span className="px-3 py-1 text-xs border border-gray-300 rounded-full">
            Reach Out To Us
          </span>

          <h2 className="text-4xl font-bold text-left mt-4">
            We'd Love to Hear From You.
          </h2>

          <p className="text-left mt-4 text-gray-600">
            Or just reach out manually
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 mt-16">
            {/* Email */}
            <div className="bg-gray-100/70 hover:shadow-md transition p-4 rounded-md">
              <div className="text-primary bg-primary/10 p-2.5 rounded-full w-fit">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-lg font-bold mt-3">Email Support</p>
              <p className="text-gray-500 mt-1 mb-3">
                Our team responds in real time.
              </p>
              <a
                href="mailto:velevtbyte@gmail.com"
                className="text-primary font-semibold"
              >
                velevtbyte@gmail.com
              </a>
            </div>

            {/* Office */}
            <div className="bg-gray-100/70 hover:shadow-md transition p-4 rounded-md">
              <div className="text-primary bg-primary/10 p-2.5 rounded-full w-fit">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-lg font-bold mt-3">Visit Our Office</p>
              <p className="text-gray-500 mt-1 mb-3">Come meet us in person.</p>
              <span className="text-primary font-semibold">Kochi, Kerala</span>
            </div>

            {/* Phone */}
            <div className="bg-gray-100/70 hover:shadow-md transition p-4 rounded-md">
              <div className="text-primary bg-primary/10 p-2.5 rounded-full w-fit">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-lg font-bold mt-3">Call Us Directly</p>
              <p className="text-gray-500 mt-1 mb-3">
                Available during working hours.
              </p>
              <span className="text-primary font-semibold">+91 9876543210</span>
            </div>
          </div>
        </div>
      </section>
      <WhatsappBtn />
    </>
  );
};

export default ContactUs;
