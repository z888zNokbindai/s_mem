"use strict";
const CARD_BACK = "assets/card-back.webp";
const CARDS = [
  {
    "id": 1,
    "name": "Weeping Widow",
    "image": "assets/cards/card-01.webp",
    "rarity": "RARE",
    "lore": "The journal ends on this page. Beneath the final sentence, the same warning is carved thirteen times."
  },
  {
    "id": 3,
    "name": "Bone Altar",
    "image": "assets/cards/card-03.webp",
    "rarity": "UNCOMMON",
    "lore": "A bell rings whenever it draws near, although the bell tower burned down generations ago."
  },
  {
    "id": 6,
    "name": "Toxin Spreader",
    "image": "assets/cards/card-06.webp",
    "rarity": "RARE",
    "lore": "It first appeared where the lamps went dark. Those who spoke its name forgot the sound of their own voice."
  },
  {
    "id": 7,
    "name": "Malignant Surgeon",
    "image": "assets/cards/card-07.webp",
    "rarity": "RELIC",
    "lore": "No grave would hold it. Every dawn, wet footprints returned to the chapel door."
  },
  {
    "id": 10,
    "name": "Mourning Matriarch",
    "image": "assets/cards/card-10.webp",
    "rarity": "COMMON",
    "lore": "The stain cannot be washed out. Under moonlight, it slowly forms a map to somewhere that should not exist."
  },
  {
    "id": 11,
    "name": "Hollow Executioner",
    "image": "assets/cards/card-11.webp",
    "rarity": "RARE",
    "lore": "It first appeared where the lamps went dark. Those who spoke its name forgot the sound of their own voice."
  },
  {
    "id": 12,
    "name": "Parasitic Host",
    "image": "assets/cards/card-12.webp",
    "rarity": "RELIC",
    "lore": "No grave would hold it. Every dawn, wet footprints returned to the chapel door."
  },
  {
    "id": 13,
    "name": "Crimson Puppeteer",
    "image": "assets/cards/card-13.webp",
    "rarity": "UNCOMMON",
    "lore": "A bell rings whenever it draws near, although the bell tower burned down generations ago."
  },
  {
    "id": 14,
    "name": "Forgotten King",
    "image": "assets/cards/card-14.webp",
    "rarity": "CURSED",
    "lore": "The stain cannot be washed out. Under moonlight, it slowly forms a map to somewhere that should not exist."
  },
  {
    "id": 15,
    "name": "Soul Weaver",
    "image": "assets/cards/card-15.webp",
    "rarity": "COMMON",
    "lore": "It first appeared where the lamps went dark. Those who spoke its name forgot the sound of their own voice."
  },
  {
    "id": 16,
    "name": "Faceless Sculptor",
    "image": "assets/cards/card-16.webp",
    "rarity": "RARE",
    "lore": "No grave would hold it. Every dawn, wet footprints returned to the chapel door."
  },
  {
    "id": 17,
    "name": "Clockwork Tormentor",
    "image": "assets/cards/card-17.webp",
    "rarity": "RELIC",
    "lore": "A bell rings whenever it draws near, although the bell tower burned down generations ago."
  },
  {
    "id": 18,
    "name": "Sunken Mariner",
    "image": "assets/cards/card-18.webp",
    "rarity": "UNCOMMON",
    "lore": "The stain cannot be washed out. Under moonlight, it slowly forms a map to somewhere that should not exist."
  },
  {
    "id": 19,
    "name": "Crimson Librarian",
    "image": "assets/cards/card-19.webp",
    "rarity": "CURSED",
    "lore": "It first appeared where the lamps went dark. Those who spoke its name forgot the sound of their own voice."
  },
  {
    "id": 20,
    "name": "Scarecrow Sentinel",
    "image": "assets/cards/card-20.webp",
    "rarity": "COMMON",
    "lore": "No grave would hold it. Every dawn, wet footprints returned to the chapel door."
  },
  {
    "id": 21,
    "name": "Velvet Harlequin",
    "image": "assets/cards/card-21.webp",
    "rarity": "RARE",
    "lore": "A bell rings whenever it draws near, although the bell tower burned down generations ago."
  },
  {
    "id": 23,
    "name": "Broken Soldier",
    "image": "assets/cards/card-23.webp",
    "rarity": "UNCOMMON",
    "lore": "Witnesses remember different shapes, but all describe the same impossible smile."
  },
  {
    "id": 25,
    "name": "Limping Fugitive",
    "image": "assets/cards/card-25.webp",
    "rarity": "COMMON",
    "lore": "No grave would hold it. Every dawn, wet footprints returned to the chapel door."
  },
  {
    "id": 26,
    "name": "Poisoned Scholar",
    "image": "assets/cards/card-26.webp",
    "rarity": "RARE",
    "lore": "A bell rings whenever it draws near, although the bell tower burned down generations ago."
  },
  {
    "id": 27,
    "name": "Orphaned Heir",
    "image": "assets/cards/card-27.webp",
    "rarity": "RELIC",
    "lore": "The stain cannot be washed out. Under moonlight, it slowly forms a map to somewhere that should not exist."
  },
  {
    "id": 28,
    "name": "Horned Devourer",
    "image": "assets/cards/card-28.webp",
    "rarity": "UNCOMMON",
    "lore": "It first appeared where the lamps went dark. Those who spoke its name forgot the sound of their own voice."
  },
  {
    "id": 29,
    "name": "Screaming Seraph",
    "image": "assets/cards/card-29.webp",
    "rarity": "CURSED",
    "lore": "No grave would hold it. Every dawn, wet footprints returned to the chapel door."
  },
  {
    "id": 30,
    "name": "Hive Mind",
    "image": "assets/cards/card-30.webp",
    "rarity": "COMMON",
    "lore": "A bell rings whenever it draws near, although the bell tower burned down generations ago."
  },
  {
    "id": 31,
    "name": "Void Stalker",
    "image": "assets/cards/card-31.webp",
    "rarity": "RARE",
    "lore": "The stain cannot be washed out. Under moonlight, it slowly forms a map to somewhere that should not exist."
  },
  {
    "id": 32,
    "name": "Chain Warden",
    "image": "assets/cards/card-32.webp",
    "rarity": "RELIC",
    "lore": "It first appeared where the lamps went dark. Those who spoke its name forgot the sound of their own voice."
  },
  {
    "id": 33,
    "name": "Gluttonous Maw",
    "image": "assets/cards/card-33.webp",
    "rarity": "UNCOMMON",
    "lore": "No grave would hold it. Every dawn, wet footprints returned to the chapel door."
  },
  {
    "id": 36,
    "name": "Carrion Crow Priest",
    "image": "assets/cards/card-36.webp",
    "rarity": "RARE",
    "lore": "The stain cannot be washed out. Under moonlight, it slowly forms a map to somewhere that should not exist."
  },
  {
    "id": 37,
    "name": "Frozen Penitent",
    "image": "assets/cards/card-37.webp",
    "rarity": "RELIC",
    "lore": "It first appeared where the lamps went dark. Those who spoke its name forgot the sound of their own voice."
  },
  {
    "id": 39,
    "name": "Bloodstone Golem",
    "image": "assets/cards/card-39.webp",
    "rarity": "CURSED",
    "lore": "The order called it a miracle. The survivors called it the night mercy learned to hate."
  },
  {
    "id": 40,
    "name": "Cosmic Weaver",
    "image": "assets/cards/card-40.webp",
    "rarity": "ULTRA RARE",
    "lore": "Its portrait was found facing the wall. By morning, every face in the house had been scratched away."
  },
  {
    "id": 41,
    "name": "Eternal Monarch",
    "image": "assets/cards/card-41.webp",
    "rarity": "ULTRA RARE",
    "lore": "Witnesses remember different shapes, but all describe the same impossible smile."
  },
  {
    "id": 42,
    "name": "Red Riding Stalker",
    "image": "assets/cards/card-42.webp",
    "rarity": "RELIC",
    "lore": "The journal ends on this page. Beneath the final sentence, the same warning is carved thirteen times."
  },
  {
    "id": 43,
    "name": "Glass Slipper Torture",
    "image": "assets/cards/card-43.webp",
    "rarity": "UNCOMMON",
    "lore": "The order called it a miracle. The survivors called it the night mercy learned to hate."
  },
  {
    "id": 44,
    "name": "Candy Coated Abattoir",
    "image": "assets/cards/card-44.webp",
    "rarity": "CURSED",
    "lore": "Its portrait was found facing the wall. By morning, every face in the house had been scratched away."
  },
  {
    "id": 45,
    "name": "Strangling Golden Hair",
    "image": "assets/cards/card-45.webp",
    "rarity": "COMMON",
    "lore": "Witnesses remember different shapes, but all describe the same impossible smile."
  },
  {
    "id": 46,
    "name": "Puppet Master S Lie",
    "image": "assets/cards/card-46.webp",
    "rarity": "RARE",
    "lore": "The journal ends on this page. Beneath the final sentence, the same warning is carved thirteen times."
  },
  {
    "id": 47,
    "name": "Forsaken Maiden",
    "image": "assets/cards/card-47.webp",
    "rarity": "RELIC",
    "lore": "The order called it a miracle. The survivors called it the night mercy learned to hate."
  },
  {
    "id": 48,
    "name": "Abyssal Call",
    "image": "assets/cards/card-48.webp",
    "rarity": "UNCOMMON",
    "lore": "Its portrait was found facing the wall. By morning, every face in the house had been scratched away."
  },
  {
    "id": 49,
    "name": "Deranged Glutton",
    "image": "assets/cards/card-49.webp",
    "rarity": "CURSED",
    "lore": "Witnesses remember different shapes, but all describe the same impossible smile."
  },
  {
    "id": 50,
    "name": "Discarded Relic",
    "image": "assets/cards/card-50.webp",
    "rarity": "COMMON",
    "lore": "The journal ends on this page. Beneath the final sentence, the same warning is carved thirteen times."
  },
  {
    "id": 51,
    "name": "Eldritch Decanter",
    "image": "assets/cards/card-51.webp",
    "rarity": "RARE",
    "lore": "The order called it a miracle. The survivors called it the night mercy learned to hate."
  },
  {
    "id": 52,
    "name": "Scorched Overlord",
    "image": "assets/cards/card-52.webp",
    "rarity": "RELIC",
    "lore": "Its portrait was found facing the wall. By morning, every face in the house had been scratched away."
  },
  {
    "id": 53,
    "name": "Hellfire Ravager",
    "image": "assets/cards/card-53.webp",
    "rarity": "UNCOMMON",
    "lore": "Witnesses remember different shapes, but all describe the same impossible smile."
  },
  {
    "id": 54,
    "name": "Soul Eater General",
    "image": "assets/cards/card-54.webp",
    "rarity": "CURSED",
    "lore": "The journal ends on this page. Beneath the final sentence, the same warning is carved thirteen times."
  },
  {
    "id": 55,
    "name": "Molten Sentry",
    "image": "assets/cards/card-55.webp",
    "rarity": "COMMON",
    "lore": "The order called it a miracle. The survivors called it the night mercy learned to hate."
  },
  {
    "id": 56,
    "name": "Blasphemous Inquisitor",
    "image": "assets/cards/card-56.webp",
    "rarity": "RARE",
    "lore": "Its portrait was found facing the wall. By morning, every face in the house had been scratched away."
  },
  {
    "id": 57,
    "name": "Sanguine Greatsword",
    "image": "assets/cards/card-57.webp",
    "rarity": "RELIC",
    "lore": "Witnesses remember different shapes, but all describe the same impossible smile."
  },
  {
    "id": 58,
    "name": "Whispering Dagger",
    "image": "assets/cards/card-58.webp",
    "rarity": "UNCOMMON",
    "lore": "The journal ends on this page. Beneath the final sentence, the same warning is carved thirteen times."
  },
  {
    "id": 59,
    "name": "Shackled Shield",
    "image": "assets/cards/card-59.webp",
    "rarity": "CURSED",
    "lore": "The order called it a miracle. The survivors called it the night mercy learned to hate."
  },
  {
    "id": 60,
    "name": "Widow S Bow",
    "image": "assets/cards/card-60.webp",
    "rarity": "COMMON",
    "lore": "Its portrait was found facing the wall. By morning, every face in the house had been scratched away."
  },
  {
    "id": 61,
    "name": "Necrotic Flail",
    "image": "assets/cards/card-61.webp",
    "rarity": "RARE",
    "lore": "Witnesses remember different shapes, but all describe the same impossible smile."
  }
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const ENDLESS_PAIR_CURVE = [5, 6, 8, 10, 12, 14, 16, 18, 20];
const ENDLESS_CURSES = [
  { name:"FIRST SEAL", text:"The first seal protects the deck from moving.", damage:0, shuffleBonus:0, previewCut:0, decay:0 },
  { name:"FADING WHISPER", text:"The opening glimpse fades a little sooner.", damage:0, shuffleBonus:0, previewCut:80, decay:0 },
  { name:"BLOOD MARK", text:"Wrong pairs leave a deeper mark.", damage:2, shuffleBonus:.01, previewCut:0, decay:0 },
  { name:"RESTLESS DECK", text:"The unbound cards may shift after repeated mistakes.", damage:0, shuffleBonus:.05, previewCut:50, decay:0 },
  { name:"DEVOURING CLOCK", text:"The void consumes score faster every second.", damage:1, shuffleBonus:.02, previewCut:80, decay:1 }
];

const state = {
  mode:"normal", selectedPairs:0, pairs:0, deck:[], first:null, second:null,
  lock:false, matched:0, moves:0, roundMoves:0, sanity:100, score:0,
  seconds:0, timer:null, paused:false, started:false, muted:false,
  audio:null, ambient:null, round:1, clearedRounds:0, combo:1, streak:0,
  bestCombo:1, totalMatches:0, usedCardIds:[], rules:null, runSaved:false,
  runToken:0, inIntermission:false, atmoTimers:[], lastActionAt:Date.now(),
  roundMistakes:0, mismatchesSinceShuffle:0
};
const whispers = [
  "Do not turn around.", "It remembers you.", "One of them moved.",
  "Your hands are not your own.", "You have opened this before.", "Let me out.",
  "There is someone behind the cards.", "That was not the same face.",
  "Your heartbeat belongs to the deck.", "It can see through the screen."
];

function loadJSON(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function saveJSON(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
function shuffle(a) { for (let i=a.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function formatTime(s) { return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`; }
function escapeHTML(s) { return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function later(fn, delay) { const token=state.runToken; return setTimeout(()=>{ if(token===state.runToken) fn(); },delay); }
function atmoLater(fn, delay) {
  const token=state.runToken;
  const id=setTimeout(()=>{
    state.atmoTimers=state.atmoTimers.filter(x=>x!==id);
    if(token===state.runToken&&state.started&&!state.paused&&!state.inIntermission)fn();
  },delay);
  state.atmoTimers.push(id);return id;
}

function init() {
  buildSanityBar();
  const settings=loadJSON("sinister-settings",{muted:false});
  state.muted=!!settings.muted;
  updateSoundLabel(); updateCodexCount(); updateEndlessBest();
  $$(".mode-btn").forEach(btn=>btn.addEventListener("click",()=>selectMode(btn)));
  $("#beginBtn").addEventListener("click",startGame);
  $("#backBtn").addEventListener("click",confirmExit);
  $("#pauseBtn").addEventListener("click",togglePause);
  $("#scoresBtn").addEventListener("click",showScores);
  $("#codexBtn").addEventListener("click",showCodex);
  $("#soundBtn").addEventListener("click",toggleSound);
  $("#modalClose").addEventListener("click",closeModal);
  $("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&state.started)togglePause();if(e.key.toLowerCase()==="m")toggleSound();});
}

function selectMode(btn) {
  state.mode=btn.dataset.mode||"normal";
  state.selectedPairs=state.mode==="normal" ? Number(btn.dataset.pairs) : 0;
  $$(".mode-btn").forEach(b=>b.classList.toggle("selected",b===btn));
  $("#beginBtn").disabled=false;
  $("#beginBtn").textContent=state.mode==="endless"?"ENTER THE ENDLESS":"BEGIN THE RITUAL";
  tone(state.mode==="endless"?74:130,.09,"sine",.04);
}
function showScreen(id) { $$(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active"); }

function resetRun() {
  state.runToken++;
  stopTimer(); stopAmbient(); stopAtmosphere(); closeModal();
  Object.assign(state,{deck:[],first:null,second:null,lock:true,matched:0,moves:0,roundMoves:0,sanity:100,score:0,seconds:0,paused:false,started:true,round:1,clearedRounds:0,combo:1,streak:0,bestCombo:1,totalMatches:0,usedCardIds:[],rules:null,runSaved:false,inIntermission:false,lastActionAt:Date.now(),roundMistakes:0,mismatchesSinceShuffle:0});
  document.body.classList.remove("madness","distortion-1","distortion-2","distortion-3","light-flicker");
}

function startGame() {
  ensureAudio(); resetRun();
  if(state.mode==="endless") prepareEndlessRound(true);
  else { state.pairs=state.selectedPairs||10; prepareNormalRound(); }
}

function prepareNormalRound() {
  state.rules={damage:state.pairs===20?5:8,shuffleChance:.28,preview:1650+state.pairs*18,decay:1,name:"THE FORBIDDEN DECK",text:"The deck is watching."};
  state.deck=makeDeck(state.pairs,false);
  setupRound("The seals weaken. Memorize what you see.");
}

function getEndlessRules(round) {
  const curse=ENDLESS_CURSES[(round-1)%ENDLESS_CURSES.length];
  const pairs=ENDLESS_PAIR_CURVE[Math.min(round-1,ENDLESS_PAIR_CURVE.length-1)];
  const baseDamage=4+Math.floor((round-1)/3);
  const baseShuffle=round<=2?0:Math.min(.30,(round-2)*.04);
  const shuffleChance=round<=2?0:Math.min(.38,baseShuffle+curse.shuffleBonus);
  const shuffleGrace=round<=2?99:round===3?3:round===4?2:round<=6?1:0;
  const shuffleCooldown=round<=4?3:round<=8?2:1;
  const shuffleCount=round<=4?4:round<=6?6:round<=8?10:999;
  const preview=Math.max(900,2650-(round-1)*150-curse.previewCut);
  let text=curse.text;
  if(round===1)text="Training seal: cards cannot move and mistakes deal reduced damage.";
  else if(round===2)text="The deck is still sealed. Cards cannot move yet.";
  else if(round<=4)text+=` The first ${shuffleGrace} mistakes cannot move any cards.`;
  else if(shuffleCount<999)text+=` Only a few unbound cards can move at once.`;
  return {
    ...curse,pairs,text,
    damage:Math.min(12,baseDamage+curse.damage),
    shuffleChance,shuffleGrace,shuffleCooldown,shuffleCount,
    preview,
    decay:1+Math.floor((round-1)/5)+curse.decay
  };
}

function prepareEndlessRound(firstRound=false) {
  state.inIntermission=false; state.paused=false; state.lock=true;
  state.rules=getEndlessRules(state.round); state.pairs=state.rules.pairs;
  state.matched=0; state.roundMoves=0; state.first=null; state.second=null; state.streak=0; state.combo=1; state.roundMistakes=0; state.mismatchesSinceShuffle=0;
  state.deck=makeDeck(state.pairs,true);
  setupRound(`Round ${state.round}: ${state.rules.name}. Memorize the deck.`);
  if(!firstRound) toast(`ROUND ${state.round} — ${state.rules.name}`);
}

function makeDeck(pairCount,usePool) {
  const chosen=[];
  if(!usePool) chosen.push(...shuffle([...CARDS]).slice(0,pairCount));
  else {
    while(chosen.length<pairCount) {
      let available=CARDS.filter(c=>!state.usedCardIds.includes(c.id)&&!chosen.some(x=>x.id===c.id));
      if(!available.length) { state.usedCardIds=[]; available=CARDS.filter(c=>!chosen.some(x=>x.id===c.id)); }
      const pick=available[Math.floor(Math.random()*available.length)];
      chosen.push(pick); state.usedCardIds.push(pick.id);
    }
  }
  return shuffle(chosen.flatMap(card=>[{...card,uid:`${card.id}a-r${state.round}`},{...card,uid:`${card.id}b-r${state.round}`}]))
}

function setupRound(message) {
  renderBoard(); updateHUD(); showScreen("#gameScreen");
  $("#gameScreen").classList.toggle("endless-mode",state.mode==="endless");
  $("#endlessBanner").hidden=state.mode!=="endless";
  setStatus(message); state.lastActionAt=Date.now(); startAmbient(); startAtmosphere();
  later(()=>{$$(".memory-card").forEach(c=>c.classList.add("flipped"));tone(74,.35,"sine",.06);},150);
  later(()=>{$$(".memory-card").forEach(c=>c.classList.remove("flipped"));state.lock=false;if(!state.timer)startTimer();setStatus(state.mode==="endless"?state.rules.text:"The deck is watching.");},state.rules.preview);
}

function renderBoard() {
  const board=$("#board"); board.innerHTML=""; updateBoardColumns();
  state.deck.forEach(card=>{
    const btn=document.createElement("button");
    btn.className="memory-card";btn.dataset.id=card.id;btn.dataset.uid=card.uid;btn.setAttribute("aria-label","Hidden cursed card");
    btn.innerHTML=`<span class="card-face card-back"><img src="${CARD_BACK}" alt="Card back" draggable="false"></span><span class="card-face card-front"><img src="${card.image}" alt="${escapeHTML(card.name)}" draggable="false"></span>`;
    btn.addEventListener("click",()=>flipCard(btn,card));board.appendChild(btn);
  });
}

function flipCard(el,card) {
  if(state.lock||state.paused||el.classList.contains("flipped")||el.classList.contains("matched"))return;
  ensureAudio();state.lastActionAt=Date.now();el.classList.add("flipped");el.setAttribute("aria-label",card.name);tone(170+Math.random()*60,.08,"triangle",.035);
  if(!state.first){state.first={el,card};return;}
  state.second={el,card};state.moves++;state.roundMoves++;state.lock=true;updateHUD();
  if(state.first.card.id===state.second.card.id) later(handleMatch,430);else later(handleMismatch,720);
}

function handleMatch() {
  if(state.paused){later(handleMatch,180);return;}
  if(!state.first||!state.second)return;
  [state.first.el,state.second.el].forEach(e=>e.classList.add("matched"));
  const card=state.first.card;state.matched++;state.totalMatches++;
  if(state.mode==="endless") {
    state.streak++;const oldCombo=state.combo;state.combo=Math.min(5,1+Math.floor(state.streak/2));state.bestCombo=Math.max(state.bestCombo,state.combo);
    const base=360+state.round*35;const speed=Math.max(20,150-state.roundMoves*4);state.score+=Math.round((base+speed+state.sanity*2)*state.combo);
    if(state.combo>oldCombo) animateCombo();
  } else {
    const timeBonus=Math.max(25,150-state.seconds);const sanityBonus=Math.round(state.sanity*1.3);state.score+=500+timeBonus+sanityBonus;
  }
  unlockCard(card.id);chord([220,330,440],.25,.025);setStatus(`${card.name} has been bound.`);showLoreToast(card);
  clearPick();updateHUD();
  if(state.matched===state.pairs) later(state.mode==="endless"?completeEndlessRound:winGame,650);
}

function handleMismatch() {
  if(state.paused){later(handleMismatch,180);return;}
  if(!state.first||!state.second)return;
  const pair=[state.first.el,state.second.el];pair.forEach(e=>e.classList.add("wrong"));
  state.streak=0;state.combo=1;
  if(state.mode==="endless"){state.roundMistakes++;state.mismatchesSinceShuffle++;}
  const damage=state.mode==="endless"?state.rules.damage:(state.pairs===20?5:8);
  state.sanity=Math.max(0,state.sanity-damage);state.score=Math.max(0,state.score-(state.mode==="endless"?100+state.round*12:75));
  updateAtmosphereIntensity();curseEffect();
  later(()=>{pair.forEach(e=>e.classList.remove("flipped","wrong"));clearPick();updateHUD();if(state.sanity<=0)loseGame();},380);
}
function clearPick(){state.first=null;state.second=null;state.lock=false;}

function curseEffect() {
  tone(52,.42,"sawtooth",.05);$("#app").classList.add("shake");$("#flash").classList.add("flash");
  later(()=>{$("#app").classList.remove("shake");$("#flash").classList.remove("flash");},450);
  triggerWhisper(true);
  if(state.sanity<=55)document.body.classList.add("madness");
  if(state.mode==="endless") {
    const r=state.rules;
    const beyondGrace=state.roundMistakes>r.shuffleGrace;
    const cooldownReady=state.mismatchesSinceShuffle>=r.shuffleCooldown;
    if(r.shuffleChance>0&&beyondGrace&&cooldownReady&&Math.random()<r.shuffleChance){
      state.mismatchesSinceShuffle=0;
      later(()=>shuffleUnmatched(r.shuffleCount),500);
    }
  } else if(state.sanity<=70&&Math.random()<.28) later(()=>shuffleUnmatched(999),500);
}
function shuffleUnmatched(limit=999) {
  if(state.matched===state.pairs||!state.started)return;
  const board=$("#board"),children=[...board.children],free=children.filter(e=>!e.classList.contains("matched"));
  if(free.length<2)return;
  const count=Math.min(free.length,Math.max(2,limit));
  const targets=shuffle([...free]).slice(0,count);
  let moved=shuffle([...targets]);
  if(moved.every((el,i)=>el===targets[i]))moved=[...moved.slice(1),moved[0]];
  const replacements=new Map(targets.map((el,i)=>[el,moved[i]]));
  children.map(el=>replacements.get(el)||el).forEach(el=>board.appendChild(el));
  toast(count<free.length?"A FEW UNBOUND CARDS HAVE MOVED":"THE UNBOUND CARDS HAVE MOVED");
}

function completeEndlessRound() {
  state.lock=true;state.paused=true;state.inIntermission=true;stopAmbient();stopAtmosphere();state.clearedRounds=state.round;
  const efficiency=Math.max(0,state.pairs*3-state.roundMoves);
  const recoveryBase=state.round<=3?12:8;
  const recoveryCap=state.round<=3?24:20;
  const recovery=Math.min(recoveryCap,recoveryBase+Math.floor(efficiency/3)+state.combo);
  const before=state.sanity;state.sanity=Math.min(100,state.sanity+recovery);
  const roundBonus=state.round*900+state.sanity*12+efficiency*35;state.score+=roundBonus;updateHUD();updateEndlessBestPreview();
  const nextRules=getEndlessRules(state.round+1);chord([196,247,294,392],.55,.03);
  showModal(`<p class="kicker">ROUND ${state.round} CLEARED</p><h2>DESCEND<br><span>DEEPER</span></h2><p>The deck restores ${state.sanity-before} sanity, then opens another seal.</p><div class="result-grid"><div><small>ROUND BONUS</small><strong>+${roundBonus}</strong></div><div><small>SANITY</small><strong>${state.sanity}%</strong></div><div><small>BEST COMBO</small><strong>×${state.bestCombo}</strong></div></div><p class="kicker">NEXT CURSE — ${nextRules.name}</p><p>${nextRules.text} The next chamber contains ${nextRules.pairs} pairs.</p><div class="modal-buttons"><button class="primary-btn" onclick="advanceEndless()">ENTER ROUND ${state.round+1}</button><button class="text-btn" onclick="abandonEndlessRun()">END RUN</button></div>`,false);
}

function advanceEndless() {
  if(!state.started||state.mode!=="endless")return;
  state.round++;state.runToken++;closeModal();prepareEndlessRound(false);
}

function updateHUD() {
  $("#timeText").textContent=formatTime(state.seconds);$("#movesText").textContent=state.moves;$("#matchText").textContent=state.matched;$("#pairText").textContent=state.pairs;$("#scoreText").textContent=Math.max(0,Math.round(state.score));$("#sanityText").textContent=state.sanity+"%";
  $("#roundText").textContent=state.round;$("#comboText").textContent=`×${state.combo}`;
  if(state.rules&&state.mode==="endless"){$("#modifierName").textContent=`ROUND ${state.round} — ${state.rules.name}`;$("#modifierText").textContent=state.rules.text;}
  const on=Math.ceil(state.sanity/5);$$(".sanity-segment").forEach((s,i)=>s.classList.toggle("on",i<on));$("#sanityBar").classList.toggle("low",state.sanity<=35);updateAtmosphereIntensity();
}
function animateCombo(){const e=$("#comboText");e.classList.remove("combo-rise");void e.offsetWidth;e.classList.add("combo-rise");tone(520+state.combo*70,.13,"sine",.025);}
function buildSanityBar(){$("#sanityBar").innerHTML=Array.from({length:20},()=>'<span class="sanity-segment on"></span>').join("");}
function startTimer(){stopTimer();state.timer=setInterval(()=>{if(!state.paused){state.seconds++;const decay=state.mode==="endless"?(state.rules?.decay||1):1;state.score=Math.max(0,state.score-decay);updateHUD();}},1000);}
function stopTimer(){clearInterval(state.timer);state.timer=null;}
function setStatus(t){$("#statusLine").textContent=t;}

function winGame() {
  state.started=false;stopTimer();stopAmbient();stopAtmosphere();state.score+=Math.max(0,state.sanity*10-state.seconds*2);updateHUD();saveScore();chord([220,277,330,440],.8,.035);
  showModal(`<p class="kicker">RITUAL COMPLETE</p><h2>THE DECK<br><span>FALLS SILENT</span></h2><p>You bound all ${state.pairs} pairs before the void consumed your mind.</p><div class="result-grid"><div><small>SCORE</small><strong>${Math.round(state.score)}</strong></div><div><small>TIME</small><strong>${formatTime(state.seconds)}</strong></div><div><small>SANITY</small><strong>${state.sanity}%</strong></div></div><div class="modal-buttons"><button class="primary-btn" onclick="startGame()">PLAY AGAIN</button><button class="text-btn" onclick="goMenu()">MAIN MENU</button></div>`);
}
function loseGame() {
  if(state.mode==="endless"){finishEndlessRun("SANITY DEPLETED","The endless deck has learned your name.");return;}
  state.started=false;stopTimer();stopAmbient();stopAtmosphere();tone(38,1.3,"sawtooth",.07);
  showModal(`<p class="kicker">SANITY DEPLETED</p><h2>YOU HAVE BEEN<br><span>REMEMBERED</span></h2><p>The deck remains open. Something on the other side now knows your name.</p><div class="result-grid"><div><small>PAIRS</small><strong>${state.matched}/${state.pairs}</strong></div><div><small>TIME</small><strong>${formatTime(state.seconds)}</strong></div><div><small>SCORE</small><strong>${Math.round(state.score)}</strong></div></div><div class="modal-buttons"><button class="primary-btn" onclick="startGame()">TRY AGAIN</button><button class="text-btn" onclick="goMenu()">MAIN MENU</button></div>`);
}
function saveScore(){const all=loadJSON("sinister-scores",{}),key=String(state.pairs),rows=all[key]||[];rows.push({score:Math.round(state.score),time:state.seconds,moves:state.moves,date:new Date().toLocaleDateString()});all[key]=rows.sort((a,b)=>b.score-a.score||a.time-b.time).slice(0,5);saveJSON("sinister-scores",all);}
function saveEndlessScore(reason){if(state.runSaved)return;state.runSaved=true;const all=loadJSON("sinister-scores",{}),rows=all.endless||[];rows.push({score:Math.round(state.score),time:state.seconds,moves:state.moves,round:state.round,cleared:state.clearedRounds,combo:state.bestCombo,reason,date:new Date().toLocaleDateString()});all.endless=rows.sort((a,b)=>b.cleared-a.cleared||b.score-a.score||a.time-b.time).slice(0,8);saveJSON("sinister-scores",all);updateEndlessBest();}
function updateEndlessBestPreview(){const current={cleared:state.clearedRounds,score:Math.round(state.score)};const stored=(loadJSON("sinister-scores",{}).endless||[])[0];if(!stored||current.cleared>stored.cleared||(current.cleared===stored.cleared&&current.score>stored.score))$("#endlessBest").textContent=`Current best: ${current.cleared} cleared`;}

function finishEndlessRun(title,description) {
  state.started=false;state.paused=false;state.lock=true;stopTimer();stopAmbient();stopAtmosphere();saveEndlessScore(title);tone(38,1.3,"sawtooth",.07);
  showModal(`<p class="kicker">ENDLESS RUN COMPLETE</p><h2>${escapeHTML(title)}<br><span>ROUND ${state.round}</span></h2><p>${escapeHTML(description)}</p><div class="result-grid"><div><small>ROUNDS CLEARED</small><strong>${state.clearedRounds}</strong></div><div><small>SCORE</small><strong>${Math.round(state.score)}</strong></div><div><small>BEST COMBO</small><strong>×${state.bestCombo}</strong></div></div><p>${state.moves} moves · ${formatTime(state.seconds)} survived · ${state.totalMatches} pairs bound</p><div class="modal-buttons"><button class="primary-btn" onclick="startGame()">NEW RUN</button><button class="text-btn" onclick="goMenu()">MAIN MENU</button></div>`,false);
}
function abandonEndlessRun(){finishEndlessRun("RUN ABANDONED","You close the deck before it closes around you.");}

function togglePause() {
  if(!state.started||state.inIntermission)return;
  if(state.paused){state.paused=false;closeModal();state.lock=false;startAmbient();startAtmosphere();setStatus("The ritual continues.");}
  else{state.paused=true;state.lock=true;stopAmbient();stopAtmosphere();showModal(`<p class="kicker">RITUAL SUSPENDED</p><h2>THE VOID<br><span>IS PATIENT</span></h2><p>The cards will remain where you left them. For now.</p><div class="modal-buttons"><button class="primary-btn" onclick="togglePause()">CONTINUE</button><button class="text-btn" onclick="${state.mode==="endless"?"abandonEndlessRun()":"goMenu()"}">ABANDON</button></div>`,false);}
}
function confirmExit() {
  if(!state.started){goMenu();return;}
  if(state.inIntermission){abandonEndlessRun();return;}
  state.paused=true;state.lock=true;stopAmbient();stopAtmosphere();
  showModal(`<p class="kicker">BREAK THE CIRCLE?</p><h2>ABANDON<br><span>${state.mode==="endless"?"THE RUN":"THE RITUAL"}</span></h2><p>${state.mode==="endless"?"Your completed rounds will be recorded.":"Your current run will be lost."}</p><div class="modal-buttons"><button class="primary-btn" onclick="togglePause()">STAY</button><button class="text-btn" onclick="${state.mode==="endless"?"abandonEndlessRun()":"goMenu()"}">LEAVE</button></div>`,false);
}
function goMenu(){state.runToken++;state.started=false;state.paused=false;state.inIntermission=false;stopTimer();stopAmbient();stopAtmosphere();closeModal();document.body.classList.remove("madness","distortion-1","distortion-2","distortion-3","light-flicker");$("#gameScreen").classList.remove("endless-mode");showScreen("#menuScreen");updateCodexCount();updateEndlessBest();}

function showScores() {
  const all=loadJSON("sinister-scores",{});let html='<p class="kicker">RECORDS OF THE LOST</p><h2>HIGH <span>SCORES</span></h2>';
  [5,10,20].forEach(p=>{const rows=all[String(p)]||[];html+=`<h3>${p} PAIRS</h3><ol class="score-list">${rows.length?rows.map((r,i)=>`<li><b>#${i+1}</b><span>${r.score} pts<br><small>${r.moves} moves · ${r.date}</small></span><strong>${formatTime(r.time)}</strong></li>`).join(""):'<li><small>No survivor recorded.</small></li>'}</ol>`;});
  const endless=all.endless||[];html+=`<h3>∞ ENDLESS</h3><ol class="score-list">${endless.length?endless.map((r,i)=>`<li><b>#${i+1}</b><span>Round ${r.round} · ${r.score} pts<br><small>${r.cleared} cleared · combo ×${r.combo||1} · ${r.date}</small></span><strong>${formatTime(r.time)}</strong></li>`).join(""):'<li><small>No descent recorded.</small></li>'}</ol>`;showModal(html);
}
function updateEndlessBest(){const best=(loadJSON("sinister-scores",{}).endless||[])[0];$("#endlessBest").textContent=best?`Best: ${best.cleared} rounds · ${best.score} pts`:"Survive the descent";}
function unlockCard(id){const u=loadJSON("sinister-unlocked",[]);if(!u.includes(id)){u.push(id);saveJSON("sinister-unlocked",u);updateCodexCount();}}
function updateCodexCount(){$("#codexCount").textContent=`${loadJSON("sinister-unlocked",[]).length}/${CARDS.length}`;}
function showCodex(){const unlocked=loadJSON("sinister-unlocked",[]),entries=CARDS.map(c=>unlocked.includes(c.id)?`<button class="codex-entry" onclick="showCardLore(${c.id})"><img src="${c.image}" alt=""><span>${escapeHTML(c.name)}</span></button>`:`<div class="codex-entry locked"><img src="${CARD_BACK}" alt=""><span>UNKNOWN ENTITY</span></div>`).join("");showModal(`<p class="kicker">DISCOVERED ${unlocked.length} OF ${CARDS.length}</p><h2>CURSED <span>CODEX</span></h2><p>Every matched pair reveals another fragment of the forbidden deck.</p><div class="codex-grid">${entries}</div>`);}
function showCardLore(id){const c=CARDS.find(x=>x.id===id);if(!c)return;showModal(`<div class="lore-preview"><img src="${c.image}" alt="${escapeHTML(c.name)}"><div><span class="rarity">${c.rarity}</span><h2>${escapeHTML(c.name)}</h2><p>${escapeHTML(c.lore)}</p></div></div><div class="modal-buttons"><button class="text-btn" onclick="showCodex()">BACK TO CODEX</button></div>`);}
function showLoreToast(card){toast(`CODEX UNLOCKED: ${card.name}`);}

function showModal(html,closable=true){$("#modalContent").innerHTML=html;$("#modal").classList.remove("hidden");$("#modalClose").style.display=closable?"block":"none";}
function closeModal(){$("#modal").classList.add("hidden");}
function toast(text){const t=$("#toast");t.textContent=text;t.classList.add("show");clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove("show"),1800);}


function terrorLevel(){
  const sanityT=(100-state.sanity)/100;
  const depthT=state.mode==="endless"?Math.min(.72,(state.round-1)*.055):0;
  return Math.max(0,Math.min(1,Math.max(sanityT,depthT)));
}
function updateAtmosphereIntensity(){
  const t=terrorLevel();document.documentElement.style.setProperty("--terror",t.toFixed(2));
  document.body.classList.toggle("distortion-1",t>=.22&&t<.48);
  document.body.classList.toggle("distortion-2",t>=.48&&t<.74);
  document.body.classList.toggle("distortion-3",t>=.74);
  if(t<.45)document.body.classList.remove("madness");else document.body.classList.add("madness");
}
function startAtmosphere(){
  stopAtmosphere();if(!state.started||state.paused||state.inIntermission)return;
  updateAtmosphereIntensity();scheduleHeartbeat();scheduleWhisper();scheduleApparition();scheduleCardHaunt();scheduleFlicker();scheduleHorrorStatus();
}
function stopAtmosphere(){
  (state.atmoTimers||[]).forEach(clearTimeout);state.atmoTimers=[];
  document.body.classList.remove("light-flicker");
  const a=$("#apparition"),g=$("#screenGlitch");if(a)a.classList.remove("cross-left","cross-right");if(g)g.classList.remove("active");
}
function scheduleHeartbeat(){
  const t=terrorLevel(),delay=Math.round(1900-t*1260+Math.random()*180);
  atmoLater(()=>{playHeartbeat(t);scheduleHeartbeat();},delay);
}
function playHeartbeat(t){
  const pulse=$("#darkPulse");pulse.classList.remove("beat");void pulse.offsetWidth;pulse.classList.add("beat");
  if(state.muted)return;
  const volume=.005+t*.024;tone(58-t*10,.11,"sine",volume);setTimeout(()=>tone(48-t*7,.14,"sine",volume*.72),145);
}
function scheduleWhisper(){
  const t=terrorLevel(),delay=7600-t*4000+Math.random()*(6500-t*2500);
  atmoLater(()=>{triggerWhisper(t>.42||Math.random()<.46);scheduleWhisper();},Math.max(3100,delay));
}
function triggerWhisper(forceVisual=false){
  const w=whispers[Math.floor(Math.random()*whispers.length)];playWhisperSound();
  if(forceVisual){const e=$("#whisper");e.textContent=w;e.classList.remove("show");void e.offsetWidth;e.classList.add("show");setStatus(w);}
}
function playWhisperSound(){
  if(state.muted)return;ensureAudio();if(!state.audio)return;
  const ctx=state.audio,duration=.75+Math.random()*.65,buffer=ctx.createBuffer(1,Math.floor(ctx.sampleRate*duration),ctx.sampleRate),data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++){const x=i/data.length,env=Math.sin(Math.PI*x)**1.6;data[i]=(Math.random()*2-1)*env*(.32+.68*Math.sin(i*.013)**2);}
  const src=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain();src.buffer=buffer;filter.type="bandpass";filter.frequency.value=620+Math.random()*720;filter.Q.value=.7+Math.random()*1.3;gain.gain.value=.008+terrorLevel()*.021;
  src.connect(filter);if(ctx.createStereoPanner){const pan=ctx.createStereoPanner();pan.pan.value=Math.random()*1.8-.9;filter.connect(pan).connect(gain);}else filter.connect(gain);gain.connect(ctx.destination);src.start();
}
function scheduleApparition(){
  const t=terrorLevel(),delay=10500-t*5700+Math.random()*(9000-t*3500);
  atmoLater(()=>{triggerApparition();scheduleApparition();},Math.max(4300,delay));
}
function triggerApparition(){
  const a=$("#apparition"),side=Math.random()<.5?"cross-left":"cross-right";a.classList.remove("cross-left","cross-right");void a.offsetWidth;a.classList.add(side);atmoLater(()=>a.classList.remove(side),3700);
}
function scheduleCardHaunt(){
  const t=terrorLevel(),delay=5200-t*2800+Math.random()*(5900-t*2500);
  atmoLater(()=>{hauntRandomCard();scheduleCardHaunt();},Math.max(2100,delay));
}
function hauntRandomCard(){
  const candidates=$$(".memory-card:not(.matched):not(.flipped)");if(!candidates.length)return;
  const card=candidates[Math.floor(Math.random()*candidates.length)],watch=terrorLevel()>.36&&Math.random()<.58;
  card.classList.remove("twitch","watching");void card.offsetWidth;card.classList.add("twitch");if(watch)card.classList.add("watching");
  atmoLater(()=>card.classList.remove("twitch","watching"),1250);
}
function scheduleFlicker(){
  const t=terrorLevel(),delay=t<.28?11000:6200-t*2800+Math.random()*6000;
  atmoLater(()=>{if(terrorLevel()>.26)triggerFlicker();scheduleFlicker();},Math.max(3400,delay));
}
function triggerFlicker(){
  document.body.classList.remove("light-flicker");void document.body.offsetWidth;document.body.classList.add("light-flicker");
  const g=$("#screenGlitch");if(terrorLevel()>.52){g.classList.remove("active");void g.offsetWidth;g.classList.add("active");}
  atmoLater(()=>{document.body.classList.remove("light-flicker");g.classList.remove("active");},800);
}
function scheduleHorrorStatus(){
  atmoLater(()=>{setPerformanceHorror();scheduleHorrorStatus();},7000+Math.random()*6500);
}
function setPerformanceHorror(){
  const idle=(Date.now()-state.lastActionAt)/1000,t=terrorLevel();let lines;
  if(idle>12)lines=["The deck is growing impatient.","Something moved while you hesitated.","Silence is also a choice."];
  else if(state.sanity<=25)lines=["Something is breathing behind you.","Your pulse no longer matches your body.","The cards are almost finished with you."];
  else if(state.mode==="endless"&&state.round>=5)lines=[`Round ${state.round} has seen you before.`,"The lower seals know your pattern.","There is no bottom to this deck."];
  else if(state.streak>=5)lines=["The deck recoils from your memory.","It hates being understood.","Do not become confident."];
  else if(state.moves>state.pairs*2.5&&state.matched<state.pairs/2)lines=["It enjoys watching you forget.","Every mistake gives it another shape.","Your memory is becoming its memory."];
  else lines=t>.42?["The room feels smaller now.","A face vanished when you blinked.","The cards whisper between turns."]:["The deck is listening.","A cold shape passes beyond the table.","The ritual has noticed you."];
  setStatus(lines[Math.floor(Math.random()*lines.length)]);
}

function ensureAudio(){if(state.muted)return;if(!state.audio)state.audio=new (window.AudioContext||window.webkitAudioContext)();if(state.audio.state==="suspended")state.audio.resume();}
function tone(freq,duration,type="sine",volume=.03){if(state.muted)return;ensureAudio();if(!state.audio)return;const o=state.audio.createOscillator(),g=state.audio.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(volume,state.audio.currentTime);g.gain.exponentialRampToValueAtTime(.0001,state.audio.currentTime+duration);o.connect(g).connect(state.audio.destination);o.start();o.stop(state.audio.currentTime+duration);}
function chord(notes,d=.3,v=.02){notes.forEach((n,i)=>setTimeout(()=>tone(n,d,"sine",v),i*55));}
function startAmbient(){if(state.muted||state.ambient)return;ensureAudio();if(!state.audio)return;const o=state.audio.createOscillator(),g=state.audio.createGain(),lfo=state.audio.createOscillator(),lg=state.audio.createGain();o.type="sine";o.frequency.value=43;g.gain.value=.012;lfo.frequency.value=.09;lg.gain.value=.007;lfo.connect(lg).connect(g.gain);o.connect(g).connect(state.audio.destination);o.start();lfo.start();state.ambient={o,lfo};}
function stopAmbient(){if(!state.ambient)return;try{state.ambient.o.stop();state.ambient.lfo.stop();}catch{}state.ambient=null;}
function toggleSound(){state.muted=!state.muted;saveJSON("sinister-settings",{muted:state.muted});if(state.muted)stopAmbient();else{ensureAudio();if(state.started&&!state.paused)startAmbient();tone(220,.1);}updateSoundLabel();}
function updateSoundLabel(){$("#soundBtn").textContent=`SOUND: ${state.muted?"OFF":"ON"}`;}

function updateBoardColumns(){
  const count=state.pairs*2;
  const mobile={10:5,12:4,16:4,20:5,24:4,28:4,32:4,36:4,40:5};
  const desktop={10:5,12:6,16:8,20:10,24:8,28:7,32:8,36:9,40:10};
  const cols=(innerWidth<650?mobile[count]:desktop[count])||(innerWidth<650?5:10);
  $("#board").style.setProperty("--cols",cols);
}

window.startGame=startGame;window.goMenu=goMenu;window.togglePause=togglePause;window.showCodex=showCodex;window.showCardLore=showCardLore;window.advanceEndless=advanceEndless;window.abandonEndlessRun=abandonEndlessRun;
addEventListener("resize",()=>{if(state.started)updateBoardColumns();});
init();
