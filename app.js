'use strict';

// ===== Vibe Data =====
const VIBES = {
  chill: {
    title: 'Chill Mode',
    emoji: '😌',
    accent: '#7dd3fc',
    palettes: [
      ['#cffafe','#67e8f9','#22d3ee','#0891b2','#164e63'],
      ['#dbeafe','#93c5fd','#60a5fa','#2563eb','#1e3a8a'],
      ['#f0fdf4','#86efac','#4ade80','#16a34a','#14532d'],
    ],
    words: ['calm','serene','mellow','breezy','soft','ambient','tranquil','gentle','laid-back','slow'],
    tracks: [
      { name: 'Sunday Morning', artist: 'Maroon 5', genre: 'Pop' },
      { name: 'Banana Pancakes', artist: 'Jack Johnson', genre: 'Acoustic' },
      { name: 'Holocene', artist: 'Bon Iver', genre: 'Indie Folk' },
      { name: 'Featherstone', artist: 'The Paper Kites', genre: 'Folk' },
      { name: 'Skinny Love', artist: 'Birdy', genre: 'Indie Pop' },
      { name: 'Real Love Baby', artist: "Father John Misty", genre: 'Indie' },
    ],
    quotes: [
      '"Slow down and enjoy the scenery."',
      '"Do less. Be more."',
      '"Peace is not the absence of noise, but the presence of calm within it."',
      '"Let the soft animal of your body love what it loves." — Mary Oliver',
    ],
  },

  energized: {
    title: 'Energized',
    emoji: '⚡',
    accent: '#fbbf24',
    palettes: [
      ['#fef3c7','#fde68a','#fcd34d','#f59e0b','#92400e'],
      ['#fff7ed','#fed7aa','#fb923c','#ea580c','#7c2d12'],
      ['#fef9c3','#fef08a','#facc15','#ca8a04','#713f12'],
    ],
    words: ['electric','alive','unstoppable','fired-up','bold','charged','dynamic','intense','driven','blazing'],
    tracks: [
      { name: 'Power', artist: 'Kanye West', genre: 'Hip-Hop' },
      { name: "Can't Stop", artist: 'Red Hot Chili Peppers', genre: 'Rock' },
      { name: 'Eye of the Tiger', artist: 'Survivor', genre: 'Classic Rock' },
      { name: 'Lose Yourself', artist: 'Eminem', genre: 'Hip-Hop' },
      { name: 'Levels', artist: 'Avicii', genre: 'EDM' },
      { name: 'Blinding Lights', artist: 'The Weeknd', genre: 'Synth-Pop' },
    ],
    quotes: [
      '"The secret of getting ahead is getting started."',
      '"Energy flows where attention goes."',
      '"You are not tired. You are uninspired. Fix that." ',
      '"Do it now. Sometimes "later" becomes "never"."',
    ],
  },

  melancholy: {
    title: 'Melancholy',
    emoji: '🌧',
    accent: '#818cf8',
    palettes: [
      ['#eef2ff','#c7d2fe','#a5b4fc','#6366f1','#312e81'],
      ['#f5f3ff','#ddd6fe','#a78bfa','#7c3aed','#2e1065'],
      ['#f8fafc','#cbd5e1','#94a3b8','#475569','#0f172a'],
    ],
    words: ['wistful','pensive','longing','grey','quiet','heavy','introspective','tender','hollow','aching'],
    tracks: [
      { name: 'The Night Will Always Win', artist: 'Manchester Orchestra', genre: 'Indie Rock' },
      { name: 'Skinny Love', artist: 'Bon Iver', genre: 'Indie Folk' },
      { name: 'Liability', artist: 'Lorde', genre: 'Art Pop' },
      { name: 'motion sickness', artist: 'Phoebe Bridgers', genre: 'Indie Folk' },
      { name: 'drivers license', artist: 'Olivia Rodrigo', genre: 'Pop' },
      { name: 'Fourth of July', artist: 'Sufjan Stevens', genre: 'Folk' },
    ],
    quotes: [
      '"Every feeling is valid. Even the ones that weigh a ton."',
      '"The wound is where the light enters." — Rumi',
      '"It\'s okay to not be okay."',
      '"Sometimes you just need to sit in the rain for a while."',
    ],
  },

  romantic: {
    title: 'Romantic',
    emoji: '🌸',
    accent: '#f9a8d4',
    palettes: [
      ['#fdf2f8','#fbcfe8','#f472b6','#db2777','#831843'],
      ['#fff1f2','#fecdd3','#fda4af','#e11d48','#881337'],
      ['#fef9c3','#fde68a','#f9a8d4','#ec4899','#701a75'],
    ],
    words: ['tender','intimate','soft','passionate','adoring','longing','blooming','warm','sweet','devoted'],
    tracks: [
      { name: 'Make You Feel My Love', artist: 'Adele', genre: 'Pop/Soul' },
      { name: 'At Last', artist: 'Etta James', genre: 'Soul' },
      { name: 'La Vie en Rose', artist: 'Édith Piaf', genre: 'Chanson' },
      { name: "Can't Help Falling in Love", artist: 'Elvis Presley', genre: 'Classic Pop' },
      { name: 'Enchanted', artist: 'Taylor Swift', genre: 'Pop' },
      { name: 'Perfect', artist: 'Ed Sheeran', genre: 'Pop' },
    ],
    quotes: [
      '"You are my today and all of my tomorrows."',
      '"In all the world, there is no heart for me like yours."',
      '"Love is not about possession. Love is about appreciation."',
      '"You have bewitched me, body and soul." — Jane Austen',
    ],
  },

  focused: {
    title: 'Deep Focus',
    emoji: '🎯',
    accent: '#34d399',
    palettes: [
      ['#ecfdf5','#a7f3d0','#6ee7b7','#10b981','#064e3b'],
      ['#f0fdf4','#bbf7d0','#86efac','#22c55e','#14532d'],
      ['#f8fafc','#e2e8f0','#94a3b8','#334155','#0f172a'],
    ],
    words: ['sharp','clear','deliberate','precise','intentional','deep','flow','aligned','structured','decisive'],
    tracks: [
      { name: 'Experience', artist: 'Ludovico Einaudi', genre: 'Neoclassical' },
      { name: 'Comptine d\'un autre été', artist: 'Yann Tiersen', genre: 'Neoclassical' },
      { name: 'Divenire', artist: 'Ludovico Einaudi', genre: 'Neoclassical' },
      { name: 'Brain Power', artist: 'NOMA', genre: 'Electronic' },
      { name: 'Strobe', artist: 'deadmau5', genre: 'Progressive House' },
      { name: 'Intro', artist: 'The xx', genre: 'Indie Electronic' },
    ],
    quotes: [
      '"Where focus goes, energy flows."',
      '"The secret is to work less as individuals and more as a team." — Draper',
      '"One task. Full attention. Zero distractions."',
      '"A person who never made a mistake never tried anything new." — Einstein',
    ],
  },

  wild: {
    title: 'Wild Energy',
    emoji: '🔥',
    accent: '#fb923c',
    palettes: [
      ['#fff7ed','#fed7aa','#fb923c','#c2410c','#431407'],
      ['#fef2f2','#fecaca','#f87171','#dc2626','#7f1d1d'],
      ['#fefce8','#fef08a','#fb923c','#dc2626','#18181b'],
    ],
    words: ['raw','unhinged','unstoppable','chaotic','fierce','savage','reckless','bold','loud','untamed'],
    tracks: [
      { name: 'Killing In The Name', artist: 'Rage Against the Machine', genre: 'Metal/Rap' },
      { name: 'Back In Black', artist: 'AC/DC', genre: 'Hard Rock' },
      { name: 'Jump Around', artist: 'House of Pain', genre: 'Hip-Hop' },
      { name: 'Sabotage', artist: 'Beastie Boys', genre: 'Rap Rock' },
      { name: 'Seven Nation Army', artist: 'The White Stripes', genre: 'Alternative' },
      { name: 'Smells Like Teen Spirit', artist: 'Nirvana', genre: 'Grunge' },
    ],
    quotes: [
      '"Not all those who wander are lost."',
      '"Live fast. Die whenever. I don\'t care."',
      '"Chaos is a ladder." — Littlefinger',
      '"The most courageous act is still to think for yourself. Aloud." — Coco Chanel',
    ],
  },

  dreamy: {
    title: 'Dreamy',
    emoji: '🌙',
    accent: '#c084fc',
    palettes: [
      ['#faf5ff','#e9d5ff','#c084fc','#9333ea','#581c87'],
      ['#f5f3ff','#ddd6fe','#a78bfa','#7c3aed','#2e1065'],
      ['#0f0f1a','#1e1b4b','#4338ca','#818cf8','#e0e7ff'],
    ],
    words: ['ethereal','surreal','mystic','floaty','hazy','cosmic','otherworldly','lucid','liminal','celestial'],
    tracks: [
      { name: 'Motion Picture Soundtrack', artist: 'Radiohead', genre: 'Art Rock' },
      { name: 'No Surprises', artist: 'Radiohead', genre: 'Art Rock' },
      { name: 'Moon River', artist: 'Audrey Hepburn', genre: 'Classic' },
      { name: 'Teardrop', artist: 'Massive Attack', genre: 'Trip-Hop' },
      { name: "White Flag", artist: "Joseph", genre: 'Indie Folk' },
      { name: 'A Sky Full of Stars', artist: 'Coldplay', genre: 'Indie Pop' },
    ],
    quotes: [
      '"The cosmos is within us. We are made of star-stuff." — Carl Sagan',
      '"Dream a little dream of me."',
      '"We are all just stardust and moonlight."',
      '"Reality is merely an illusion, albeit a very persistent one." — Einstein',
    ],
  },

  nostalgic: {
    title: 'Nostalgic',
    emoji: '🍂',
    accent: '#fdba74',
    palettes: [
      ['#fffbeb','#fde68a','#fcd34d','#d97706','#78350f'],
      ['#fff7ed','#fed7aa','#fdba74','#ea580c','#7c2d12'],
      ['#fdf4ff','#e9d5ff','#c084fc','#d97706','#78350f'],
    ],
    words: ['warm','amber','vintage','faded','golden','timeless','familiar','bittersweet','worn','cherished'],
    tracks: [
      { name: 'Africa', artist: 'Toto', genre: 'Classic Rock' },
      { name: 'Take On Me', artist: 'A-ha', genre: 'Synth-Pop' },
      { name: 'Come On Eileen', artist: 'Dexys Midnight Runners', genre: '80s Pop' },
      { name: 'Sweet Child O\' Mine', artist: "Guns N' Roses", genre: 'Rock' },
      { name: '1979', artist: 'Smashing Pumpkins', genre: 'Alternative' },
      { name: 'Kids', artist: 'MGMT', genre: 'Indie Pop' },
    ],
    quotes: [
      '"Good old days. What were they?"',
      '"We didn\'t realize we were making memories, we just knew we were having fun."',
      '"Nostalgia is a file that removes the rough edges from the good old days."',
      '"You can\'t go back and change the beginning, but you can start where you are."',
    ],
  },
};

