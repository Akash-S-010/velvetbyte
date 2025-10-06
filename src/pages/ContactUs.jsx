import React from "react";
import Button from "../components/ui/Button";
import FloatingInput from "../components/ui/FloatingInput";

const ContactUs = () => {
  return (
    <>
      {/* Contact Form */}
      <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center space-y-8 sm:space-y-14 px-6 py-12">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
            Let's Talk
          </h1>
        </div>
        <form className="w-full max-w-4xl space-y-8 sm:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <FloatingInput label="Name" type="text" />
            <FloatingInput label="Email" type="email" />
            <FloatingInput label="Phone Number" type="tel" />
            <FloatingInput label="Required Service" type="text" />
          </div>
          <FloatingInput label="Message" type="text" />
          <div className="sm:pt-8 flex justify-between items-center">
            <p className="text-sm text-muted"><span className="text-primary">*</span> We promise not to disclose your personal information to third parties.</p>
            <Button
              text="Send Message"
              theme="white"
              type={"submit"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
