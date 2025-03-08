

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { Heart } from 'lucide-react';
import Candles from './components/Candles';
import PasswordPrompt from './components/PasswordPrompt';
import { X } from 'lucide-react';
// const MotionVideo = motion('video'); // Create a motion component for <video>

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function App() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { width, height } = useWindowSize();

  const [playBirthdaySong] = useSound(
    './image/Akanksha.mp3', // Replace with your birthday song
    { volume: 0.3 }
  );

  const [playAudioMessage] = useSound(
    '/audio-message.mp3', // Replace with your audio message
    { volume: 1 }
  );

  const message = "Happy Birthday Akanksha!\n🌹 तेरी हँसी मेरी जान है,\n🌙 तेरे बिना ये दिल वीरान है।\n🎂 हर जन्म तेरा साथ चाहूँ,\n💖 तू ही मेरी पहली और आख़िरी पहचान है।";
  const messageLines = message.split('\n');

  useEffect(() => {
    if (candlesBlown) {
      playBirthdaySong();
      playAudioMessage();
      setTimeout(() => setShowMessage(true), 1000);
    }
  }, [candlesBlown, playBirthdaySong, playAudioMessage]);

  const handlePasswordSuccess = () => {
    setShowPassword(false);
    setShowGallery(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center p-4"
    >
      <AnimatePresence>
        {!candlesBlown && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="text-4xl md:text-6xl font-bold text-pink-500 mb-8 text-center"
          >
            Happy Birthday Akanksha! 🎉
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 mb-8"
      >


<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <video
    src="./image/Akanksha10.jpg.mp4" // Replace with your video path
    style={{ width: '100%', height: '40vh' }} // Responsive width and height
    autoPlay // Autoplay the video
    loop // Loop the video
    muted // Mute the video (required for autoplay in most browsers)
    controls // Show video controls
  >
    Your browser does not support the video tag.
  </video>
</motion.div>

        <Candles onBlowOut={() => setCandlesBlown(true)} />

        <AnimatePresence>
          {showMessage && (
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="mt-8 text-center"
            >
              {messageLines.map((line, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="text-2xl font-hindi leading-relaxed text-gray-800"
                >
                  {line}
                </motion.div>
              ))}
              <motion.div
                variants={item}
                className="mt-4 text-lg text-pink-500"
              >
                - Yugal ❤️
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {candlesBlown && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-600 transition-colors flex items-center gap-2"
            onClick={() => setShowPassword(true)}
          >
            View Gallery <Heart size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPassword && (
          <PasswordPrompt
            onSuccess={handlePasswordSuccess}
            onClose={() => setShowPassword(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          >
            {/* Embed the HTML file as an iframe */}
            <iframe src="/MySide/gallery.html" className="w-full h-full" title="3D Gallery" />

            <motion.button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {candlesBlown && <Confetti width={width} height={height} recycle={false} />}
    </motion.div>
  );
}

export default App;