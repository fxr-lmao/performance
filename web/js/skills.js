// skills.js — Skill Tree

const Skills = {
  SKILL_LIST: [
  {
    "id": "s1",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of VFR Dead Reckoning",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in vfr dead reckoning. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s2",
    "category": "Aviation & Navigation",
    "title": "Advanced VFR Dead Reckoning",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in vfr dead reckoning. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s3",
    "category": "Aviation & Navigation",
    "title": "Mastery of VFR Dead Reckoning",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in vfr dead reckoning. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s4",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of IFR Approach Reading",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in ifr approach reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s5",
    "category": "Aviation & Navigation",
    "title": "Advanced IFR Approach Reading",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in ifr approach reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s6",
    "category": "Aviation & Navigation",
    "title": "Mastery of IFR Approach Reading",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in ifr approach reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s7",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Radio Brevity",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in radio brevity. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s8",
    "category": "Aviation & Navigation",
    "title": "Advanced Radio Brevity",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in radio brevity. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s9",
    "category": "Aviation & Navigation",
    "title": "Mastery of Radio Brevity",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in radio brevity. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s10",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Spin Recovery",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in spin recovery. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s11",
    "category": "Aviation & Navigation",
    "title": "Advanced Spin Recovery",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in spin recovery. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s12",
    "category": "Aviation & Navigation",
    "title": "Mastery of Spin Recovery",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in spin recovery. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s13",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Crosswind Landings",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in crosswind landings. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s14",
    "category": "Aviation & Navigation",
    "title": "Advanced Crosswind Landings",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in crosswind landings. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s15",
    "category": "Aviation & Navigation",
    "title": "Mastery of Crosswind Landings",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in crosswind landings. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s16",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Drone FPV Piloting",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in drone fpv piloting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s17",
    "category": "Aviation & Navigation",
    "title": "Advanced Drone FPV Piloting",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in drone fpv piloting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s18",
    "category": "Aviation & Navigation",
    "title": "Mastery of Drone FPV Piloting",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in drone fpv piloting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s19",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Celestial Navigation",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in celestial navigation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s20",
    "category": "Aviation & Navigation",
    "title": "Advanced Celestial Navigation",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in celestial navigation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s21",
    "category": "Aviation & Navigation",
    "title": "Mastery of Celestial Navigation",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in celestial navigation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s22",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Topographic Map Reading",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in topographic map reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s23",
    "category": "Aviation & Navigation",
    "title": "Advanced Topographic Map Reading",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in topographic map reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s24",
    "category": "Aviation & Navigation",
    "title": "Mastery of Topographic Map Reading",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in topographic map reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s25",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Compass Triangulation",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in compass triangulation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s26",
    "category": "Aviation & Navigation",
    "title": "Advanced Compass Triangulation",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in compass triangulation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s27",
    "category": "Aviation & Navigation",
    "title": "Mastery of Compass Triangulation",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in compass triangulation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s28",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Meteorology Basics",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in meteorology basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s29",
    "category": "Aviation & Navigation",
    "title": "Advanced Meteorology Basics",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in meteorology basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s30",
    "category": "Aviation & Navigation",
    "title": "Mastery of Meteorology Basics",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in meteorology basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s31",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Glider Piloting",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in glider piloting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s32",
    "category": "Aviation & Navigation",
    "title": "Advanced Glider Piloting",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in glider piloting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s33",
    "category": "Aviation & Navigation",
    "title": "Mastery of Glider Piloting",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in glider piloting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s34",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Paragliding",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in paragliding. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s35",
    "category": "Aviation & Navigation",
    "title": "Advanced Paragliding",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in paragliding. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s36",
    "category": "Aviation & Navigation",
    "title": "Mastery of Paragliding",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in paragliding. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s37",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Skydiving (AFF)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in skydiving (aff). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s38",
    "category": "Aviation & Navigation",
    "title": "Advanced Skydiving (AFF)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in skydiving (aff). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s39",
    "category": "Aviation & Navigation",
    "title": "Mastery of Skydiving (AFF)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in skydiving (aff). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s40",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Aircraft Preflight Inspection",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in aircraft preflight inspection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s41",
    "category": "Aviation & Navigation",
    "title": "Advanced Aircraft Preflight Inspection",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in aircraft preflight inspection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s42",
    "category": "Aviation & Navigation",
    "title": "Mastery of Aircraft Preflight Inspection",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in aircraft preflight inspection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s43",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Aerodynamics Principles",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in aerodynamics principles. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s44",
    "category": "Aviation & Navigation",
    "title": "Advanced Aerodynamics Principles",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in aerodynamics principles. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s45",
    "category": "Aviation & Navigation",
    "title": "Mastery of Aerodynamics Principles",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in aerodynamics principles. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s46",
    "category": "Aviation & Navigation",
    "title": "Fundamentals of Emergency Auto-Rotation",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in emergency auto-rotation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s47",
    "category": "Aviation & Navigation",
    "title": "Advanced Emergency Auto-Rotation",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in emergency auto-rotation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s48",
    "category": "Aviation & Navigation",
    "title": "Mastery of Emergency Auto-Rotation",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in emergency auto-rotation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s49",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Friction Fire (Bow Drill)",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in friction fire (bow drill). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s50",
    "category": "Wilderness Survival",
    "title": "Advanced Friction Fire (Bow Drill)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in friction fire (bow drill). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s51",
    "category": "Wilderness Survival",
    "title": "Mastery of Friction Fire (Bow Drill)",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in friction fire (bow drill). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s52",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Flint & Steel Fire",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in flint & steel fire. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s53",
    "category": "Wilderness Survival",
    "title": "Advanced Flint & Steel Fire",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in flint & steel fire. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s54",
    "category": "Wilderness Survival",
    "title": "Mastery of Flint & Steel Fire",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in flint & steel fire. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s55",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Water Purification",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in water purification. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s56",
    "category": "Wilderness Survival",
    "title": "Advanced Water Purification",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in water purification. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s57",
    "category": "Wilderness Survival",
    "title": "Mastery of Water Purification",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in water purification. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s58",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Shelter Building (Debris)",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in shelter building (debris). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s59",
    "category": "Wilderness Survival",
    "title": "Advanced Shelter Building (Debris)",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in shelter building (debris). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s60",
    "category": "Wilderness Survival",
    "title": "Mastery of Shelter Building (Debris)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in shelter building (debris). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s61",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Knot Tying (Bowline, Clove Hitch)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in knot tying (bowline, clove hitch). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s62",
    "category": "Wilderness Survival",
    "title": "Advanced Knot Tying (Bowline, Clove Hitch)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in knot tying (bowline, clove hitch). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s63",
    "category": "Wilderness Survival",
    "title": "Mastery of Knot Tying (Bowline, Clove Hitch)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in knot tying (bowline, clove hitch). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s64",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Animal Tracking",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in animal tracking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s65",
    "category": "Wilderness Survival",
    "title": "Advanced Animal Tracking",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in animal tracking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s66",
    "category": "Wilderness Survival",
    "title": "Mastery of Animal Tracking",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in animal tracking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s67",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Foraging Edible Plants",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in foraging edible plants. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s68",
    "category": "Wilderness Survival",
    "title": "Advanced Foraging Edible Plants",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in foraging edible plants. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s69",
    "category": "Wilderness Survival",
    "title": "Mastery of Foraging Edible Plants",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in foraging edible plants. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s70",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Snare Trapping",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in snare trapping. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s71",
    "category": "Wilderness Survival",
    "title": "Advanced Snare Trapping",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in snare trapping. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s72",
    "category": "Wilderness Survival",
    "title": "Mastery of Snare Trapping",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in snare trapping. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s73",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Spear Fishing",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in spear fishing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s74",
    "category": "Wilderness Survival",
    "title": "Advanced Spear Fishing",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in spear fishing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s75",
    "category": "Wilderness Survival",
    "title": "Mastery of Spear Fishing",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in spear fishing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s76",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Ice Rescue",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in ice rescue. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s77",
    "category": "Wilderness Survival",
    "title": "Advanced Ice Rescue",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in ice rescue. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s78",
    "category": "Wilderness Survival",
    "title": "Mastery of Ice Rescue",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in ice rescue. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s79",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Desert Water Sourcing",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in desert water sourcing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s80",
    "category": "Wilderness Survival",
    "title": "Advanced Desert Water Sourcing",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in desert water sourcing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s81",
    "category": "Wilderness Survival",
    "title": "Mastery of Desert Water Sourcing",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in desert water sourcing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s82",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Snow Cave Construction",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in snow cave construction. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s83",
    "category": "Wilderness Survival",
    "title": "Advanced Snow Cave Construction",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in snow cave construction. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s84",
    "category": "Wilderness Survival",
    "title": "Mastery of Snow Cave Construction",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in snow cave construction. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s85",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Survival Signaling",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in survival signaling. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s86",
    "category": "Wilderness Survival",
    "title": "Advanced Survival Signaling",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in survival signaling. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s87",
    "category": "Wilderness Survival",
    "title": "Mastery of Survival Signaling",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in survival signaling. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s88",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Canoeing/Kayaking",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in canoeing/kayaking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s89",
    "category": "Wilderness Survival",
    "title": "Advanced Canoeing/Kayaking",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in canoeing/kayaking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s90",
    "category": "Wilderness Survival",
    "title": "Mastery of Canoeing/Kayaking",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in canoeing/kayaking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s91",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Rock Climbing (Top Rope)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in rock climbing (top rope). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s92",
    "category": "Wilderness Survival",
    "title": "Advanced Rock Climbing (Top Rope)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in rock climbing (top rope). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s93",
    "category": "Wilderness Survival",
    "title": "Mastery of Rock Climbing (Top Rope)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in rock climbing (top rope). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s94",
    "category": "Wilderness Survival",
    "title": "Fundamentals of Rappelling",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in rappelling. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s95",
    "category": "Wilderness Survival",
    "title": "Advanced Rappelling",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in rappelling. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s96",
    "category": "Wilderness Survival",
    "title": "Mastery of Rappelling",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in rappelling. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s97",
    "category": "Medical & Rescue",
    "title": "Fundamentals of CPR & AED",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in cpr & aed. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s98",
    "category": "Medical & Rescue",
    "title": "Advanced CPR & AED",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in cpr & aed. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s99",
    "category": "Medical & Rescue",
    "title": "Mastery of CPR & AED",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in cpr & aed. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s100",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Tourniquet Application",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in tourniquet application. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s101",
    "category": "Medical & Rescue",
    "title": "Advanced Tourniquet Application",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in tourniquet application. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s102",
    "category": "Medical & Rescue",
    "title": "Mastery of Tourniquet Application",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in tourniquet application. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s103",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Wound Packing",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in wound packing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s104",
    "category": "Medical & Rescue",
    "title": "Advanced Wound Packing",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in wound packing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s105",
    "category": "Medical & Rescue",
    "title": "Mastery of Wound Packing",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in wound packing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s106",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Splinting Fractures",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in splinting fractures. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s107",
    "category": "Medical & Rescue",
    "title": "Advanced Splinting Fractures",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in splinting fractures. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s108",
    "category": "Medical & Rescue",
    "title": "Mastery of Splinting Fractures",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in splinting fractures. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s109",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Hypothermia Treatment",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in hypothermia treatment. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s110",
    "category": "Medical & Rescue",
    "title": "Advanced Hypothermia Treatment",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in hypothermia treatment. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s111",
    "category": "Medical & Rescue",
    "title": "Mastery of Hypothermia Treatment",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in hypothermia treatment. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s112",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Heat Stroke Management",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in heat stroke management. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s113",
    "category": "Medical & Rescue",
    "title": "Advanced Heat Stroke Management",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in heat stroke management. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s114",
    "category": "Medical & Rescue",
    "title": "Mastery of Heat Stroke Management",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in heat stroke management. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s115",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Suturing Basics",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in suturing basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s116",
    "category": "Medical & Rescue",
    "title": "Advanced Suturing Basics",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in suturing basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s117",
    "category": "Medical & Rescue",
    "title": "Mastery of Suturing Basics",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in suturing basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s118",
    "category": "Medical & Rescue",
    "title": "Fundamentals of IV Insertion",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in iv insertion. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s119",
    "category": "Medical & Rescue",
    "title": "Advanced IV Insertion",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in iv insertion. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s120",
    "category": "Medical & Rescue",
    "title": "Mastery of IV Insertion",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in iv insertion. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s121",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Triage Assessment",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in triage assessment. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s122",
    "category": "Medical & Rescue",
    "title": "Advanced Triage Assessment",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in triage assessment. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s123",
    "category": "Medical & Rescue",
    "title": "Mastery of Triage Assessment",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in triage assessment. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s124",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Wilderness First Responder",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in wilderness first responder. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s125",
    "category": "Medical & Rescue",
    "title": "Advanced Wilderness First Responder",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in wilderness first responder. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s126",
    "category": "Medical & Rescue",
    "title": "Mastery of Wilderness First Responder",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in wilderness first responder. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s127",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Heimlich Maneuver",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in heimlich maneuver. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s128",
    "category": "Medical & Rescue",
    "title": "Advanced Heimlich Maneuver",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in heimlich maneuver. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s129",
    "category": "Medical & Rescue",
    "title": "Mastery of Heimlich Maneuver",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in heimlich maneuver. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s130",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Water Rescue",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in water rescue. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s131",
    "category": "Medical & Rescue",
    "title": "Advanced Water Rescue",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in water rescue. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s132",
    "category": "Medical & Rescue",
    "title": "Mastery of Water Rescue",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in water rescue. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s133",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Stretcher Carries",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in stretcher carries. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s134",
    "category": "Medical & Rescue",
    "title": "Advanced Stretcher Carries",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in stretcher carries. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s135",
    "category": "Medical & Rescue",
    "title": "Mastery of Stretcher Carries",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in stretcher carries. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s136",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Burn Treatment",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in burn treatment. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s137",
    "category": "Medical & Rescue",
    "title": "Advanced Burn Treatment",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in burn treatment. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s138",
    "category": "Medical & Rescue",
    "title": "Mastery of Burn Treatment",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in burn treatment. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s139",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Snake Bite Protocol",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in snake bite protocol. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s140",
    "category": "Medical & Rescue",
    "title": "Advanced Snake Bite Protocol",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in snake bite protocol. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s141",
    "category": "Medical & Rescue",
    "title": "Mastery of Snake Bite Protocol",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in snake bite protocol. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s142",
    "category": "Medical & Rescue",
    "title": "Fundamentals of Emergency Childbirth",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in emergency childbirth. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s143",
    "category": "Medical & Rescue",
    "title": "Advanced Emergency Childbirth",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in emergency childbirth. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s144",
    "category": "Medical & Rescue",
    "title": "Mastery of Emergency Childbirth",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in emergency childbirth. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s145",
    "category": "Tactical & Security",
    "title": "Fundamentals of Lockpicking (Pin Tumbler)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in lockpicking (pin tumbler). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s146",
    "category": "Tactical & Security",
    "title": "Advanced Lockpicking (Pin Tumbler)",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in lockpicking (pin tumbler). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s147",
    "category": "Tactical & Security",
    "title": "Mastery of Lockpicking (Pin Tumbler)",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in lockpicking (pin tumbler). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s148",
    "category": "Tactical & Security",
    "title": "Fundamentals of Handcuff Escape",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in handcuff escape. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s149",
    "category": "Tactical & Security",
    "title": "Advanced Handcuff Escape",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in handcuff escape. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s150",
    "category": "Tactical & Security",
    "title": "Mastery of Handcuff Escape",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in handcuff escape. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s151",
    "category": "Tactical & Security",
    "title": "Fundamentals of Rope Escapes",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in rope escapes. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s152",
    "category": "Tactical & Security",
    "title": "Advanced Rope Escapes",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in rope escapes. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s153",
    "category": "Tactical & Security",
    "title": "Mastery of Rope Escapes",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in rope escapes. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s154",
    "category": "Tactical & Security",
    "title": "Fundamentals of Close Quarters Combat",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in close quarters combat. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s155",
    "category": "Tactical & Security",
    "title": "Advanced Close Quarters Combat",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in close quarters combat. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s156",
    "category": "Tactical & Security",
    "title": "Mastery of Close Quarters Combat",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in close quarters combat. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s157",
    "category": "Tactical & Security",
    "title": "Fundamentals of Pistol Marksmanship",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in pistol marksmanship. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s158",
    "category": "Tactical & Security",
    "title": "Advanced Pistol Marksmanship",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in pistol marksmanship. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s159",
    "category": "Tactical & Security",
    "title": "Mastery of Pistol Marksmanship",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in pistol marksmanship. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s160",
    "category": "Tactical & Security",
    "title": "Fundamentals of Rifle Zeroing",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in rifle zeroing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s161",
    "category": "Tactical & Security",
    "title": "Advanced Rifle Zeroing",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in rifle zeroing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s162",
    "category": "Tactical & Security",
    "title": "Mastery of Rifle Zeroing",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in rifle zeroing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s163",
    "category": "Tactical & Security",
    "title": "Fundamentals of Concealment & Camouflage",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in concealment & camouflage. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s164",
    "category": "Tactical & Security",
    "title": "Advanced Concealment & Camouflage",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in concealment & camouflage. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s165",
    "category": "Tactical & Security",
    "title": "Mastery of Concealment & Camouflage",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in concealment & camouflage. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s166",
    "category": "Tactical & Security",
    "title": "Fundamentals of Evasive Driving",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in evasive driving. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s167",
    "category": "Tactical & Security",
    "title": "Advanced Evasive Driving",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in evasive driving. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s168",
    "category": "Tactical & Security",
    "title": "Mastery of Evasive Driving",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in evasive driving. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s169",
    "category": "Tactical & Security",
    "title": "Fundamentals of Surveillance Detection",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in surveillance detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s170",
    "category": "Tactical & Security",
    "title": "Advanced Surveillance Detection",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in surveillance detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s171",
    "category": "Tactical & Security",
    "title": "Mastery of Surveillance Detection",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in surveillance detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s172",
    "category": "Tactical & Security",
    "title": "Fundamentals of Digital Privacy (OpSec)",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in digital privacy (opsec). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s173",
    "category": "Tactical & Security",
    "title": "Advanced Digital Privacy (OpSec)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in digital privacy (opsec). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s174",
    "category": "Tactical & Security",
    "title": "Mastery of Digital Privacy (OpSec)",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in digital privacy (opsec). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s175",
    "category": "Tactical & Security",
    "title": "Fundamentals of Radio Encryption",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in radio encryption. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s176",
    "category": "Tactical & Security",
    "title": "Advanced Radio Encryption",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in radio encryption. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s177",
    "category": "Tactical & Security",
    "title": "Mastery of Radio Encryption",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in radio encryption. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s178",
    "category": "Tactical & Security",
    "title": "Fundamentals of Hand-to-Hand Combatives",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in hand-to-hand combatives. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s179",
    "category": "Tactical & Security",
    "title": "Advanced Hand-to-Hand Combatives",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in hand-to-hand combatives. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s180",
    "category": "Tactical & Security",
    "title": "Mastery of Hand-to-Hand Combatives",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in hand-to-hand combatives. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s181",
    "category": "Tactical & Security",
    "title": "Fundamentals of Knife Defense",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in knife defense. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s182",
    "category": "Tactical & Security",
    "title": "Advanced Knife Defense",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in knife defense. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s183",
    "category": "Tactical & Security",
    "title": "Mastery of Knife Defense",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in knife defense. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s184",
    "category": "Tactical & Security",
    "title": "Fundamentals of Breaching (Ram/Pry)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in breaching (ram/pry). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s185",
    "category": "Tactical & Security",
    "title": "Advanced Breaching (Ram/Pry)",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in breaching (ram/pry). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s186",
    "category": "Tactical & Security",
    "title": "Mastery of Breaching (Ram/Pry)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in breaching (ram/pry). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s187",
    "category": "Tactical & Security",
    "title": "Fundamentals of Crowd Navigation",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in crowd navigation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s188",
    "category": "Tactical & Security",
    "title": "Advanced Crowd Navigation",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in crowd navigation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s189",
    "category": "Tactical & Security",
    "title": "Mastery of Crowd Navigation",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in crowd navigation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s190",
    "category": "Tactical & Security",
    "title": "Fundamentals of Home Hardening",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in home hardening. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s191",
    "category": "Tactical & Security",
    "title": "Advanced Home Hardening",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in home hardening. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s192",
    "category": "Tactical & Security",
    "title": "Mastery of Home Hardening",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in home hardening. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s193",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Engine Oil Change",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in engine oil change. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s194",
    "category": "Engineering & Mechanics",
    "title": "Advanced Engine Oil Change",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in engine oil change. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s195",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Engine Oil Change",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in engine oil change. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s196",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Tire Changing & Patching",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in tire changing & patching. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s197",
    "category": "Engineering & Mechanics",
    "title": "Advanced Tire Changing & Patching",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in tire changing & patching. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s198",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Tire Changing & Patching",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in tire changing & patching. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s199",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Brake Pad Replacement",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in brake pad replacement. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s200",
    "category": "Engineering & Mechanics",
    "title": "Advanced Brake Pad Replacement",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in brake pad replacement. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s201",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Brake Pad Replacement",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in brake pad replacement. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s202",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Basic Soldering",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in basic soldering. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s203",
    "category": "Engineering & Mechanics",
    "title": "Advanced Basic Soldering",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in basic soldering. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s204",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Basic Soldering",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in basic soldering. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s205",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Circuit Board Repair",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in circuit board repair. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s206",
    "category": "Engineering & Mechanics",
    "title": "Advanced Circuit Board Repair",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in circuit board repair. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s207",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Circuit Board Repair",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in circuit board repair. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s208",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Welding (MIG/TIG)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in welding (mig/tig). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s209",
    "category": "Engineering & Mechanics",
    "title": "Advanced Welding (MIG/TIG)",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in welding (mig/tig). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s210",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Welding (MIG/TIG)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in welding (mig/tig). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s211",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Woodworking Basics",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in woodworking basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s212",
    "category": "Engineering & Mechanics",
    "title": "Advanced Woodworking Basics",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in woodworking basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s213",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Woodworking Basics",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in woodworking basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s214",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Plumbing Leak Repair",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in plumbing leak repair. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s215",
    "category": "Engineering & Mechanics",
    "title": "Advanced Plumbing Leak Repair",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in plumbing leak repair. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s216",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Plumbing Leak Repair",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in plumbing leak repair. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s217",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Locksmithing",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in locksmithing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s218",
    "category": "Engineering & Mechanics",
    "title": "Advanced Locksmithing",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in locksmithing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s219",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Locksmithing",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in locksmithing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s220",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Radio Building (Ham)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in radio building (ham). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s221",
    "category": "Engineering & Mechanics",
    "title": "Advanced Radio Building (Ham)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in radio building (ham). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s222",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Radio Building (Ham)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in radio building (ham). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s223",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of 3D Modeling (CAD)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in 3d modeling (cad). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s224",
    "category": "Engineering & Mechanics",
    "title": "Advanced 3D Modeling (CAD)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in 3d modeling (cad). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s225",
    "category": "Engineering & Mechanics",
    "title": "Mastery of 3D Modeling (CAD)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in 3d modeling (cad). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s226",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of 3D Printing",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in 3d printing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s227",
    "category": "Engineering & Mechanics",
    "title": "Advanced 3D Printing",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in 3d printing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s228",
    "category": "Engineering & Mechanics",
    "title": "Mastery of 3D Printing",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in 3d printing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s229",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Drone Assembly",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in drone assembly. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s230",
    "category": "Engineering & Mechanics",
    "title": "Advanced Drone Assembly",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in drone assembly. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s231",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Drone Assembly",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in drone assembly. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s232",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Motorcycle Repair",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in motorcycle repair. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s233",
    "category": "Engineering & Mechanics",
    "title": "Advanced Motorcycle Repair",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in motorcycle repair. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s234",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Motorcycle Repair",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in motorcycle repair. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s235",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of Knotting & Splicing Rope",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in knotting & splicing rope. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s236",
    "category": "Engineering & Mechanics",
    "title": "Advanced Knotting & Splicing Rope",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in knotting & splicing rope. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s237",
    "category": "Engineering & Mechanics",
    "title": "Mastery of Knotting & Splicing Rope",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in knotting & splicing rope. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s238",
    "category": "Engineering & Mechanics",
    "title": "Fundamentals of HVAC Basics",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in hvac basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s239",
    "category": "Engineering & Mechanics",
    "title": "Advanced HVAC Basics",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in hvac basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s240",
    "category": "Engineering & Mechanics",
    "title": "Mastery of HVAC Basics",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in hvac basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s241",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Python Scripting",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in python scripting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s242",
    "category": "Digital & Cyber",
    "title": "Advanced Python Scripting",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in python scripting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s243",
    "category": "Digital & Cyber",
    "title": "Mastery of Python Scripting",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in python scripting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s244",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Bash/Shell Navigation",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in bash/shell navigation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s245",
    "category": "Digital & Cyber",
    "title": "Advanced Bash/Shell Navigation",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in bash/shell navigation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s246",
    "category": "Digital & Cyber",
    "title": "Mastery of Bash/Shell Navigation",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in bash/shell navigation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s247",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Network Penetration Testing",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in network penetration testing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s248",
    "category": "Digital & Cyber",
    "title": "Advanced Network Penetration Testing",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in network penetration testing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s249",
    "category": "Digital & Cyber",
    "title": "Mastery of Network Penetration Testing",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in network penetration testing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s250",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Wi-Fi Password Cracking",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in wi-fi password cracking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s251",
    "category": "Digital & Cyber",
    "title": "Advanced Wi-Fi Password Cracking",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in wi-fi password cracking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s252",
    "category": "Digital & Cyber",
    "title": "Mastery of Wi-Fi Password Cracking",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in wi-fi password cracking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s253",
    "category": "Digital & Cyber",
    "title": "Fundamentals of SQL Injection Basics",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in sql injection basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s254",
    "category": "Digital & Cyber",
    "title": "Advanced SQL Injection Basics",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in sql injection basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s255",
    "category": "Digital & Cyber",
    "title": "Mastery of SQL Injection Basics",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in sql injection basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s256",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Cryptography Basics",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in cryptography basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s257",
    "category": "Digital & Cyber",
    "title": "Advanced Cryptography Basics",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in cryptography basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s258",
    "category": "Digital & Cyber",
    "title": "Mastery of Cryptography Basics",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in cryptography basics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s259",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Web Scraping",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in web scraping. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s260",
    "category": "Digital & Cyber",
    "title": "Advanced Web Scraping",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in web scraping. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s261",
    "category": "Digital & Cyber",
    "title": "Mastery of Web Scraping",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in web scraping. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s262",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Linux Server Admin",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in linux server admin. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s263",
    "category": "Digital & Cyber",
    "title": "Advanced Linux Server Admin",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in linux server admin. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s264",
    "category": "Digital & Cyber",
    "title": "Mastery of Linux Server Admin",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in linux server admin. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s265",
    "category": "Digital & Cyber",
    "title": "Fundamentals of OSINT (Open Source Intel)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in osint (open source intel). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s266",
    "category": "Digital & Cyber",
    "title": "Advanced OSINT (Open Source Intel)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in osint (open source intel). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s267",
    "category": "Digital & Cyber",
    "title": "Mastery of OSINT (Open Source Intel)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in osint (open source intel). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s268",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Reverse Engineering",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in reverse engineering. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s269",
    "category": "Digital & Cyber",
    "title": "Advanced Reverse Engineering",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in reverse engineering. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s270",
    "category": "Digital & Cyber",
    "title": "Mastery of Reverse Engineering",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in reverse engineering. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s271",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Malware Analysis",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in malware analysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s272",
    "category": "Digital & Cyber",
    "title": "Advanced Malware Analysis",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in malware analysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s273",
    "category": "Digital & Cyber",
    "title": "Mastery of Malware Analysis",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in malware analysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s274",
    "category": "Digital & Cyber",
    "title": "Fundamentals of App Development",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in app development. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s275",
    "category": "Digital & Cyber",
    "title": "Advanced App Development",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in app development. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s276",
    "category": "Digital & Cyber",
    "title": "Mastery of App Development",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in app development. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s277",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Cloud Architecture",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in cloud architecture. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s278",
    "category": "Digital & Cyber",
    "title": "Advanced Cloud Architecture",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in cloud architecture. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s279",
    "category": "Digital & Cyber",
    "title": "Mastery of Cloud Architecture",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in cloud architecture. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s280",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Video Editing",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in video editing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s281",
    "category": "Digital & Cyber",
    "title": "Advanced Video Editing",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in video editing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s282",
    "category": "Digital & Cyber",
    "title": "Mastery of Video Editing",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in video editing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s283",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Data Analysis",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in data analysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s284",
    "category": "Digital & Cyber",
    "title": "Advanced Data Analysis",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in data analysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s285",
    "category": "Digital & Cyber",
    "title": "Mastery of Data Analysis",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in data analysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s286",
    "category": "Digital & Cyber",
    "title": "Fundamentals of Phishing Detection",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in phishing detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s287",
    "category": "Digital & Cyber",
    "title": "Advanced Phishing Detection",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in phishing detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s288",
    "category": "Digital & Cyber",
    "title": "Mastery of Phishing Detection",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in phishing detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s289",
    "category": "Physical & Performance",
    "title": "Fundamentals of Breath Holding (3 min)",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in breath holding (3 min). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s290",
    "category": "Physical & Performance",
    "title": "Advanced Breath Holding (3 min)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in breath holding (3 min). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s291",
    "category": "Physical & Performance",
    "title": "Mastery of Breath Holding (3 min)",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in breath holding (3 min). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s292",
    "category": "Physical & Performance",
    "title": "Fundamentals of Juggling (3 objects)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in juggling (3 objects). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s293",
    "category": "Physical & Performance",
    "title": "Advanced Juggling (3 objects)",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in juggling (3 objects). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s294",
    "category": "Physical & Performance",
    "title": "Mastery of Juggling (3 objects)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in juggling (3 objects). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s295",
    "category": "Physical & Performance",
    "title": "Fundamentals of Handstand",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in handstand. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s296",
    "category": "Physical & Performance",
    "title": "Advanced Handstand",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in handstand. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s297",
    "category": "Physical & Performance",
    "title": "Mastery of Handstand",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in handstand. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s298",
    "category": "Physical & Performance",
    "title": "Fundamentals of Muscle-Up",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in muscle-up. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s299",
    "category": "Physical & Performance",
    "title": "Advanced Muscle-Up",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in muscle-up. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s300",
    "category": "Physical & Performance",
    "title": "Mastery of Muscle-Up",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in muscle-up. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s301",
    "category": "Physical & Performance",
    "title": "Fundamentals of Backflip",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in backflip. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s302",
    "category": "Physical & Performance",
    "title": "Advanced Backflip",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in backflip. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s303",
    "category": "Physical & Performance",
    "title": "Mastery of Backflip",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in backflip. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s304",
    "category": "Physical & Performance",
    "title": "Fundamentals of Splits Flexibility",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in splits flexibility. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s305",
    "category": "Physical & Performance",
    "title": "Advanced Splits Flexibility",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in splits flexibility. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s306",
    "category": "Physical & Performance",
    "title": "Mastery of Splits Flexibility",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in splits flexibility. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s307",
    "category": "Physical & Performance",
    "title": "Fundamentals of Parkour Vaults",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in parkour vaults. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s308",
    "category": "Physical & Performance",
    "title": "Advanced Parkour Vaults",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in parkour vaults. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s309",
    "category": "Physical & Performance",
    "title": "Mastery of Parkour Vaults",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in parkour vaults. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s310",
    "category": "Physical & Performance",
    "title": "Fundamentals of Freediving",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in freediving. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s311",
    "category": "Physical & Performance",
    "title": "Advanced Freediving",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in freediving. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s312",
    "category": "Physical & Performance",
    "title": "Mastery of Freediving",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in freediving. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s313",
    "category": "Physical & Performance",
    "title": "Fundamentals of High-Altitude Acclimatization",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in high-altitude acclimatization. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s314",
    "category": "Physical & Performance",
    "title": "Advanced High-Altitude Acclimatization",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in high-altitude acclimatization. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s315",
    "category": "Physical & Performance",
    "title": "Mastery of High-Altitude Acclimatization",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in high-altitude acclimatization. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s316",
    "category": "Physical & Performance",
    "title": "Fundamentals of Ruck Marching (50lbs)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in ruck marching (50lbs). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s317",
    "category": "Physical & Performance",
    "title": "Advanced Ruck Marching (50lbs)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in ruck marching (50lbs). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s318",
    "category": "Physical & Performance",
    "title": "Mastery of Ruck Marching (50lbs)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in ruck marching (50lbs). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s319",
    "category": "Physical & Performance",
    "title": "Fundamentals of Barefoot Running",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in barefoot running. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s320",
    "category": "Physical & Performance",
    "title": "Advanced Barefoot Running",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in barefoot running. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s321",
    "category": "Physical & Performance",
    "title": "Mastery of Barefoot Running",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in barefoot running. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s322",
    "category": "Physical & Performance",
    "title": "Fundamentals of Ice Bath Tolerance (10 min)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in ice bath tolerance (10 min). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s323",
    "category": "Physical & Performance",
    "title": "Advanced Ice Bath Tolerance (10 min)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in ice bath tolerance (10 min). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s324",
    "category": "Physical & Performance",
    "title": "Mastery of Ice Bath Tolerance (10 min)",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in ice bath tolerance (10 min). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s325",
    "category": "Physical & Performance",
    "title": "Fundamentals of Fasting (72 hours)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in fasting (72 hours). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s326",
    "category": "Physical & Performance",
    "title": "Advanced Fasting (72 hours)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in fasting (72 hours). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s327",
    "category": "Physical & Performance",
    "title": "Mastery of Fasting (72 hours)",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in fasting (72 hours). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s328",
    "category": "Physical & Performance",
    "title": "Fundamentals of Kettlebell Snatch",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in kettlebell snatch. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s329",
    "category": "Physical & Performance",
    "title": "Advanced Kettlebell Snatch",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in kettlebell snatch. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s330",
    "category": "Physical & Performance",
    "title": "Mastery of Kettlebell Snatch",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in kettlebell snatch. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s331",
    "category": "Physical & Performance",
    "title": "Fundamentals of Olympic Weightlifting",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in olympic weightlifting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s332",
    "category": "Physical & Performance",
    "title": "Advanced Olympic Weightlifting",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in olympic weightlifting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s333",
    "category": "Physical & Performance",
    "title": "Mastery of Olympic Weightlifting",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in olympic weightlifting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s334",
    "category": "Physical & Performance",
    "title": "Fundamentals of Sprinting Mechanics",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in sprinting mechanics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s335",
    "category": "Physical & Performance",
    "title": "Advanced Sprinting Mechanics",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in sprinting mechanics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s336",
    "category": "Physical & Performance",
    "title": "Mastery of Sprinting Mechanics",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in sprinting mechanics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s337",
    "category": "Physical & Performance",
    "title": "Fundamentals of Gymnastics Rings",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in gymnastics rings. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s338",
    "category": "Physical & Performance",
    "title": "Advanced Gymnastics Rings",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in gymnastics rings. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s339",
    "category": "Physical & Performance",
    "title": "Mastery of Gymnastics Rings",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in gymnastics rings. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s340",
    "category": "Physical & Performance",
    "title": "Fundamentals of Powerlifting",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in powerlifting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s341",
    "category": "Physical & Performance",
    "title": "Advanced Powerlifting",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in powerlifting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s342",
    "category": "Physical & Performance",
    "title": "Mastery of Powerlifting",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in powerlifting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s343",
    "category": "Physical & Performance",
    "title": "Fundamentals of Marathon Pacing",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in marathon pacing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s344",
    "category": "Physical & Performance",
    "title": "Advanced Marathon Pacing",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in marathon pacing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s345",
    "category": "Physical & Performance",
    "title": "Mastery of Marathon Pacing",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in marathon pacing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s346",
    "category": "Physical & Performance",
    "title": "Fundamentals of Ironman Prep",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in ironman prep. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s347",
    "category": "Physical & Performance",
    "title": "Advanced Ironman Prep",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in ironman prep. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s348",
    "category": "Physical & Performance",
    "title": "Mastery of Ironman Prep",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in ironman prep. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s349",
    "category": "Physical & Performance",
    "title": "Fundamentals of Bouldering",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in bouldering. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s350",
    "category": "Physical & Performance",
    "title": "Advanced Bouldering",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in bouldering. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s351",
    "category": "Physical & Performance",
    "title": "Mastery of Bouldering",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in bouldering. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s352",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Speed Reading (500 wpm)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in speed reading (500 wpm). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s353",
    "category": "Language & Cognitive",
    "title": "Advanced Speed Reading (500 wpm)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in speed reading (500 wpm). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s354",
    "category": "Language & Cognitive",
    "title": "Mastery of Speed Reading (500 wpm)",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in speed reading (500 wpm). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s355",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Memory Palace Technique",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in memory palace technique. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s356",
    "category": "Language & Cognitive",
    "title": "Advanced Memory Palace Technique",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in memory palace technique. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s357",
    "category": "Language & Cognitive",
    "title": "Mastery of Memory Palace Technique",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in memory palace technique. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s358",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Mental Math (3-digit mult)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in mental math (3-digit mult). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s359",
    "category": "Language & Cognitive",
    "title": "Advanced Mental Math (3-digit mult)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in mental math (3-digit mult). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s360",
    "category": "Language & Cognitive",
    "title": "Mastery of Mental Math (3-digit mult)",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in mental math (3-digit mult). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s361",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Morse Code",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in morse code. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s362",
    "category": "Language & Cognitive",
    "title": "Advanced Morse Code",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in morse code. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s363",
    "category": "Language & Cognitive",
    "title": "Mastery of Morse Code",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in morse code. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s364",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Sign Language (ASL)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in sign language (asl). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s365",
    "category": "Language & Cognitive",
    "title": "Advanced Sign Language (ASL)",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in sign language (asl). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s366",
    "category": "Language & Cognitive",
    "title": "Mastery of Sign Language (ASL)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in sign language (asl). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s367",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Spanish (Conversational)",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in spanish (conversational). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s368",
    "category": "Language & Cognitive",
    "title": "Advanced Spanish (Conversational)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in spanish (conversational). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s369",
    "category": "Language & Cognitive",
    "title": "Mastery of Spanish (Conversational)",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in spanish (conversational). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s370",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Russian (Cyrillic Alphabet)",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in russian (cyrillic alphabet). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s371",
    "category": "Language & Cognitive",
    "title": "Advanced Russian (Cyrillic Alphabet)",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in russian (cyrillic alphabet). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s372",
    "category": "Language & Cognitive",
    "title": "Mastery of Russian (Cyrillic Alphabet)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in russian (cyrillic alphabet). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s373",
    "category": "Language & Cognitive",
    "title": "Fundamentals of French (Conversational)",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in french (conversational). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s374",
    "category": "Language & Cognitive",
    "title": "Advanced French (Conversational)",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in french (conversational). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s375",
    "category": "Language & Cognitive",
    "title": "Mastery of French (Conversational)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in french (conversational). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s376",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Arabic (Script Reading)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in arabic (script reading). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s377",
    "category": "Language & Cognitive",
    "title": "Advanced Arabic (Script Reading)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in arabic (script reading). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s378",
    "category": "Language & Cognitive",
    "title": "Mastery of Arabic (Script Reading)",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in arabic (script reading). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s379",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Mandarin (Pinyin)",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in mandarin (pinyin). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s380",
    "category": "Language & Cognitive",
    "title": "Advanced Mandarin (Pinyin)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in mandarin (pinyin). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s381",
    "category": "Language & Cognitive",
    "title": "Mastery of Mandarin (Pinyin)",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in mandarin (pinyin). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s382",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Negotiation Tactics",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in negotiation tactics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s383",
    "category": "Language & Cognitive",
    "title": "Advanced Negotiation Tactics",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in negotiation tactics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s384",
    "category": "Language & Cognitive",
    "title": "Mastery of Negotiation Tactics",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in negotiation tactics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s385",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Lie Detection",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in lie detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s386",
    "category": "Language & Cognitive",
    "title": "Advanced Lie Detection",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in lie detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s387",
    "category": "Language & Cognitive",
    "title": "Mastery of Lie Detection",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in lie detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s388",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Public Speaking",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in public speaking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s389",
    "category": "Language & Cognitive",
    "title": "Advanced Public Speaking",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in public speaking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s390",
    "category": "Language & Cognitive",
    "title": "Mastery of Public Speaking",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in public speaking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s391",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Chess (1200 ELO)",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in chess (1200 elo). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s392",
    "category": "Language & Cognitive",
    "title": "Advanced Chess (1200 ELO)",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in chess (1200 elo). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s393",
    "category": "Language & Cognitive",
    "title": "Mastery of Chess (1200 ELO)",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in chess (1200 elo). Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s394",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Poker Odds Calculation",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in poker odds calculation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s395",
    "category": "Language & Cognitive",
    "title": "Advanced Poker Odds Calculation",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in poker odds calculation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s396",
    "category": "Language & Cognitive",
    "title": "Mastery of Poker Odds Calculation",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in poker odds calculation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s397",
    "category": "Language & Cognitive",
    "title": "Fundamentals of Debate & Logic",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in debate & logic. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s398",
    "category": "Language & Cognitive",
    "title": "Advanced Debate & Logic",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in debate & logic. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s399",
    "category": "Language & Cognitive",
    "title": "Mastery of Debate & Logic",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in debate & logic. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s400",
    "category": "Craft & Build",
    "title": "Fundamentals of Blacksmithing",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in blacksmithing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s401",
    "category": "Craft & Build",
    "title": "Advanced Blacksmithing",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in blacksmithing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s402",
    "category": "Craft & Build",
    "title": "Mastery of Blacksmithing",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in blacksmithing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s403",
    "category": "Craft & Build",
    "title": "Fundamentals of Leatherworking",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in leatherworking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s404",
    "category": "Craft & Build",
    "title": "Advanced Leatherworking",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in leatherworking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s405",
    "category": "Craft & Build",
    "title": "Mastery of Leatherworking",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in leatherworking. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s406",
    "category": "Craft & Build",
    "title": "Fundamentals of Sewing/Tailoring",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in sewing/tailoring. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s407",
    "category": "Craft & Build",
    "title": "Advanced Sewing/Tailoring",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in sewing/tailoring. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s408",
    "category": "Craft & Build",
    "title": "Mastery of Sewing/Tailoring",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in sewing/tailoring. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s409",
    "category": "Craft & Build",
    "title": "Fundamentals of Carpentry",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in carpentry. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s410",
    "category": "Craft & Build",
    "title": "Advanced Carpentry",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in carpentry. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s411",
    "category": "Craft & Build",
    "title": "Mastery of Carpentry",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in carpentry. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s412",
    "category": "Craft & Build",
    "title": "Fundamentals of Masonry",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in masonry. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s413",
    "category": "Craft & Build",
    "title": "Advanced Masonry",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in masonry. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s414",
    "category": "Craft & Build",
    "title": "Mastery of Masonry",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in masonry. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s415",
    "category": "Craft & Build",
    "title": "Fundamentals of Ceramics",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in ceramics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s416",
    "category": "Craft & Build",
    "title": "Advanced Ceramics",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in ceramics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s417",
    "category": "Craft & Build",
    "title": "Mastery of Ceramics",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in ceramics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s418",
    "category": "Craft & Build",
    "title": "Fundamentals of Bookbinding",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in bookbinding. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s419",
    "category": "Craft & Build",
    "title": "Advanced Bookbinding",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in bookbinding. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s420",
    "category": "Craft & Build",
    "title": "Mastery of Bookbinding",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in bookbinding. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s421",
    "category": "Craft & Build",
    "title": "Fundamentals of Glassblowing",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in glassblowing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s422",
    "category": "Craft & Build",
    "title": "Advanced Glassblowing",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in glassblowing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s423",
    "category": "Craft & Build",
    "title": "Mastery of Glassblowing",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in glassblowing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s424",
    "category": "Craft & Build",
    "title": "Fundamentals of Lock Making",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in lock making. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s425",
    "category": "Craft & Build",
    "title": "Advanced Lock Making",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in lock making. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s426",
    "category": "Craft & Build",
    "title": "Mastery of Lock Making",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in lock making. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s427",
    "category": "Craft & Build",
    "title": "Fundamentals of Gunsmithing",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in gunsmithing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s428",
    "category": "Craft & Build",
    "title": "Advanced Gunsmithing",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in gunsmithing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s429",
    "category": "Craft & Build",
    "title": "Mastery of Gunsmithing",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in gunsmithing. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s430",
    "category": "Craft & Build",
    "title": "Fundamentals of Knife Making",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in knife making. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s431",
    "category": "Craft & Build",
    "title": "Advanced Knife Making",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in knife making. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s432",
    "category": "Craft & Build",
    "title": "Mastery of Knife Making",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in knife making. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s433",
    "category": "Craft & Build",
    "title": "Fundamentals of Resin Casting",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in resin casting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s434",
    "category": "Craft & Build",
    "title": "Advanced Resin Casting",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in resin casting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s435",
    "category": "Craft & Build",
    "title": "Mastery of Resin Casting",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in resin casting. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s436",
    "category": "Craft & Build",
    "title": "Fundamentals of 3D Printing Design",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in 3d printing design. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s437",
    "category": "Craft & Build",
    "title": "Advanced 3D Printing Design",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in 3d printing design. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s438",
    "category": "Craft & Build",
    "title": "Mastery of 3D Printing Design",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in 3d printing design. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s439",
    "category": "Craft & Build",
    "title": "Fundamentals of CNC Machining",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in cnc machining. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s440",
    "category": "Craft & Build",
    "title": "Advanced CNC Machining",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in cnc machining. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s441",
    "category": "Craft & Build",
    "title": "Mastery of CNC Machining",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in cnc machining. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s442",
    "category": "Craft & Build",
    "title": "Fundamentals of Basket Weaving",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in basket weaving. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s443",
    "category": "Craft & Build",
    "title": "Advanced Basket Weaving",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in basket weaving. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s444",
    "category": "Craft & Build",
    "title": "Mastery of Basket Weaving",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in basket weaving. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s445",
    "category": "Craft & Build",
    "title": "Fundamentals of Boat Building",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in boat building. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s446",
    "category": "Craft & Build",
    "title": "Advanced Boat Building",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in boat building. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s447",
    "category": "Craft & Build",
    "title": "Mastery of Boat Building",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in boat building. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s448",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Speed Reading",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in speed reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s449",
    "category": "Intelligence & Analysis",
    "title": "Advanced Speed Reading",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in speed reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s450",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Speed Reading",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in speed reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s451",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Body Language Reading",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in body language reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s452",
    "category": "Intelligence & Analysis",
    "title": "Advanced Body Language Reading",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in body language reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s453",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Body Language Reading",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in body language reading. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s454",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Micro-expression Analysis",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in micro-expression analysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s455",
    "category": "Intelligence & Analysis",
    "title": "Advanced Micro-expression Analysis",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in micro-expression analysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s456",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Micro-expression Analysis",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in micro-expression analysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s457",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Lie Detection",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in lie detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s458",
    "category": "Intelligence & Analysis",
    "title": "Advanced Lie Detection",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in lie detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s459",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Lie Detection",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in lie detection. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s460",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Cryptanalysis",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in cryptanalysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s461",
    "category": "Intelligence & Analysis",
    "title": "Advanced Cryptanalysis",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in cryptanalysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s462",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Cryptanalysis",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in cryptanalysis. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s463",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Memory Palace",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in memory palace. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s464",
    "category": "Intelligence & Analysis",
    "title": "Advanced Memory Palace",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in memory palace. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s465",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Memory Palace",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in memory palace. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s466",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Facial Recognition",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in facial recognition. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s467",
    "category": "Intelligence & Analysis",
    "title": "Advanced Facial Recognition",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in facial recognition. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s468",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Facial Recognition",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in facial recognition. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s469",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Acoustic Signature ID",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in acoustic signature id. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s470",
    "category": "Intelligence & Analysis",
    "title": "Advanced Acoustic Signature ID",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in acoustic signature id. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s471",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Acoustic Signature ID",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in acoustic signature id. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s472",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Signal Interception",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in signal interception. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s473",
    "category": "Intelligence & Analysis",
    "title": "Advanced Signal Interception",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in signal interception. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s474",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Signal Interception",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in signal interception. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s475",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of OSINT Research",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in osint research. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s476",
    "category": "Intelligence & Analysis",
    "title": "Advanced OSINT Research",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in osint research. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s477",
    "category": "Intelligence & Analysis",
    "title": "Mastery of OSINT Research",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in osint research. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s478",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Interrogation Tactics",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in interrogation tactics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s479",
    "category": "Intelligence & Analysis",
    "title": "Advanced Interrogation Tactics",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in interrogation tactics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s480",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Interrogation Tactics",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in interrogation tactics. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s481",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Elicitation",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in elicitation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s482",
    "category": "Intelligence & Analysis",
    "title": "Advanced Elicitation",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in elicitation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s483",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Elicitation",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in elicitation. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s484",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Disguise Craft",
    "cost": true,
    "time": "5-10 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve fundamentals of proficiency in disguise craft. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s485",
    "category": "Intelligence & Analysis",
    "title": "Advanced Disguise Craft",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in disguise craft. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s486",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Disguise Craft",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in disguise craft. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s487",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Surveillance Evasion",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in surveillance evasion. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s488",
    "category": "Intelligence & Analysis",
    "title": "Advanced Surveillance Evasion",
    "cost": true,
    "time": "20-40 hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve advanced proficiency in surveillance evasion. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s489",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Surveillance Evasion",
    "cost": true,
    "time": "100+ hours",
    "needs": "Specialized gear, instructor fees, paid software, or materials.",
    "desc": "Learn and achieve mastery of proficiency in surveillance evasion. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s490",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Stenography",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in stenography. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s491",
    "category": "Intelligence & Analysis",
    "title": "Advanced Stenography",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in stenography. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s492",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Stenography",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in stenography. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  },
  {
    "id": "s493",
    "category": "Intelligence & Analysis",
    "title": "Fundamentals of Data Mining",
    "cost": false,
    "time": "5-10 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve fundamentals of proficiency in data mining. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 50
  },
  {
    "id": "s494",
    "category": "Intelligence & Analysis",
    "title": "Advanced Data Mining",
    "cost": false,
    "time": "20-40 hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve advanced proficiency in data mining. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 150
  },
  {
    "id": "s495",
    "category": "Intelligence & Analysis",
    "title": "Mastery of Data Mining",
    "cost": false,
    "time": "100+ hours",
    "needs": "Free open-source resources, internet access, practice time.",
    "desc": "Learn and achieve mastery of proficiency in data mining. Develop the foundational muscle memory and cognitive mapping required to execute this skill under pressure.",
    "xp": 400
  }
],
  
  _expandedCards: {},
  _activeCategory: 'All',

  render() {
    return `
    <div class="page-header">
      <div class="page-title">Skill <span>Tree</span></div>
      <div class="page-sub">Acquire ${this.SKILL_LIST.length} operator-grade capabilities.</div>
    </div>
    
    <div style="display:flex;gap:8px;margin-bottom:24px;overflow-x:auto;padding-bottom:8px" id="skills-filters">
    </div>
    
    <div id="skills-container"></div>
    `;
  },

  afterRender() {
    this._renderFilters();
    this._renderList();
  },

  setFilter(cat) {
    this._activeCategory = cat;
    this._renderFilters();
    this._renderList();
  },

  toggleCard(id) {
    this._expandedCards[id] = !this._expandedCards[id];
    const card = document.getElementById('skill-exp-' + id);
    if (card) {
      card.style.display = this._expandedCards[id] ? 'block' : 'none';
    }
  },

  learnSkill(id, xp, title) {
    let learned = DB.get('learned_skills', []);
    if (learned.includes(id)) return;
    learned.push(id);
    DB.set('learned_skills', learned);
    DB.addXP(xp, `Learned Skill: ${title}`);
    this._renderList();
  },

  _renderFilters() {
    const cats = ['All', ...new Set(this.SKILL_LIST.map(s => s.category))];
    let html = '';
    cats.forEach(c => {
      const isActive = this._activeCategory === c;
      html += `<button class="btn ${isActive ? 'btn-primary' : 'btn-ghost'}" onclick="Skills.setFilter('${c}')" style="white-space:nowrap">${c}</button>`;
    });
    document.getElementById('skills-filters').innerHTML = html;
  },

  _renderList() {
    const learned = DB.get('learned_skills', []);
    
    // Root level: Category buttons
    if (this._activeCategory === 'All') {
      const cats = [...new Set(this.SKILL_LIST.map(s => s.category))];
      let html = '<div class="grid-2" style="gap:24px">';
      cats.forEach(c => {
        const catSkills = this.SKILL_LIST.filter(s => s.category === c);
        const catLearned = catSkills.filter(s => learned.includes(s.id)).length;
        const pct = Math.round((catLearned / catSkills.length) * 100);
        html += `
        <div class="card" style="cursor:pointer;border-color:var(--border);transition:border-color 0.2s" onclick="Skills.setFilter('${c}')" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
          <div style="font-size:32px;margin-bottom:12px">🌳</div>
          <div class="card-title">${c}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:12px">${catLearned} / ${catSkills.length} Acquired (${pct}%)</div>
          <div class="progress-bar-bg" style="height:6px;margin-top:8px"><div style="height:100%;width:${pct}%;background:var(--accent);border-radius:4px"></div></div>
        </div>`;
      });
      html += '</div>';
      document.getElementById('skills-container').innerHTML = html;
      return;
    }

    // RPG Tree Level
    let filtered = this.SKILL_LIST.filter(s => s.category === this._activeCategory);
    const groups = {};
    filtered.forEach(s => {
      const baseName = s.title.replace(/^(Fundamentals of |Advanced |Mastery of )/, '');
      if (!groups[baseName]) groups[baseName] = [];
      groups[baseName].push(s);
    });

    let html = `
    <style>
      .tree-scroll { overflow-x: auto; padding-bottom: 32px; padding-top: 10px; }
      .tree-row { display: flex; align-items: stretch; margin-bottom: 40px; position: relative; }
      .tree-node-wrapper { display: flex; align-items: center; }
      .tree-node {
        width: 300px; flex-shrink: 0; background: var(--bg); border: 2px solid var(--border); 
        border-radius: 8px; padding: 16px; position: relative; cursor: pointer; transition: all 0.2s;
        display: flex; flex-direction: column;
      }
      .tree-node:hover { border-color: var(--accent); transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); z-index: 10; }
      .tree-node.learned { border-color: var(--green); background: rgba(16,185,129,0.05); }
      .tree-node.locked { opacity: 0.5; filter: grayscale(100%); pointer-events: auto; }
      
      .tree-connector { width: 48px; height: 4px; background: var(--border); flex-shrink: 0; transition: background 0.3s; margin: 0 4px; border-radius: 2px; }
      .tree-connector.active { background: var(--green); box-shadow: 0 0 8px rgba(16,185,129,0.5); }
      .tree-node-title { font-weight: 800; font-size: 15px; margin-bottom: 6px; line-height: 1.3; }
      .tree-node-meta { font-size: 11px; color: var(--text3); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
    </style>
    <div class="tree-scroll"><div style="min-width: max-content;">
    `;

    Object.keys(groups).forEach(base => {
      const sorted = [];
      const f = groups[base].find(s => s.title.startsWith('Fundamentals'));
      const a = groups[base].find(s => s.title.startsWith('Advanced'));
      const m = groups[base].find(s => s.title.startsWith('Mastery'));
      if(f) sorted.push(f);
      if(a) sorted.push(a);
      if(m) sorted.push(m);

      html += '<div class="tree-row">';
      
      sorted.forEach((s, index) => {
        let isLocked = false;
        if (index === 1 && f && !learned.includes(f.id)) isLocked = true;
        if (index === 2 && a && !learned.includes(a.id)) isLocked = true;
        
        const isLearned = learned.includes(s.id);
        const isExp = this._expandedCards[s.id];
        const stateClass = isLearned ? 'learned' : (isLocked ? 'locked' : 'available');
        
        html += `
        <div class="tree-node-wrapper">
          <div class="tree-node ${stateClass}" onclick="Skills.toggleCard('${s.id}')">
            <div style="display:flex;justify-content:space-between;align-items:flex-start">
              <div class="tree-node-title" style="${isLearned ? 'text-decoration:line-through;color:var(--text2)' : ''}">${s.title}</div>
              <div style="color:var(--accent);font-size:12px;font-weight:900;background:rgba(124,92,252,0.1);padding:2px 6px;border-radius:4px">+${s.xp} XP</div>
            </div>
            <div class="tree-node-meta" style="margin-bottom:8px">
              ${isLocked ? '🔒 LOCKED (REQUIRES PREV. TIER)' : (isLearned ? '✅ ACQUIRED' : '▶ AVAILABLE TO LEARN')}
              ${s.cost ? '<span style="color:var(--red);margin-left:8px;background:rgba(239,68,68,0.1);padding:2px 4px;border-radius:2px">💰 COST</span>' : ''}
            </div>
            
            <div id="skill-exp-${s.id}" style="display:${isExp ? 'block' : 'none'};margin-top:12px;padding-top:12px;border-top:1px dashed var(--border)">
              <div style="font-size:13px;color:var(--text2);margin-bottom:12px;line-height:1.4">${s.desc}</div>
              <div style="margin-bottom:8px;background:rgba(0,0,0,0.2);padding:8px;border-radius:4px">
                <div style="margin-bottom:6px"><span style="color:var(--text3);font-size:10px;font-weight:800">TIME:</span> <span style="font-size:12px;font-weight:600;color:var(--text)">${s.time}</span></div>
                <div><span style="color:var(--text3);font-size:10px;font-weight:800">NEEDS:</span> <span style="font-size:12px;font-weight:600;color:var(--text)">${s.needs}</span></div>
              </div>
              
              ${isLearned 
                ? '' 
                : (isLocked ? '<div style="font-size:12px;color:var(--red);text-align:center;padding:8px;background:rgba(239,68,68,0.1);border-radius:4px">Node Locked</div>' : `<button class="btn btn-primary btn-full" style="padding:8px;font-size:13px" onclick="event.stopPropagation(); Skills.learnSkill('${s.id}', ${s.xp}, '${s.title.replace(/'/g, "\\'")}')">Mark as Learned</button>`)
              }
            </div>
            
            <div style="text-align:center;color:var(--text3);font-size:10px;text-transform:uppercase;margin-top:12px;display:${isExp ? 'none' : 'block'}">
              Click for details ▼
            </div>
          </div>
        `;
        
        if (index < sorted.length - 1) {
          const connectorClass = isLearned ? 'active' : '';
          html += `<div class="tree-connector ${connectorClass}"></div>`;
        }
        
        html += `</div>`;
      });
      
      html += '</div>';
    });

    html += `</div></div>`;
    document.getElementById('skills-container').innerHTML = html;
  }
};
