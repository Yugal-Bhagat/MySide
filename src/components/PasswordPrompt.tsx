// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface PasswordPromptProps {
//   onSuccess: () => void;
//   onClose: () => void;
// }

// const overlayVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
//   exit: { opacity: 0 }
// };

// const modalVariants = {
//   hidden: { 
//     scale: 0.8,
//     opacity: 0,
//     y: 20
//   },
//   visible: { 
//     scale: 1,
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 25
//     }
//   },
//   exit: { 
//     scale: 0.8,
//     opacity: 0,
//     y: -20,
//     transition: {
//       duration: 0.2
//     }
//   }
// };

// const PasswordPrompt: React.FC<PasswordPromptProps> = ({ onSuccess, onClose }) => {
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password === '2505') {
//       onSuccess();
//     } else {
//       setError(true);
//       motion.animate("input", { x: [-10, 10, -10, 10, 0] }, { type: "spring", duration: 0.4 });
//       setTimeout(() => setError(false), 2000);
//     }
//   };

//   return (
//     <motion.div
//       variants={overlayVariants}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
//     >
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative"
//       >
//         <motion.h3
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="text-2xl font-bold mb-4 text-center"
//         >
//           Enter Password
//         </motion.h3>
//         <form onSubmit={handleSubmit}>
//           <motion.input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={`w-full px-4 py-2 border rounded-lg mb-4 ${
//               error ? 'border-red-500' : 'border-gray-300'
//             }`}
//             placeholder="Enter password..."
//             autoFocus
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           />
//           <AnimatePresence>
//             {error && (
//               <motion.p
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="text-red-500 text-sm mb-4"
//               >
//                 Incorrect password. Please try again.
//               </motion.p>
//             )}
//           </AnimatePresence>
//           <div className="flex justify-end gap-4">
//             <motion.button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 text-gray-600 hover:text-gray-800"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Cancel
//             </motion.button>
//             <motion.button
//               type="submit"
//               className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Submit
//             </motion.button>
//           </div>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default PasswordPrompt;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PasswordPromptProps {
  onSuccess: () => void;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
    y: 20
  },
  visible: { 
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  exit: { 
    scale: 0.8,
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

const PasswordPrompt: React.FC<PasswordPromptProps> = ({ onSuccess, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '2580') {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative"
      >
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl font-bold mb-4 text-center"
        >
          Enter Password
        </motion.h3>
        <form onSubmit={handleSubmit}>
          <motion.input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg mb-4 ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter password..."
            autoFocus
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          />
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-sm mb-4"
              >
                Incorrect password. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
          <div className="flex justify-end gap-4">
            <motion.button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PasswordPrompt;