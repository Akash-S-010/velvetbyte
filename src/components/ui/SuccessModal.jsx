import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const SuccessModal = ({ isOpen, onClose }) => {
  // Auto-close after 5 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Success Icon with Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="flex justify-center mb-6"
            >
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Message Sent Successfully!
              </h2>
              <p className="text-gray-600 mb-2">
                Thank you for reaching out to us.
              </p>
              <p className="text-gray-600 font-medium">
                Our team will connect you soon! 
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 6, ease: "linear" }}
              className="mt-6 h-1 bg-primary rounded-full origin-left"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
