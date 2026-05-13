// challenges.js — The Crucible

const Challenges = {
  CHALLENGE_LIST: [
    // --- TIER I: Discomfort (100-150 XP) ---
    { id: 'c1', tier: 1, xp: 150, title: 'No-Stimulus Run', desc: 'Run for at least 60 minutes with no music, no podcast, no phone. Just you and your thoughts.' },
    { id: 'c2', tier: 1, xp: 100, title: 'Floor Sleeper', desc: 'Sleep on the hard floor for one entire night. Use only a sleeping bag or blanket.' },
    { id: 'c3', tier: 1, xp: 150, title: 'Zero Sugar 48', desc: 'Go 48 hours consuming absolutely zero added sugars.' },
    { id: 'c4', tier: 1, xp: 100, title: 'Bookworm', desc: 'Read a dense, non-fiction book for 60 mins straight without breaking focus.' },
    { id: 'c5', tier: 1, xp: 120, title: '100 Pushups', desc: 'Complete 100 perfect-form pushups in a single day.', hazard: true },
    { id: 'c6', tier: 1, xp: 150, title: 'Digital Sunset', desc: 'Turn off all screens 2 hours before bed for 3 days in a row.' },
    { id: 'c7', tier: 1, xp: 100, title: 'Cold Splash', desc: 'Finish your daily shower with 60 seconds of purely cold water.' },
    { id: 'c8', tier: 1, xp: 120, title: 'Empty Inbox', desc: 'Process every single email in your inbox down to zero.' },
    { id: 'c9', tier: 1, xp: 150, title: 'Silent Commute', desc: 'Drive/transit to your destination in absolute silence. No radio.' },
    { id: 'c10', tier: 1, xp: 100, title: 'Left-Hand Path', desc: 'Use your non-dominant hand for all daily non-critical tasks (brushing teeth, eating) for a day.' },
    { id: 'c11', tier: 1, xp: 150, title: 'Water Only', desc: 'Drink absolutely nothing but plain water for 3 consecutive days.' },
    { id: 'c12', tier: 1, xp: 100, title: 'Posture Check', desc: 'Maintain perfect posture sitting and standing for one entire day. Correct yourself instantly.' },
    { id: 'c13', tier: 1, xp: 120, title: 'Stair Master', desc: 'Refuse all elevators and escalators for a full week. Stairs only.' },
    { id: 'c14', tier: 1, xp: 150, title: 'SOP Recital', desc: 'Write down 5 critical flight SOPs entirely from memory with zero mistakes.' },
    { id: 'c15', tier: 1, xp: 100, title: '10-Minute Hang', desc: 'Accumulate 10 total minutes of dead-hanging from a pullup bar in one day.' },
    { id: 'c16', tier: 1, xp: 120, title: 'Barefoot Walk', desc: 'Walk outside barefoot for 20 minutes to toughen the feet.', hazard: true },
    { id: 'c17', tier: 1, xp: 150, title: 'No Complaining', desc: 'Go 24 hours without uttering a single complaint or negative statement.' },
    { id: 'c18', tier: 1, xp: 100, title: 'Clean Sweep', desc: 'Deep clean your entire room/workspace to military inspection standards.' },
    { id: 'c19', tier: 1, xp: 120, title: 'Blindfold Drill', desc: 'Blindfold yourself and successfully navigate your house and make a simple meal.' },
    { id: 'c20', tier: 1, xp: 150, title: 'The 5 AM Club', desc: 'Wake up at exactly 5:00 AM for 3 days in a row.' },
    { id: 'c21', tier: 1, xp: 100, title: 'Static Wall Sit', desc: 'Accumulate 15 minutes of 90-degree wall sits in one day.' },
    { id: 'c22', tier: 1, xp: 150, title: 'Caffeine Detox', desc: 'Consume zero caffeine for 48 hours.' },
    { id: 'c23', tier: 1, xp: 120, title: 'Perfect Bed', desc: 'Make your bed to hospital-corner perfection 7 days in a row.' },
    { id: 'c24', tier: 1, xp: 100, title: 'Brevity Drill', desc: 'Speak using only the absolute minimum number of words necessary for one entire day.' },
    { id: 'c25', tier: 1, xp: 150, title: 'Spatial Map', desc: 'Draw a highly detailed map of your neighborhood entirely from memory.' },

    // --- TIER II: Endurance (200-300 XP) ---
    { id: 'c26', tier: 2, xp: 250, title: 'Deep Work Marathon', desc: 'Complete four 90-minute Deep Work blocks in a single 24-hour period.' },
    { id: 'c27', tier: 2, xp: 300, title: 'The 10k Ruck', desc: 'Complete a 10km (6.2 mile) walk wearing a backpack with at least 30lbs.', hazard: true },
    { id: 'c28', tier: 2, xp: 200, title: 'Ice Age', desc: 'Take a fully cold shower for 5 unbroken minutes. No hot water.', hazard: true },
    { id: 'c29', tier: 2, xp: 300, title: 'The 0400 Club', desc: 'Wake up at 4:00 AM sharp and immediately exercise or start a deep work block. No snoozing.' },
    { id: 'c30', tier: 2, xp: 250, title: 'Half-Marathon', desc: 'Run 13.1 miles (21.1 km) in a single session.', hazard: true },
    { id: 'c31', tier: 2, xp: 200, title: 'One-Meal-A-Day', desc: 'Eat only one single, large meal (OMAD) for 3 consecutive days.', hazard: true },
    { id: 'c32', tier: 2, xp: 250, title: 'Social Ghost', desc: 'Delete all social media apps from your phone for 7 full days.' },
    { id: 'c33', tier: 2, xp: 300, title: 'The 500 Reps', desc: 'Complete 500 pushups or 500 bodyweight squats in one day.', hazard: true },
    { id: 'c34', tier: 2, xp: 200, title: 'Zero Entertainment', desc: 'Go 72 hours with no TV, movies, video games, or YouTube. Work, study, and fitness only.' },
    { id: 'c35', tier: 2, xp: 250, title: 'Navy SEAL Sleep', desc: 'Sleep on the floor with no blanket and no pillow for two consecutive nights.' },
    { id: 'c36', tier: 2, xp: 300, title: 'Fighter Pilot Math', desc: 'Pass the Mental Math drill 10 times in a single day with zero errors.' },
    { id: 'c37', tier: 2, xp: 200, title: 'Breath Hold', desc: 'Practice CO2 tolerance training until you can safely hold your breath for 2 minutes.', hazard: true },
    { id: 'c38', tier: 2, xp: 250, title: 'Heavy Carry', desc: 'Carry two heavy objects (kettlebells/dumbbells/water jugs) for 1 mile without stopping.', hazard: true },
    { id: 'c39', tier: 2, xp: 300, title: 'Aviation Manual Mastery', desc: 'Read an entire technical flight manual cover-to-cover and pass a self-made 50-question test.' },
    { id: 'c40', tier: 2, xp: 200, title: 'Burpee Mile', desc: 'Do a burpee, jump forward as far as possible. Repeat until you cover 400 meters.', hazard: true },
    { id: 'c41', tier: 2, xp: 250, title: 'Isolate & Innovate', desc: 'Sit in a completely dark, silent room for 2 hours with only a notebook and pen. Write.' },
    { id: 'c42', tier: 2, xp: 300, title: 'Language Primer', desc: 'Spend 5 hours over a weekend aggressively learning the basics of a foreign language (e.g., French).' },
    { id: 'c43', tier: 2, xp: 200, title: 'No Furniture', desc: 'Spend an entire weekend (48h) refusing to sit on chairs or couches. Stand, squat, or sit on the floor.' },
    { id: 'c44', tier: 2, xp: 250, title: 'Sleep Deprivation Drill', desc: 'Stay awake for 24 hours, then take the PVT test. Note the cognitive degradation.', hazard: true },
    { id: 'c45', tier: 2, xp: 300, title: '1000 Jump Ropes', desc: 'Complete 1,000 jump rope rotations unbroken (if you trip, start over).', hazard: true },
    { id: 'c46', tier: 2, xp: 200, title: 'Fast & Ruck', desc: 'Do a 5-mile ruck march 18 hours into a water fast.', hazard: true },
    { id: 'c47', tier: 2, xp: 250, title: 'Memorize the Rose', desc: 'Memorize the exact degree heading of all 32 points of the compass rose perfectly.' },
    { id: 'c48', tier: 2, xp: 300, title: 'Blind Assembly', desc: 'Disassemble and reassemble a complex mechanical object blindfolded.' },
    { id: 'c49', tier: 2, xp: 200, title: 'The Stoic Week', desc: 'For 7 days, answer all non-essential questions with only "Yes", "No", or "Understood".' },
    { id: 'c50', tier: 2, xp: 250, title: 'Sub-Zero Run', desc: 'Go for a 5km run in freezing weather wearing only shorts and a t-shirt.', hazard: true },

    // --- TIER III: The Crucible (500-1000 XP) ---
    { id: 'c51', tier: 3, xp: 500, title: '24-Hour Fast', desc: 'Consume nothing but water, black coffee, or plain tea for 24 hours straight.', hazard: true },
    { id: 'c52', tier: 3, xp: 600, title: 'Dopamine Detox Weekend', desc: '48 hours from Friday night to Sunday night with zero social media, YouTube, or video games.' },
    { id: 'c53', tier: 3, xp: 1000, title: 'The Murph', desc: '1 Mile Run, 100 Pullups, 200 Pushups, 300 Squats, 1 Mile Run.', hazard: true },
    { id: 'c54', tier: 3, xp: 800, title: 'Digital Ghost', desc: 'Turn your smartphone completely off and leave it in a drawer for a full 24 hours.' },
    { id: 'c55', tier: 3, xp: 700, title: '48-Hour Fast', desc: 'Go 48 hours consuming only water. Test your psychological reliance on food.', hazard: true },
    { id: 'c56', tier: 3, xp: 1000, title: 'David Goggins 4x4x48', desc: 'Run 4 miles, every 4 hours, for 48 hours.', hazard: true },
    { id: 'c57', tier: 3, xp: 800, title: 'The 20k Ruck', desc: 'Complete a 20km (12.4 mile) march with a 45lb pack.', hazard: true },
    { id: 'c58', tier: 3, xp: 600, title: 'Silent Retreat', desc: 'Spend 3 full days (72 hours) without speaking a single word to anyone. Write only if necessary.' },
    { id: 'c59', tier: 3, xp: 900, title: 'Century Ride', desc: 'Ride a bicycle for 100 miles in a single day.', hazard: true },
    { id: 'c60', tier: 3, xp: 500, title: '10,000 Swings', desc: 'Complete 10,000 kettlebell swings over the course of 30 days.', hazard: true },
    { id: 'c61', tier: 3, xp: 1000, title: 'Iron Mind', desc: 'Memorize a 1000-digit sequence or the entirety of an extensive flight manual chapter verbatim.' },
    { id: 'c62', tier: 3, xp: 800, title: 'Hell Week Prep', desc: 'Wake up at 0300 every day for 7 days. Perform 1 hour of intense PT immediately.', hazard: true },
    { id: 'c63', tier: 3, xp: 600, title: 'No-Tech Week', desc: 'Use zero electronics outside of strict, mandatory work/school for 7 days. No music, TV, or browsing.' },
    { id: 'c64', tier: 3, xp: 700, title: 'Marathon', desc: 'Run 26.2 miles (42.2 km) in a single effort.', hazard: true },
    { id: 'c65', tier: 3, xp: 900, title: 'The 1000 Rep Challenge', desc: 'In one workout, complete 1000 total reps of combined calisthenics (pullups, pushups, situps, squats).', hazard: true },
    { id: 'c66', tier: 3, xp: 500, title: 'Polar Bear Plunge', desc: 'Submerge yourself in freezing water (lake, ocean, or ice bath) for 10 minutes.', hazard: true },
    { id: 'c67', tier: 3, xp: 600, title: 'Minimalist Month', desc: 'Box up 80% of your non-essential belongings. Live with only the absolute basics for 30 days.' },
    { id: 'c68', tier: 3, xp: 800, title: 'Sleep Deprivation Ruck', desc: 'Stay awake for 24 hours, then immediately complete a 10-mile ruck march with 30lbs.', hazard: true },
    { id: 'c69', tier: 3, xp: 1000, title: 'The 72-Hour Fast', desc: 'Water only for 72 hours. This is where cellular autophagy peaks and the mind hardens.', hazard: true },
    { id: 'c70', tier: 3, xp: 700, title: 'Wilderness Survival', desc: 'Spend 48 hours camping alone in the wilderness with only a knife, fire starter, and sleeping bag.', hazard: true },
    { id: 'c71', tier: 3, xp: 500, title: 'Blind Typing Master', desc: 'Achieve 100+ WPM on a typing test while blindfolded. Ensures keyboard instinct.' },
    { id: 'c72', tier: 3, xp: 600, title: 'Hyper-Focus Month', desc: 'Sustain a streak of at least one 90-minute Deep Work block every single day for 30 consecutive days.' },
    { id: 'c73', tier: 3, xp: 800, title: 'Tread Water', desc: 'Tread water in a deep pool or lake for 30 continuous minutes without touching the sides or bottom.', hazard: true },
    { id: 'c74', tier: 3, xp: 900, title: 'The Iron Triathlon', desc: 'Swim 1 mile, bike 20 miles, run 5 miles back-to-back.', hazard: true },
    { id: 'c75', tier: 3, xp: 1000, title: 'Ultimate Pilot Sim', desc: 'Spend 8 uninterrupted hours in a flight simulator executing complex IFR procedures with no breaks.' }
  ],

  _expandedTiers: { 1: false, 2: false, 3: false },

  toggleTier(tier) {
    this._expandedTiers[tier] = !this._expandedTiers[tier];
    const content = document.getElementById(`tier-${tier}-content`);
    const btn = document.getElementById(`tier-${tier}-btn`);
    if (this._expandedTiers[tier]) {
      content.classList.add('expanded');
      btn.innerHTML = `Show Less ▲`;
    } else {
      content.classList.remove('expanded');
      btn.innerHTML = `Show More ▼`;
    }
  },

  completeChallenge(id, xp, title) {
    let completed = DB.get('completed_challenges', []);
    if (completed.includes(id)) return;
    
    completed.push(id);
    DB.set('completed_challenges', completed);
    DB.addXP(xp, `Completed Challenge: ${title}`);
    this._renderList();
  },

  render() {
    return `
    <div class="page-header">
      <div class="page-title">The <span>Crucible</span></div>
      <div class="page-sub">Voluntary hardship. 75 Military-Grade challenges. Earn massive XP.</div>
    </div>
    <div id="challenges-container"></div>
    <style>
      .accordion-content {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .accordion-content.expanded {
        grid-template-rows: 1fr;
      }
      .accordion-inner {
        overflow: hidden;
      }
      .hazard-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: rgba(239, 68, 68, 0.15);
        color: var(--red);
        font-size: 10px;
        font-weight: 800;
        padding: 2px 6px;
        border-radius: 4px;
        border: 1px solid rgba(239, 68, 68, 0.3);
        text-transform: uppercase;
        margin-left: 8px;
      }
    </style>
    `;
  },

  afterRender() {
    this._renderList();
  },

  _renderList() {
    const completed = DB.get('completed_challenges', []);
    let html = '<div class="grid-2" style="gap:24px;align-items:start">';
    
    const renderCard = (c) => {
      const isDone = completed.includes(c.id);
      const hazardHtml = c.hazard ? `<span class="hazard-badge">⚠️ Safety Hazard</span>` : '';
      return `
        <div class="card" style="opacity:${isDone ? 0.5 : 1}; border-color:${isDone ? 'var(--green)' : c.hazard ? 'rgba(239, 68, 68, 0.4)' : 'var(--border)'}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div class="card-title" style="${isDone ? 'text-decoration:line-through' : ''}">
              ${c.title} ${hazardHtml}
            </div>
            <div style="font-weight:900;color:var(--accent);font-size:14px;background:rgba(124,92,252,0.1);padding:4px 8px;border-radius:4px;white-space:nowrap">+${c.xp} XP</div>
          </div>
          <div style="font-size:13px;color:var(--text2);margin:12px 0;line-height:1.5">${c.desc}</div>
          ${isDone 
            ? `<div style="color:var(--green);font-weight:700;font-size:13px;text-align:center;padding:8px;background:rgba(16,185,129,0.1);border-radius:4px">COMPLETED</div>` 
            : `<button class="btn btn-ghost btn-full" onclick="Challenges.completeChallenge('${c.id}', ${c.xp}, '${c.title.replace(/'/g, "\\'")}')">Mark Completed</button>`
          }
        </div>`;
    };

    const renderTier = (tierNum, title, color) => {
      const tierChallenges = this.CHALLENGE_LIST.filter(c => c.tier === tierNum);
      const isExpanded = this._expandedTiers[tierNum];
      const first5 = tierChallenges.slice(0, 5);
      const rest = tierChallenges.slice(5);
      
      let out = `
      <div style="display:flex;flex-direction:column;margin-bottom:16px">
        <div style="font-size:18px;font-weight:800;color:${color};margin-bottom:16px;border-bottom:1px solid ${color};padding-bottom:8px">
          ${title} <span style="font-size:12px;color:var(--text3);font-weight:600;margin-left:8px">(${tierChallenges.length} Missions)</span>
        </div>
        
        <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:16px">
          ${first5.map(renderCard).join('')}
        </div>
        
        <div class="accordion-content ${isExpanded ? 'expanded' : ''}" id="tier-${tierNum}-content">
          <div class="accordion-inner" style="display:flex;flex-direction:column;gap:16px;padding-bottom:16px">
            ${rest.map(renderCard).join('')}
          </div>
        </div>
        
        <button id="tier-${tierNum}-btn" class="btn btn-ghost btn-full" style="border:1px dashed var(--border);color:var(--text3)" onclick="Challenges.toggleTier(${tierNum})">
          ${isExpanded ? 'Show Less ▲' : 'Show More ▼'}
        </button>
      </div>`;
      
      return out;
    };

    html += renderTier(1, 'Tier I: Discomfort', 'var(--text)');
    html += renderTier(2, 'Tier II: Endurance', 'var(--orange)');
    html += '</div><div class="grid-2" style="gap:24px;margin-top:24px">';
    html += renderTier(3, 'Tier III: The Crucible', 'var(--red)');
    html += '</div>';

    document.getElementById('challenges-container').innerHTML = html;
  }
};
