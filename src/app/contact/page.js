'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-deep-navy mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            Ready to start your electro-mechanical project? Contact our expert team 
            for a free consultation and personalized quote.
          </p>
        </motion.div>
      </div>
    </div>
  );
}