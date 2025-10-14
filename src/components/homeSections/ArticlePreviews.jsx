import { MoveRight } from 'lucide-react';
import React from 'react';

const ArticlePreviews = () => {
  const articlesData = [
    {
      title: 'Affordable website design that doesn’t look cheap',

      summary:
        "At Velvetbyte, we believe technology is more than just code — it’s a way to create meaningful impact",
      tags: ['Website Design'],
      imageUrl: 'https://i.postimg.cc/YC6FXW5f/igor-miske-JVSgc-V8-vb4-unsplash.jpg',
    },
    {
      title: 'Clean, custom websites that load fast and work everywhere',

      summary:
        'Our goal is simple yet powerful: to empower businesses with innovative digital solutions that deliver real results',
      tags: ['Website Design', 'Web Development'],
      imageUrl: 'https://i.postimg.cc/k5MyKs2w/solidpixels-TCBw4j-AIJDY-unsplash.jpg',
    },
    {
      title: 'Freelance flexibility, agency-quality results',
      summary:
         'We’re a web development company in Kerala that builds conversion-ready websites for businesses across industries',
      tags: ['Website Design'],
      imageUrl: 'https://i.postimg.cc/7Z93HzKJ/analysis-strategy-study-information-business-planning.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 mb-20 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
        {articlesData.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full cursor-pointer"
          >
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{article.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag, tagIndex) => (
                  <button
                    key={tagIndex}
                    className="px-2 py-1 text-xs text-gray-800 rounded-full border border-gray-400 flex items-center gap-2"
                  >
                    {tag}
                    <MoveRight size={12} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlePreviews;