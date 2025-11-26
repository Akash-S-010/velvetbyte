import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import FloatingInput from "../components/ui/FloatingInput";
// import videoBg from "../assets/contactVideoBg.png";
// import contactBg from "../assets/contactBg.mp4";
import { Mail, MapPin, Phone } from "lucide-react";
import ClientsSection from "../components/ui/ClientSection";
import SuccessModal from "../components/ui/SuccessModal";

const ContactUs = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Service validation
    if (!formData.service.trim()) {
      newErrors.service = "Required service is required";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Using FormSubmit.co - a free form submission service
      const response = await fetch(
        "https://formsubmit.co/ajax/support@velvetbyte.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
            _subject: `New Contact Form Submission from ${formData.name}`,
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setShowModal(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setErrors({});
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative w-full h-[20vh] md:h-[60vh] overflow-hidden bg-black">
        {/* {!videoLoaded && (
          <div
            className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill bg-gray-300"
            style={{
              backgroundImage: `url(${videoBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={videoBg}
          preload="auto"
          onLoadedData={handleVideoLoad}
          className={`absolute top-0 left-0 w-full h-full object-cover sm:object-fill ${
            videoLoaded ? "" : "hidden"
          }`}
        >
          <source src={contactBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 opacity-20 bg-black z-2"></div>
        <div className="relative z-10 flex items-center h-full text-white text-start px-5 md:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold md:leading-18">
            Ready to Start
            <br />
            Your Next
            <span className="text-primary"> Project ?</span>
          </h2>
        </div> */}
        <div className="h-full flex items-end justify-center pb-4">
          <motion.h2
            className="text-xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-light md:leading-30"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="block">
              Ready to Start Your
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="block text-5xl  sm:text-[9vw] md:text-[12vw] font-bold"
            >
              Next
              <span className="text-primary"> Project ?</span>
            </motion.span>
          </motion.h2>
        </div>
      </div>
      {/* Contact Form */}
      <div className="bg-white text-black flex flex-col items-center justify-center space-y-8 sm:space-y-14 px-8 py-18">
        <div className=" mt-2 md:mt-10">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
            Let's Talk
          </h1>
        </div>
        <form className="w-full max-w-4xl space-y-12" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FloatingInput
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <FloatingInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FloatingInput
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
            <FloatingInput
              label="Required Service"
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              error={errors.service}
            />
          </div>
          <FloatingInput
            label="Message"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
          <div className="sm:pt-8 flex-col md:flex-row flex justify-between items-center">
            <p className="text-sm text-muted">
              <span className="text-primary">*</span> We promise not to disclose
              your personal information to third parties.
            </p>
            <Button
              text={isSubmitting ? "Sending..." : "Send Message"}
              theme="white"
              type={"submit"}
              className={"mt-5"}
              disabled={isSubmitting}
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
              <span className="text-primary font-semibold">+91 8304826261</span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default ContactUs;
