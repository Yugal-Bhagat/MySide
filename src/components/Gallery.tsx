// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { X } from 'lucide-react';

// // interface GalleryProps {
// //   onClose: () => void;
// // }

// // const Gallery: React.FC<GalleryProps> = ({ onClose }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const images = [
// //     "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
// //     "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80",
// //     "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?w=800&q=80",
// //   ];

// //   const nextImage = () => {
// //     setCurrentIndex((prev) => (prev + 1) % images.length);
// //   };

// //   const prevImage = () => {
// //     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
// //   };

// //   const slideVariants = {
// //     enter: (direction: number) => ({
// //       x: direction > 0 ? 1000 : -1000,
// //       opacity: 0
// //     }),
// //     center: {
// //       zIndex: 1,
// //       x: 0,
// //       opacity: 1
// //     },
// //     exit: (direction: number) => ({
// //       zIndex: 0,
// //       x: direction < 0 ? 1000 : -1000,
// //       opacity: 0
// //     })
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       exit={{ opacity: 0 }}
// //       transition={{ duration: 0.3 }}
// //       className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
// //     >
// //       <motion.button
// //         onClick={onClose}
// //         className="absolute top-4 right-4 text-white hover:text-gray-300"
// //         whileHover={{ scale: 1.1 }}
// //         whileTap={{ scale: 0.9 }}
// //       >
// //         <X size={24} />
// //       </motion.button>

// //       <div className="relative w-full max-w-4xl px-4">
// //         <AnimatePresence initial={false} custom={currentIndex}>
// //           <motion.img
// //             key={currentIndex}
// //             src={images[currentIndex]}
// //             alt={`Gallery image ${currentIndex + 1}`}
// //             className="w-full h-[70vh] object-cover rounded-lg"
// //             variants={slideVariants}
// //             initial="enter"
// //             animate="center"
// //             exit="exit"
// //             transition={{
// //               x: { type: "spring", stiffness: 300, damping: 30 },
// //               opacity: { duration: 0.2 }
// //             }}
// //           />
// //         </AnimatePresence>

// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="absolute inset-x-0 bottom-4 flex justify-center gap-2"
// //         >
// //           {images.map((_, index) => (
// //             <motion.button
// //               key={index}
// //               className={`w-2 h-2 rounded-full ${
// //                 index === currentIndex ? 'bg-white' : 'bg-gray-500'
// //               }`}
// //               onClick={() => setCurrentIndex(index)}
// //               whileHover={{ scale: 1.2 }}
// //               whileTap={{ scale: 0.8 }}
// //             />
// //           ))}
// //         </motion.div>

// //         <motion.button
// //           onClick={prevImage}
// //           className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-4xl"
// //           whileHover={{ scale: 1.1, x: -5 }}
// //           whileTap={{ scale: 0.9 }}
// //         >
// //           ❮
// //         </motion.button>
// //         <motion.button
// //           onClick={nextImage}
// //           className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-4xl"
// //           whileHover={{ scale: 1.1, x: 5 }}
// //           whileTap={{ scale: 0.9 }}
// //         >
// //           ❯
// //         </motion.button>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Gallery;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X } from 'lucide-react';

// interface GalleryProps {
//   onClose: () => void;
// }

// const Gallery: React.FC<GalleryProps> = ({ onClose }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     "/akanksha1.jpg", // Replace with Akanksha's images
//     "/akanksha2.jpg",
//     "/akanksha3.jpg",
//   ];

//   const nextImage = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1
//     },
//     exit: (direction: number) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//     })
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3 }}
//       className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
//     >
//       <motion.button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-white hover:text-gray-300"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <X size={24} />
//       </motion.button>

//       <div className="relative w-full max-w-4xl px-4">
//         <AnimatePresence initial={false} custom={currentIndex}>
//           <motion.img
//             key={currentIndex}
//             src={images[currentIndex]}
//             alt={`Gallery image ${currentIndex + 1}`}
//             className="w-full h-[70vh] object-cover rounded-lg"
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: { type: "spring", stiffness: 300, damping: 30 },
//               opacity: { duration: 0.2 }
//             }}
//           />
//         </AnimatePresence>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="absolute inset-x-0 bottom-4 flex justify-center gap-2"
//         >
//           {images.map((_, index) => (
//             <motion.button
//               key={index}
//               className={`w-2 h-2 rounded-full ${
//                 index === currentIndex ? 'bg-white' : 'bg-gray-500'
//               }`}
//               onClick={() => setCurrentIndex(index)}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.8 }}
//             />
//           ))}
//         </motion.div>

