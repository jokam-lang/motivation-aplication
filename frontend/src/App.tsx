import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700 text-center"
      >
        <h1 className="text-3xl font-extrabold text-indigo-400 mb-2">
          AI Smart Scheduler
        </h1>
        <p className="text-slate-400 mb-6">
          PWA & Motivation App Initialized successfully.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors cursor-pointer"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  )
}

export default App
