import { useState } from 'react';
import PageContainer from '../components/PageContainer';

const scenes = [
  {
    label: 'CHAPTER 01 / THE LETTER',
    title: 'An owl finds you at breakfast.',
    text: 'A sealed letter sits beside your plate. The emerald ink spells your name, and the envelope bears a crest you have never seen. Your family suddenly goes quiet.',
    choices: [
      { label: 'Open the letter right now', note: 'Curiosity gets the better of you.', next: 1 },
      { label: 'Ask your family what they know', note: 'You want the truth before taking the next step.', next: 2 },
      { label: 'Keep the letter secret and investigate', note: 'You decide to learn more on your own.', next: 3 }
    ]
  },
  {
    label: 'CHAPTER 02 / A NEW WORLD',
    title: 'The letter invites you to Hogwarts.',
    text: 'It explains that you are a witch or wizard, and that a place at Hogwarts School of Witchcraft and Wizardry is waiting for you. A second knock comes at the door.',
    choices: [
      { label: 'Trust the invitation and prepare to go', note: 'A new adventure begins with an open mind.', next: 4 },
      { label: 'Find someone who can explain magic', note: 'You want answers before stepping into the unknown.', next: 5 }
    ]
  },
  {
    label: 'CHAPTER 02 / FAMILY SECRETS',
    title: 'Your family finally tells you part of the truth.',
    text: 'They have been afraid of this day. There are things about your past they never understood, and the letter may hold the answers they could not give you.',
    choices: [
      { label: 'Read the letter together', note: 'You choose trust and face the mystery as a family.', next: 4 },
      { label: 'Ask for time to think', note: 'You choose caution before making a life-changing decision.', next: 5 }
    ]
  },
  {
    label: 'CHAPTER 02 / THE QUIET INVESTIGATION',
    title: 'A strange symbol appears on the envelope.',
    text: 'The crest matches a mark you once saw in an old book. The more you look, the more you suspect your ordinary life has been hiding something extraordinary.',
    choices: [
      { label: 'Follow the clue to the old bookshop', note: 'Your first step is guided by curiosity.', next: 5 },
      { label: 'Open the letter and face the truth', note: 'You decide the mystery can wait no longer.', next: 4 }
    ]
  },
  {
    label: 'CHAPTER 03 / PLATFORM NINE AND THREE-QUARTERS',
    title: 'The train is waiting. What kind of person will you be?',
    text: 'At the station, the scarlet Hogwarts Express breathes steam into the air. Other first-years look just as nervous as you feel. A younger student has dropped a case and is struggling to lift it.',
    choices: [
      { label: 'Stop and help the student', note: 'Kindness becomes the first thing people remember about you.', next: 6 },
      { label: 'Find a compartment and observe quietly', note: 'You prefer to understand your new world before acting.', next: 7 },
      { label: 'Introduce yourself to everyone nearby', note: 'You meet uncertainty with confidence.', next: 8 }
    ]
  },
  {
    label: 'CHAPTER 03 / FOLLOWING THE CLUES',
    title: 'A shopkeeper recognises the crest.',
    text: 'The shopkeeper explains that the symbol belongs to the wizarding world. They cannot tell you everything, but they offer to guide you to the place where your questions can be answered.',
    choices: [
      { label: 'Accept their help', note: 'You are willing to trust a guide when the path is unfamiliar.', next: 4 },
      { label: 'Ask for proof first', note: 'You value evidence and careful judgement.', next: 7 }
    ]
  },
  {
    label: 'YOUR PATH / THE HELPER',
    title: 'Your first choice sets the tone.',
    text: 'You helped someone before you knew whether it would benefit you. On the train, the student introduces you to their friends. Your adventure is beginning with a small act of courage and kindness.',
    choices: [{ label: 'Begin again and explore another path', note: 'Every decision can tell a different story.', next: 0 }]
  },
  {
    label: 'YOUR PATH / THE OBSERVER',
    title: 'You learn by watching closely.',
    text: 'You notice the details other people miss: the whispered advice, the nervous smiles, the way everyone is trying to belong. When the time comes to act, you will have a clearer picture.',
    choices: [{ label: 'Begin again and explore another path', note: 'Every decision can tell a different story.', next: 0 }]
  },
  {
    label: 'YOUR PATH / THE CONNECTOR',
    title: 'You turn strangers into allies.',
    text: 'Your introductions lead to a lively compartment full of stories, laughter, and unexpected connections. You do not know what awaits at Hogwarts, but you will not face it alone.',
    choices: [{ label: 'Begin again and explore another path', note: 'Every decision can tell a different story.', next: 0 }]
  }
];

export default function Play() {
  const [current, setCurrent] = useState(0);
  const [history, setHistory] = useState([]);
  const scene = scenes[current];
  function choose(choice) {
    setHistory(items => [...items, { scene: scene.title, choice: choice.label, note: choice.note }]);
    setCurrent(choice.next);
  }
  function restart() { setCurrent(0); setHistory([]); }
  return <PageContainer className="content-page journey-page">
    <div className="page-hero">
      <p className="eyebrow">PLAY / A CHOOSE-YOUR-PATH ADVENTURE</p>
      <h1>If you were Harry Potter,<br /><em>what would you do?</em></h1>
      <p>Your choices shape your journey into the wizarding world. There is no single right answer: discover what your instincts reveal about the witch or wizard you might become.</p>
    </div>
    <section className="profile-panel play-intro">
      <div className="profile-avatar">⚡</div>
      <div className="profile-fields"><p className="eyebrow">YOUR STORY, YOUR DECISIONS</p><h2>{scene.title}</h2><p>{scene.text}</p></div>
      <div className="profile-stats"><div><strong>{history.length}</strong><span>Choices made</span></div><div><strong>{new Set(history.map(x => x.scene)).size}</strong><span>Scenes faced</span></div></div>
    </section>
    <div className="section-heading journey-heading"><p className="eyebrow">{scene.label}</p><h2>What will you do?</h2><p className="section-description">Choose a response to continue. Your previous decisions are recorded below.</p></div>
    <div className="play-choices">{scene.choices.map((choice, index) => <button className="person-row play-choice" key={choice.label} onClick={() => choose(choice)}><span className="person-number">0{index + 1}</span><span className="person-info"><strong>{choice.label}</strong><span>{choice.note}</span></span><span className="person-mark">↗</span></button>)}</div>
    {history.length > 0 && <section className="play-history"><div className="section-heading"><p className="eyebrow">YOUR FIELD JOURNAL</p><h2>The path you chose</h2></div>{history.map((item, index) => <article className="world-note" key={index}><span className="note-index">{String(index + 1).padStart(2, '0')}</span><div><h3>{item.scene}</h3><p>{item.choice}</p><p>{item.note}</p></div></article>)}<button className="quiet-button" onClick={restart}>Start a new path ↺</button></section>}
  </PageContainer>;
}