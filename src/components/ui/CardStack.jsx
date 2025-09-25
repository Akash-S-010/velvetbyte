import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CardStack = ({ items, offset = 12, scaleFactor = 0.08 }) => {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    let interval;
    const startFlipping = () => {
      interval = setInterval(() => {
        setCards((prevCards) => {
          const newArray = [...prevCards]; // Create a copy of the array
          newArray.unshift(newArray.pop()); // Move the last element to the front
          return newArray;
        });
      }, 2000);
    };

    startFlipping();

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [items]);

  return (
    <div className="relative h-72 w-72 md:h-72 md:w-108">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute h-72 w-72 md:h-72 md:w-108 rounded-3xl shadow-xl shadow-black/10 dark:shadow-white/5 flex flex-col justify-end"
          style={{
            transformOrigin: "top center",
            backgroundImage: card.image ? `url(${card.image})` : "none", // Use image if available
            backgroundColor: card.image ? "transparent" : "black", // Fallback to black background
            backgroundSize: "cover", // Ensure image covers the card
            backgroundPosition: "center", // Center the image
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor, // Decrease scale for cards behind
            zIndex: cards.length - index, // Decrease z-index for cards behind
          }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 rounded-b-3xl"
            style={{
              background: "linear-gradient(to top, black, black)",
            }}
          ></div>

          {/* Text Content */}
          <div className="relative p-4 text-white font-normal">
            <h3 className="text-lg">{card.title}</h3>
            <p className="text-sm text-muted">{card.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardStack;