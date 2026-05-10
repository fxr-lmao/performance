import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  MemoryStick as Memory, 
  Gamepad2, 
  HardDrive, 
  Activity,
  Shield,
  Monitor,
  Calendar,
  Layers
} from 'lucide-react';
import { mockData, WinSATData } from './data';

const ScoreCard = ({ title, score, icon: Icon, detail, index }: { 
  title: string, 
  score: number, 
  icon: any, 
  detail: string,
  index: number 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="glass p-6 flex flex-col justify-between hover:bg-white/[0.05] transition-colors group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-accent-glow rounded-2xl text-accent">
        <Icon size={24} />
      </div>
      <div className="text-4xl font-bold gradient-text">{score.toFixed(1)}</div>
    </div>
    <div>
      <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-1">{title}</h3>
      <p className="text-white font-semibold text-lg">{detail}</p>
    </div>
  </motion.div>
);

const SystemInfo = ({ system }: { system: WinSATData['system'] }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="glass p-8 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  >
    <div className="flex items-center gap-4">
      <Monitor className="text-accent" size={20} />
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-widest">Model</div>
        <div className="text-sm font-semibold">{system.productName}</div>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <Shield className="text-accent" size={20} />
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-widest">OS</div>
        <div className="text-sm font-semibold">{system.osName}</div>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <Calendar className="text-accent" size={20} />
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-widest">Assessment Date</div>
        <div className="text-sm font-semibold">{system.assessmentDate}</div>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <Layers className="text-accent" size={20} />
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-widest">Base Score</div>
        <div className="text-2xl font-bold gradient-text">{system.productName ? mockData.scores.base : '0.0'}</div>
      </div>
    </div>
  </motion.div>
);

function App() {
  const { system, scores, details } = mockData;

  const scoreItems = [
    { title: "Processor", score: scores.cpu, icon: Cpu, detail: system.processor },
    { title: "Memory (RAM)", score: scores.memory, icon: Memory, detail: details.memoryThroughput },
    { title: "Graphics", score: scores.graphics, icon: Monitor, iconColor: "blue", detail: details.videoBandwidth },
    { title: "Gaming Graphics", score: scores.gaming, icon: Gamepad2, detail: "3D Business & Gaming Performance" },
    { title: "Primary Hard Disk", score: scores.disk, icon: HardDrive, detail: details.diskSequential },
  ];

  return (
    <div className="container min-h-screen">
      <header className="py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-2"
        >
          <Activity className="text-accent" size={32} />
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Performance Index</h2>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl font-black mb-4 gradient-text"
        >
          System Performance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl"
        >
          Detailed analysis of your hardware capabilities based on Windows System Assessment Tool (WinSAT) logs.
        </motion.p>
      </header>

      <SystemInfo system={system} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {scoreItems.map((item, i) => (
          <ScoreCard key={item.title} {...item} index={i} />
        ))}
      </div>

      <footer className="text-center py-12 border-t border-white/[0.05]">
        <p className="text-gray-600 text-sm italic">
          Data retrieved from: C:\Windows\Performance\WinSAT\DataStore
        </p>
      </footer>
    </div>
  );
}

export default App;