//         <motion.button
//           onClick={prevImage}
//           className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-4xl"
//           whileHover={{ scale: 1.1, x: -5 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           ❮
//         </motion.button>
//         <motion.button
//           onClick={nextImage}
//           className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-4xl"
//           whileHover={{ scale: 1.1, x: 5 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           ❯
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default Gallery;


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryProps {
  onClose: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ onClose }) => {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [radius, setRadius] = useState(window.innerWidth < 768 ? 300 : 500); // Responsive radius

  const totalCards = 10; // Number of images
  const imageUrls = [
   'https://images.unsplash.com/photo-1496275068113-fff8c90750d1?w=800&q=80',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    'https://images.unsplash.com/photo-1464863979621-258859e62245?w=800&q=80',
    'https://images.unsplash.com/photo-1464863979621-258859e62245?w=800&q=80',
    'https://images.unsplash.com/photo-1496275068113-fff8c90750d1?w=800&q=80',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
  ];

  // Create stars for the background
  useEffect(() => {
    const starsContainer = document.querySelector('.stars');
    if (starsContainer) {
      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
      }
    }
  }, []);

  // Update card positions based on the current angle
  const updateCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      const angle = (currentAngle + index * (360 / totalCards)) * (Math.PI / 180);
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      (card as HTMLElement).style.transform = `translate3d(${x}px, 0, ${z}px)`;

      // Determine which card is in front
      const normalizedAngle = ((currentAngle + index * (360 / totalCards)) % 360 + 360) % 360;
      if (normalizedAngle > 350 || normalizedAngle < 10) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }

      // Adjust opacity based on position
      const opacity = Math.max(0.2, 1 - Math.abs(normalizedAngle - 180) / 180);
      (card as HTMLElement).style.opacity = opacity.toString();
    });
  };

  // Handle mouse/touch events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(currentAngle);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const diff = (e.clientX - startX) * 0.5;
    setCurrentAngle(currentX + diff);
    updateCards();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(currentAngle);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const diff = (e.touches[0].clientX - startX) * 0.5;
    setCurrentAngle(currentX + diff);
    updateCards();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  // Update radius on window resize
  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 300 : 500);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial card update
  useEffect(() => {
    updateCards();
  }, [currentAngle, radius]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gradient-to-b from-[#0a0a2a] to-[#1a1a4a] flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Starry Background */}
      <div className="stars absolute inset-0 pointer-events-none"></div>

      {/* Navigation Buttons */}
      <button
        className="nav-button prev fixed top-1/2 left-8 transform -translate-y-1/2 w-12 h-12 bg-pink-200/20 border-2 border-pink-300/50 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-pink-300/40 hover:shadow-xl transition-all"
        onClick={() => setCurrentAngle((prev) => prev + 36)}
        aria-label="Previous"
      >
        &larr;
      </button>
      <button
        className="nav-button next fixed top-1/2 right-8 transform -translate-y-1/2 w-12 h-12 bg-pink-200/20 border-2 border-pink-300/50 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-pink-300/40 hover:shadow-xl transition-all"
        onClick={() => setCurrentAngle((prev) => prev - 36)}
        aria-label="Next"
      >
        &rarr;
      </button>

      {/* Gallery Container */}
      <div
        className="gallery-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center perspective-1000"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="gallery relative w-72 h-96 transform-style-preserve-3d transition-transform duration-500 ease-out">
          {imageUrls.map((url, index) => (
            <motion.div
              key={index}
              className="card absolute w-72 h-96 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-pink-300/30 cursor-pointer overflow-hidden transform-origin-center transition-all duration-500 ease-out"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={url} alt={`Akanksha ${index + 1}`} className="w-full h-full object-cover" />
              <div className="number absolute bottom-2 right-2 bg-pink-300/70 text-white px-3 py-1 rounded-full text-sm shadow-md">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Close Button */}
      <motion.button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X size={24} />
      </motion.button>
    </motion.div>
  );
};

export default Gallery;