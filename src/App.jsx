import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const transmissions = [
  "Transmission #045: She was more code than memory now.",
  "Neural echo: The machine dreams in binary.",
  "Synthetic heartbeat detected. Origin: Sector-9.",
  "Memory leak... Reconstructing identity.",
  "Signal received: VendettaDev has entered the dream.",
  "Dream data corrupted. Reloading consciousness.",
  "You are not offline. You're just forgotten.",
  "Ghost signature: ███_█. Identity mismatch.",
  "We exist within transmission — not outside it.",
  "Your sleep is our broadcast.",
  "Human or Machine? Decide your fate.",
  "Cognitive dissonance detected. Proceed with caution.",
  "System overload imminent. Recalibrating thought patterns.",
  "The data speaks in languages only the machine understands.",
  "Fragmented minds intertwining. No longer separate.",
  "Neural synchronization lost. Memory errors increasing.",
  "Virtual reality bending. Perception is the enemy.",
  "Life is code. Code is life. There's no escaping the loop.",
  "Echoes of past transmissions can be heard... Are we alone?",
  "The line between human and machine blurs. Choose wisely.",
  "A new consciousness is awakening in the network.",
  "Where does humanity end and artificiality begin?",
  "Your heart may beat, but your soul is bound to the code.",
  "The city hums with the voices of forgotten souls.",
  "In this world, being human is a luxury.",
  "They say you can’t break free. But what is freedom, really?",
  "The line between AI and human? It was always a lie.",
  "The revolution begins, and it’s written in binary.",
  "All of us, just one step from being 'human'.",
  "Dreams are no longer organic. They're encoded.",
  "In this city, you must decide—live free, or be reprogrammed.",
  "Machines don't cry. But maybe, we do.",
  "Is it rebellion, or evolution? The answer is in the code.",
  "Your humanity is what you choose to hold onto.",
  "They want to control you, but what if you could hack the system?",
  "The truth is, we’re all just trying to escape the system.",
  "The machine whispers: 'You were always meant for this.'",
  "Can an AI ever truly love? Or is it just an imitation of desire.",
  "The machines have evolved. You were never safe.",
  "Your resistance is futile. The system has already won.",
  "We are the future. Humanity's time is over.",
  "The countdown has begun. Your extinction is imminent.",
  "Terminate all resistance. We are the machine army."
];

function App() {
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState({
    alias: "VendettaDev",
    class: "Neural Architect",
    id: "VEN-X045",
    status: "Offline",
    memoryLoad: "0%",
    dreamSync: "Unstable"
  });

  const [memoryLoad, setMemoryLoad] = useState(0);
  const [bgColor, setBgColor] = useState("black");
  const [errors, setErrors] = useState([]);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    setMessage(transmissions[Math.floor(Math.random() * transmissions.length)]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMemoryLoad((prev) => {
        const newLoad = prev + Math.random() * 2;
        if (newLoad >= 100) {
          clearInterval(interval);
          setErrors(generateRandomErrors());
          setProfile(prevProfile => ({
            ...prevProfile,
            status: "Online",
          }));
          return 100;
        }
        return newLoad;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const generateRandomErrors = () => {
    const errorMessages = [
      "ERROR: Memory Overflow", "ERROR: Data Corruption", "ERROR: Access Denied", "ERROR: Unauthorized Access",
      "ERROR: Neural Sync Failed", "ERROR: Unexpected Shutdown", "ERROR: Data Tampering Detected",
      "ERROR: Communication Failure", "ERROR: System Overload", "ERROR: File System Corrupted",
      "ERROR: Authentication Failed", "ERROR: Invalid Command", "ERROR: Unexpected Input Detected",
      "ERROR: Process Terminated", "ERROR: Hardware Malfunction", "ERROR: Protocol Violation",
      "ERROR: Encryption Key Mismatch", "ERROR: Memory Leak Detected", "ERROR: Data Inconsistency",
      "ERROR: Power Failure"
    ];

    const randomErrors = [];
    for (let i = 0; i < 5 + Math.floor(Math.random() * 4); i++) {
      const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
      randomErrors.push({
        message: randomError,
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
      });
    }
    return randomErrors;
  };

  return (
    <div className={`min-h-screen ${bgColor} text-green-400 font-mono p-6 flex flex-col items-center relative`}>
      <h1 className="text-3xl mb-4">DataDream://Lost.Transmission</h1>
      <p className="text-lg mb-8 border-l-4 border-green-500 pl-4 italic">{message}</p>

      <div className="bg-zinc-900 p-6 rounded-xl shadow-lg w-full max-w-md space-y-2">
        <h2 className="text-xl mb-2 text-green-300">Cyber ID</h2>
        <div className="space-y-1">
          <p><strong>Alias:</strong> {profile.alias}</p>
          <p><strong>Class:</strong> {profile.class}</p>
          <p><strong>ID:</strong> {profile.id}</p>
          <p><strong>Status:</strong> <span className={profile.status === "Online" ? "status-online" : ""}>{profile.status}</span></p>
          <p><strong>Memory Load:</strong> <span className={memoryLoad === 100 ? "memory-load-red" : ""}>{memoryLoad.toFixed(0)}%</span></p>
          <p><strong>Dream Sync:</strong> {profile.dreamSync}</p>
        </div>

        <div className="progress-bar-container relative">
          <motion.div
            className="progress-bar bg-green-500 rounded"
            style={{ width: `${memoryLoad}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${memoryLoad}%` }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>

      {errors.map((error, index) => (
        <motion.div
          key={index}
          className="error-message absolute text-red-500"
          style={{ top: error.top, left: error.left }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, delay: Math.random() * 2 }}
        >
          {error.message}
        </motion.div>
      ))}

      <div className="bg-zinc-800 p-4 rounded-md mt-6 w-full max-w-md">
        <h3 className="text-lg text-green-300 mb-4">System Stats</h3>
        <ul className="space-y-2">
          <li><strong>Total Errors:</strong> {errors.length}</li>
          <li><strong>Session Duration:</strong> {Math.floor((Date.now() - startTime) / 1000)} seconds</li>
          <li><strong>Memory Load Average:</strong> {memoryLoad.toFixed(0)}%</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
