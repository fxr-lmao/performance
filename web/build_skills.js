const fs = require('fs');

const categories = [
  {
    name: 'Aviation & Navigation',
    skills: ['VFR Dead Reckoning', 'IFR Approach Reading', 'Radio Brevity', 'Spin Recovery', 'Crosswind Landings', 'Drone FPV Piloting', 'Celestial Navigation', 'Topographic Map Reading', 'Compass Triangulation', 'Meteorology Basics', 'Glider Piloting', 'Paragliding', 'Skydiving (AFF)', 'Aircraft Preflight Inspection', 'Aerodynamics Principles', 'Emergency Auto-Rotation']
  },
  {
    name: 'Wilderness Survival',
    skills: ['Friction Fire (Bow Drill)', 'Flint & Steel Fire', 'Water Purification', 'Shelter Building (Debris)', 'Knot Tying (Bowline, Clove Hitch)', 'Animal Tracking', 'Foraging Edible Plants', 'Snare Trapping', 'Spear Fishing', 'Ice Rescue', 'Desert Water Sourcing', 'Snow Cave Construction', 'Survival Signaling', 'Canoeing/Kayaking', 'Rock Climbing (Top Rope)', 'Rappelling']
  },
  {
    name: 'Medical & Rescue',
    skills: ['CPR & AED', 'Tourniquet Application', 'Wound Packing', 'Splinting Fractures', 'Hypothermia Treatment', 'Heat Stroke Management', 'Suturing Basics', 'IV Insertion', 'Triage Assessment', 'Wilderness First Responder', 'Heimlich Maneuver', 'Water Rescue', 'Stretcher Carries', 'Burn Treatment', 'Snake Bite Protocol', 'Emergency Childbirth']
  },
  {
    name: 'Tactical & Security',
    skills: ['Lockpicking (Pin Tumbler)', 'Handcuff Escape', 'Rope Escapes', 'Close Quarters Combat', 'Pistol Marksmanship', 'Rifle Zeroing', 'Concealment & Camouflage', 'Evasive Driving', 'Surveillance Detection', 'Digital Privacy (OpSec)', 'Radio Encryption', 'Hand-to-Hand Combatives', 'Knife Defense', 'Breaching (Ram/Pry)', 'Crowd Navigation', 'Home Hardening']
  },
  {
    name: 'Engineering & Mechanics',
    skills: ['Engine Oil Change', 'Tire Changing & Patching', 'Brake Pad Replacement', 'Basic Soldering', 'Circuit Board Repair', 'Welding (MIG/TIG)', 'Woodworking Basics', 'Plumbing Leak Repair', 'Locksmithing', 'Radio Building (Ham)', '3D Modeling (CAD)', '3D Printing', 'Drone Assembly', 'Motorcycle Repair', 'Knotting & Splicing Rope', 'HVAC Basics']
  },
  {
    name: 'Digital & Cyber',
    skills: ['Python Scripting', 'Bash/Shell Navigation', 'Network Penetration Testing', 'Wi-Fi Password Cracking', 'SQL Injection Basics', 'Cryptography Basics', 'Web Scraping', 'Linux Server Admin', 'OSINT (Open Source Intel)', 'Reverse Engineering', 'Malware Analysis', 'App Development', 'Cloud Architecture', 'Video Editing', 'Data Analysis', 'Phishing Detection']
  },
  {
    name: 'Physical & Performance',
    skills: ['Breath Holding (3 min)', 'Juggling (3 objects)', 'Handstand', 'Muscle-Up', 'Backflip', 'Splits Flexibility', 'Parkour Vaults', 'Freediving', 'High-Altitude Acclimatization', 'Ruck Marching (50lbs)', 'Barefoot Running', 'Ice Bath Tolerance (10 min)', 'Fasting (72 hours)', 'Kettlebell Snatch', 'Olympic Weightlifting', 'Sprinting Mechanics', 'Gymnastics Rings', 'Powerlifting', 'Marathon Pacing', 'Ironman Prep', 'Bouldering']
  },
  {
    name: 'Language & Cognitive',
    skills: ['Speed Reading (500 wpm)', 'Memory Palace Technique', 'Mental Math (3-digit mult)', 'Morse Code', 'Sign Language (ASL)', 'Spanish (Conversational)', 'Russian (Cyrillic Alphabet)', 'French (Conversational)', 'Arabic (Script Reading)', 'Mandarin (Pinyin)', 'Negotiation Tactics', 'Lie Detection', 'Public Speaking', 'Chess (1200 ELO)', 'Poker Odds Calculation', 'Debate & Logic']
  },
  {
    name: 'Craft & Build',
    skills: ['Blacksmithing', 'Leatherworking', 'Sewing/Tailoring', 'Carpentry', 'Masonry', 'Ceramics', 'Bookbinding', 'Glassblowing', 'Lock Making', 'Gunsmithing', 'Knife Making', 'Resin Casting', '3D Printing Design', 'CNC Machining', 'Basket Weaving', 'Boat Building']
  },
  {
    name: 'Intelligence & Analysis',
    skills: ['Speed Reading', 'Body Language Reading', 'Micro-expression Analysis', 'Lie Detection', 'Cryptanalysis', 'Memory Palace', 'Facial Recognition', 'Acoustic Signature ID', 'Signal Interception', 'OSINT Research', 'Interrogation Tactics', 'Elicitation', 'Disguise Craft', 'Surveillance Evasion', 'Stenography', 'Data Mining']
  }
];

let allSkills = [];
let idCounter = 1;

categories.forEach(cat => {
  cat.skills.forEach(skill => {
    const tiers = [
      { prefix: 'Fundamentals of ', time: '5-10 hours', xp: 50 },
      { prefix: 'Advanced ', time: '20-40 hours', xp: 150 },
      { prefix: 'Mastery of ', time: '100+ hours', xp: 400 }
    ];
    
    tiers.forEach(t => {
      const isCostly = Math.random() > 0.65;
      allSkills.push({
        id: 's' + idCounter++,
        category: cat.name,
        title: t.prefix + skill,
        cost: isCostly,
        time: t.time,
        needs: isCostly ? 'Specialized gear, instructor fees, paid software, or materials.' : 'Free open-source resources, internet access, practice time.',
        desc: 'Learn and achieve ' + t.prefix.trim().toLowerCase() + ' proficiency in ' + skill.toLowerCase() + '. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.',
        xp: t.xp
      });
    });
  });
});

const template = fs.readFileSync('c:/Users/insecm/.gemini/antigravity/scratch/performance/web/skills_template.js', 'utf8');
const finalCode = template.replace('__DATA_HERE__', JSON.stringify(allSkills, null, 2));
fs.writeFileSync('c:/Users/insecm/.gemini/antigravity/scratch/performance/web/js/skills.js', finalCode);
console.log('Successfully generated ' + allSkills.length + ' skills with tree rendering.');
