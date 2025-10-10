import React from 'react';

const SpeakUsBtn = ({ children }) => (
  <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
    {children}
  </button>
);

export default SpeakUsBtn;