// ===== Utilities =====
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===== Toast =====
let toastEl = null;

function showToast(msg) {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastEl._timer);
  toastEl._timer = setTimeout(() => toastEl.classList.remove('show'), 2000);
}

// ===== Render Vibe =====
function renderVibe(mood) {
  const data = VIBES[mood];
  if (!data) return;

  // Header
  document.getElementById('vibeEmoji').textContent = data.emoji;
  document.getElementById('vibeTitle').textContent = data.title;

  // Palette
  const palette = pick(data.palettes);
  const paletteEl = document.getElementById('palette');
  paletteEl.innerHTML = '';
  palette.forEach(hex => {
    const swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.background = hex;
    swatch.style.boxShadow = `0 4px 16px -4px ${hex}99`;
    const label = document.createElement('span');
    label.className = 'hex-label';
    label.textContent = hex.toUpperCase();
    swatch.appendChild(label);
    swatch.addEventListener('click', () => {
      navigator.clipboard?.writeText(hex).then(() => showToast(`Copied ${hex.toUpperCase()}`));
    });
    paletteEl.appendChild(swatch);
  });

  // Words
  const tagsEl = document.getElementById('tags');
  tagsEl.innerHTML = '';
  const words = shuffle(data.words).slice(0, 6);
  words.forEach(w => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = w;
    tagsEl.appendChild(tag);
  });

  // Tracks
  const listEl = document.getElementById('musicList');
  listEl.innerHTML = '';
  const tracks = shuffle(data.tracks).slice(0, 4);
  const icons = ['🎵','🎶','🎸','🎹','🥁','🎷','🎺','🎻'];
  tracks.forEach(t => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="track-icon">${pick(icons)}</span>
      <div class="track-info">
        <div class="track-name">${t.name}</div>
        <div class="track-artist">${t.artist}</div>
      </div>
      <span class="track-genre">${t.genre}</span>
    `;
    listEl.appendChild(li);
  });

  // Quote
  document.getElementById('vibeQuote').textContent = pick(data.quotes);

  // Accent color on card border
  const card = document.querySelector('.vibe-card');
  card.style.borderColor = data.accent + '44';
  card.style.boxShadow = `0 0 60px -20px ${data.accent}33`;

  // Update CSS accent for quote border
  document.documentElement.style.setProperty('--accent', data.accent);
}

// ===== Event Handling =====
let currentMood = null;

document.getElementById('moodGrid').addEventListener('click', e => {
  const btn = e.target.closest('.mood-btn');
  if (!btn) return;

  const mood = btn.dataset.mood;
  currentMood = mood;

  // Update active state
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show and render output
  const output = document.getElementById('vibeOutput');
  output.classList.remove('hidden');
  // Re-trigger animation
  output.style.animation = 'none';
  output.offsetHeight; // reflow
  output.style.animation = '';

  renderVibe(mood);
  output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

document.getElementById('generateBtn').addEventListener('click', () => {
  if (currentMood) {
    // Spin animation on button
    const btn = document.getElementById('generateBtn');
    btn.textContent = '✦ Generating...';
    setTimeout(() => {
      renderVibe(currentMood);
      btn.textContent = '✦ Regenerate Vibe';
    }, 200);
  }
});
