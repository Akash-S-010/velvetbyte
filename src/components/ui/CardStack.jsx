import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CardStack = ({ items, offset = 10, scaleFactor = 0.06 }) => {
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
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-white dark:bg-black h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/10 shadow-black/10 dark:shadow-white/5 flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor, // Decrease scale for cards behind
            zIndex: cards.length - index, // Decrease z-index for cards behind
          }}
        >
          <div className="font-normal text-neutral-700 dark:text-neutral-200">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-500 font-medium dark:text-white">
              {card.name}
            </p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200">
              {card.designation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardStack;
