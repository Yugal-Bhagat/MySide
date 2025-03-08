// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// interface CandlesProps {
//   onBlowOut: () => void;
// }

// const candleVariants = {
//   initial: { height: 80, opacity: 0 },
//   animate: { 
//     height: 80, 
//     opacity: 1,
//     transition: { duration: 0.5 }
//   },
//   blown: { 
//     height: 60,
//     transition: { duration: 0.3, ease: "easeOut" }
//   }
// };

// const flameVariants = {
//   initial: { scale: 0 },
//   animate: {
//     scale: [1, 1.2, 1],
//     transition: {
//       repeat: Infinity,
//       duration: 0.8,
//       ease: "easeInOut"
//     }
//   },
//   blown: {
//     scale: 0,
//     opacity: 0,
//     transition: { duration: 0.2 }
//   }
// };

// const Candles: React.FC<CandlesProps> = ({ onBlowOut }) => {
//   const [blown, setBlown] = useState(false);

//   const handleClick = () => {
//     if (!blown) {
//       setBlown(true);
//       onBlowOut();
//     }
//   };

//   return (
//     <motion.div 
//       className="relative w-full h-48 flex items-end justify-center gap-4"
//       onClick={handleClick}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5, delay: 0.5 }}
//     >
//       {[1, 2, 3].map((i) => (
//         <motion.div
//           key={i}
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: i * 0.2 }}
//           className="relative"
//         >
//           <motion.div
//             className="w-4 h-20 bg-pink-200 rounded-lg"
//             variants={candleVariants}
//             initial="initial"
//             animate={blown ? "blown" : "animate"}
//             style={{
//               transformOrigin: "bottom"
//             }}
//           />
//           <motion.div
//             className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-8"
//             style={{
//               background: 'linear-gradient(to bottom, #FFD700, #FFA500)',
//               borderRadius: '50% 50% 0 0',
//               filter: 'blur(2px)',
//               transformOrigin: "center bottom"
//             }}
//             variants={flameVariants}
//             initial="initial"
//             animate={blown ? "blown" : "animate"}
//           />
//         </motion.div>
//       ))}
//       {!blown && (
//         <motion.div
//           className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5, duration: 0.5 }}
//         >
//           Click to blow out the candles! 🎂
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Candles;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CandlesProps {
  onBlowOut: () => void;
}

const candleVariants = {
  initial: { height: 80, opacity: 0 },
  animate: { 
    height: 80, 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  blown: { 
    height: 60,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const flameVariants = {
  initial: { scale: 0 },
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      repeat: Infinity,
      duration: 0.8,
      ease: "easeInOut"
    }
  },
  blown: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const Candles: React.FC<CandlesProps> = ({ onBlowOut }) => {
  const [blown, setBlown] = useState(false);

  const handleClick = () => {
    if (!blown) {
      setBlown(true);
      onBlowOut();
    }
  };

  return (
    <motion.div 
      className="relative w-full h-48 flex items-end justify-center gap-4"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="relative"
        >
          <motion.div
            className="w-4 h-20 bg-pink-200 rounded-lg"
            variants={candleVariants}
            initial="initial"
            animate={blown ? "blown" : "animate"}
            style={{
              transformOrigin: "bottom"
            }}
          />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-8"
            style={{
              background: 'linear-gradient(to bottom, #FFD700, #FFA500)',
              borderRadius: '50% 50% 0 0',
              filter: 'blur(2px)',
              transformOrigin: "center bottom"
            }}
            variants={flameVariants}
            initial="initial"
            animate={blown ? "blown" : "animate"}
          />
        </motion.div>
      ))}
      {!blown && (
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Click to blow out the candles! 🎂
        </motion.div>
      )}
    </motion.div>
  );
};

export default Candles;