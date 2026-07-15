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
const state = { pairs: 0, deck: [], first: null, second: null, lock: false, matched: 0, moves: 0, sanity: 100, score: 0, seconds: 0, timer: null, paused: false, started: false, muted: false, audio: null, ambient: null };
const whispers = ["Do not turn around.", "It remembers you.", "One of them moved.", "Your hands are not your own.", "You have opened this before.", "Let me out."];

function loadJSON(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function saveJSON(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
function shuffle(a) { for (let i=a.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function formatTime(s) { return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`; }
function escapeHTML(s) { return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

function init() {
  buildSanityBar();
  const settings = loadJSON("sinister-settings", { muted:false }); state.muted=!!settings.muted; updateSoundLabel(); updateCodexCount();
  $$(".mode-btn").forEach(btn=>btn.addEventListener("click",()=>selectMode(+btn.dataset.pairs)));
  $("#beginBtn").addEventListener("click", startGame);
  $("#backBtn").addEventListener("click", confirmExit);
  $("#pauseBtn").addEventListener("click", togglePause);
  $("#scoresBtn").addEventListener("click", showScores);
  $("#codexBtn").addEventListener("click", showCodex);
  $("#soundBtn").addEventListener("click", toggleSound);
  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&state.started)togglePause(); if(e.key.toLowerCase()==="m")toggleSound();});
}

function selectMode(pairs) {
  state.pairs=pairs; $$(".mode-btn").forEach(b=>b.classList.toggle("selected",+b.dataset.pairs===pairs)); $("#beginBtn").disabled=false; tone(130,.07,"sine",.04);
}
function showScreen(id) { $$(".screen").forEach(s=>s.classList.remove("active")); $(id).classList.add("active"); }

function startGame() {
  ensureAudio(); closeModal(); stopTimer();
  Object.assign(state,{deck:[],first:null,second:null,lock:true,matched:0,moves:0,sanity:100,score:0,seconds:0,paused:false,started:true});
  document.body.classList.remove("madness");
  const chosen=shuffle([...CARDS]).slice(0,state.pairs);
  state.deck=shuffle(chosen.flatMap(card=>[{...card,uid:`${card.id}a`},{...card,uid:`${card.id}b`}]));
  renderBoard(); updateHUD(); showScreen("#gameScreen"); setStatus("The seals weaken. Memorize what you see."); startAmbient();
  setTimeout(()=>{$$(".memory-card").forEach(c=>c.classList.add("flipped")); tone(74,.35,"sine",.06);},150);
  setTimeout(()=>{$$(".memory-card").forEach(c=>c.classList.remove("flipped")); state.lock=false; startTimer(); setStatus("The deck is watching.");},1650 + state.pairs*18);
}

function renderBoard() {
  const board=$("#board"); board.innerHTML="";
  const count=state.pairs*2;
  const cols = count<=10 ? 5 : count<=20 ? (innerWidth<650?5:10) : (innerWidth<650?5:10);
  board.style.setProperty("--cols",cols);
  state.deck.forEach(card=>{
    const btn=document.createElement("button"); btn.className="memory-card"; btn.dataset.id=card.id; btn.dataset.uid=card.uid; btn.setAttribute("aria-label","Hidden cursed card");
    btn.innerHTML=`<span class="card-face card-back"><img src="${CARD_BACK}" alt="Card back" draggable="false"></span><span class="card-face card-front"><img src="${card.image}" alt="${escapeHTML(card.name)}" draggable="false"></span>`;
    btn.addEventListener("click",()=>flipCard(btn,card)); board.appendChild(btn);
  });
}

function flipCard(el,card) {
  if(state.lock||state.paused||el.classList.contains("flipped")||el.classList.contains("matched"))return;
  ensureAudio(); el.classList.add("flipped"); el.setAttribute("aria-label",card.name); tone(170+Math.random()*60,.08,"triangle",.035);
  if(!state.first){state.first={el,card};return;}
  state.second={el,card}; state.moves++; state.lock=true; updateHUD();
  if(state.first.card.id===state.second.card.id) setTimeout(handleMatch,430); else setTimeout(handleMismatch,720);
}

function handleMatch() {
  [state.first.el,state.second.el].forEach(e=>e.classList.add("matched")); const card=state.first.card;
  state.matched++; const timeBonus=Math.max(25,150-state.seconds); const sanityBonus=Math.round(state.sanity*1.3); state.score += 500+timeBonus+sanityBonus;
  unlockCard(card.id); chord([220,330,440],.25,.025); setStatus(`${card.name} has been bound.`); showLoreToast(card);
  clearPick(); updateHUD(); if(state.matched===state.pairs)setTimeout(winGame,650);
}
function handleMismatch() {
  const pair=[state.first.el,state.second.el]; pair.forEach(e=>e.classList.add("wrong")); state.sanity=Math.max(0,state.sanity-(state.pairs===20?5:8)); state.score=Math.max(0,state.score-75);
  curseEffect(); setTimeout(()=>{pair.forEach(e=>e.classList.remove("flipped","wrong")); clearPick(); updateHUD(); if(state.sanity<=0)loseGame();},380);
}
function clearPick() {state.first=null;state.second=null;state.lock=false;}

function curseEffect() {
  tone(52,.42,"sawtooth",.05); $("#app").classList.add("shake"); $("#flash").classList.add("flash"); setTimeout(()=>{$("#app").classList.remove("shake");$("#flash").classList.remove("flash");},450);
  const w=whispers[Math.floor(Math.random()*whispers.length)]; $("#whisper").textContent=w; $("#whisper").classList.remove("show"); void $("#whisper").offsetWidth; $("#whisper").classList.add("show"); setStatus(w);
  if(state.sanity<=55)document.body.classList.add("madness");
  if(state.sanity<=70 && Math.random()<.28) setTimeout(shuffleUnmatched,500);
}
function shuffleUnmatched() {
  if(state.matched===state.pairs)return; const board=$("#board"); const free=$$(".memory-card:not(.matched)"); const slots=free.map(e=>e.nextSibling); shuffle(free).forEach((el,i)=>board.insertBefore(el,slots[i]||null)); toast("THE UNBOUND CARDS HAVE MOVED");
}

function updateHUD() {
  $("#timeText").textContent=formatTime(state.seconds); $("#movesText").textContent=state.moves; $("#matchText").textContent=state.matched; $("#pairText").textContent=state.pairs; $("#scoreText").textContent=Math.max(0,state.score); $("#sanityText").textContent=state.sanity+"%";
  const on=Math.ceil(state.sanity/5); $$(".sanity-segment").forEach((s,i)=>s.classList.toggle("on",i<on)); $("#sanityBar").classList.toggle("low",state.sanity<=35);
}
function buildSanityBar() { $("#sanityBar").innerHTML=Array.from({length:20},()=>'<span class="sanity-segment on"></span>').join(""); }
function startTimer() {stopTimer();state.timer=setInterval(()=>{if(!state.paused){state.seconds++;state.score=Math.max(0,state.score-1);updateHUD();}},1000);}
function stopTimer() {clearInterval(state.timer);state.timer=null;}
function setStatus(t) {$("#statusLine").textContent=t;}

function winGame() {
  state.started=false;stopTimer();stopAmbient(); state.score+=Math.max(0,state.sanity*10-state.seconds*2);updateHUD();saveScore();chord([220,277,330,440],.8,.035);
  showModal(`<p class="kicker">RITUAL COMPLETE</p><h2>THE DECK<br><span>FALLS SILENT</span></h2><p>You bound all ${state.pairs} pairs before the void consumed your mind.</p><div class="result-grid"><div><small>SCORE</small><strong>${state.score}</strong></div><div><small>TIME</small><strong>${formatTime(state.seconds)}</strong></div><div><small>SANITY</small><strong>${state.sanity}%</strong></div></div><div class="modal-buttons"><button class="primary-btn" onclick="startGame()">PLAY AGAIN</button><button class="text-btn" onclick="goMenu()">MAIN MENU</button></div>`);
}
function loseGame() {
  state.started=false;stopTimer();stopAmbient();tone(38,1.3,"sawtooth",.07);
  showModal(`<p class="kicker">SANITY DEPLETED</p><h2>YOU HAVE BEEN<br><span>REMEMBERED</span></h2><p>The deck remains open. Something on the other side now knows your name.</p><div class="result-grid"><div><small>PAIRS</small><strong>${state.matched}/${state.pairs}</strong></div><div><small>TIME</small><strong>${formatTime(state.seconds)}</strong></div><div><small>SCORE</small><strong>${state.score}</strong></div></div><div class="modal-buttons"><button class="primary-btn" onclick="startGame()">TRY AGAIN</button><button class="text-btn" onclick="goMenu()">MAIN MENU</button></div>`);
}
function saveScore() {const all=loadJSON("sinister-scores",{});const key=String(state.pairs);const rows=all[key]||[];rows.push({score:state.score,time:state.seconds,moves:state.moves,date:new Date().toLocaleDateString()});all[key]=rows.sort((a,b)=>b.score-a.score||a.time-b.time).slice(0,5);saveJSON("sinister-scores",all);}

function togglePause() {
  if(!state.started)return; if(state.paused){state.paused=false;closeModal();state.lock=false;startAmbient();setStatus("The ritual continues.");}else{state.paused=true;state.lock=true;stopAmbient();showModal(`<p class="kicker">RITUAL SUSPENDED</p><h2>THE VOID<br><span>IS PATIENT</span></h2><p>The cards will remain where you left them. For now.</p><div class="modal-buttons"><button class="primary-btn" onclick="togglePause()">CONTINUE</button><button class="text-btn" onclick="goMenu()">ABANDON</button></div>`,false);}
}
function confirmExit() {if(!state.started){goMenu();return;} state.paused=true;state.lock=true;showModal(`<p class="kicker">BREAK THE CIRCLE?</p><h2>ABANDON<br><span>THE RITUAL</span></h2><p>Your current run will be lost.</p><div class="modal-buttons"><button class="primary-btn" onclick="togglePause()">STAY</button><button class="text-btn" onclick="goMenu()">LEAVE</button></div>`,false);}
function goMenu() {state.started=false;state.paused=false;stopTimer();stopAmbient();closeModal();document.body.classList.remove("madness");showScreen("#menuScreen");updateCodexCount();}

function showScores() {
  const all=loadJSON("sinister-scores",{});let html='<p class="kicker">RECORDS OF THE LOST</p><h2>HIGH <span>SCORES</span></h2>';
  [5,10,20].forEach(p=>{const rows=all[String(p)]||[];html+=`<h3>${p} PAIRS</h3><ol class="score-list">${rows.length?rows.map((r,i)=>`<li><b>#${i+1}</b><span>${r.score} pts<br><small>${r.moves} moves · ${r.date}</small></span><strong>${formatTime(r.time)}</strong></li>`).join(""):'<li><small>No survivor recorded.</small></li>'}</ol>`;});showModal(html);
}
function unlockCard(id) {const u=loadJSON("sinister-unlocked",[]);if(!u.includes(id)){u.push(id);saveJSON("sinister-unlocked",u);updateCodexCount();}}
function updateCodexCount() {$("#codexCount").textContent=`${loadJSON("sinister-unlocked",[]).length}/${CARDS.length}`;}
function showCodex() {
  const unlocked=loadJSON("sinister-unlocked",[]);const entries=CARDS.map(c=>unlocked.includes(c.id)?`<button class="codex-entry" onclick="showCardLore(${c.id})"><img src="${c.image}" alt=""><span>${escapeHTML(c.name)}</span></button>`:`<div class="codex-entry locked"><img src="${CARD_BACK}" alt=""><span>UNKNOWN ENTITY</span></div>`).join("");
  showModal(`<p class="kicker">DISCOVERED ${unlocked.length} OF ${CARDS.length}</p><h2>CURSED <span>CODEX</span></h2><p>Every matched pair reveals another fragment of the forbidden deck.</p><div class="codex-grid">${entries}</div>`);
}
function showCardLore(id) {const c=CARDS.find(x=>x.id===id);if(!c)return;showModal(`<div class="lore-preview"><img src="${c.image}" alt="${escapeHTML(c.name)}"><div><span class="rarity">${c.rarity}</span><h2>${escapeHTML(c.name)}</h2><p>${escapeHTML(c.lore)}</p></div></div><div class="modal-buttons"><button class="text-btn" onclick="showCodex()">BACK TO CODEX</button></div>`);}
function showLoreToast(card) {toast(`CODEX UNLOCKED: ${card.name}`);}

function showModal(html,closable=true) {$("#modalContent").innerHTML=html;$("#modal").classList.remove("hidden");$("#modalClose").style.display=closable?"block":"none";}
function closeModal() {$("#modal").classList.add("hidden");}
function toast(text) {const t=$("#toast");t.textContent=text;t.classList.add("show");clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove("show"),1800);}

function ensureAudio() {if(state.muted)return; if(!state.audio)state.audio=new (window.AudioContext||window.webkitAudioContext)();if(state.audio.state==="suspended")state.audio.resume();}
function tone(freq,duration,type="sine",volume=.03) {if(state.muted)return;ensureAudio();if(!state.audio)return;const o=state.audio.createOscillator(),g=state.audio.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(volume,state.audio.currentTime);g.gain.exponentialRampToValueAtTime(.0001,state.audio.currentTime+duration);o.connect(g).connect(state.audio.destination);o.start();o.stop(state.audio.currentTime+duration);}
function chord(notes,d=.3,v=.02) {notes.forEach((n,i)=>setTimeout(()=>tone(n,d,"sine",v),i*55));}
function startAmbient() {if(state.muted||state.ambient)return;ensureAudio();if(!state.audio)return;const o=state.audio.createOscillator(),g=state.audio.createGain(),lfo=state.audio.createOscillator(),lg=state.audio.createGain();o.type="sine";o.frequency.value=43;g.gain.value=.012;lfo.frequency.value=.09;lg.gain.value=.007;lfo.connect(lg).connect(g.gain);o.connect(g).connect(state.audio.destination);o.start();lfo.start();state.ambient={o,lfo};}
function stopAmbient() {if(!state.ambient)return;try{state.ambient.o.stop();state.ambient.lfo.stop();}catch{}state.ambient=null;}
function toggleSound() {state.muted=!state.muted;saveJSON("sinister-settings",{muted:state.muted});if(state.muted)stopAmbient();else{ensureAudio();if(state.started&&!state.paused)startAmbient();tone(220,.1);}updateSoundLabel();}
function updateSoundLabel() {$("#soundBtn").textContent=`SOUND: ${state.muted?"OFF":"ON"}`;}

window.startGame=startGame;window.goMenu=goMenu;window.togglePause=togglePause;window.showCodex=showCodex;window.showCardLore=showCardLore;
addEventListener("resize",()=>{if(state.started)updateBoardColumns();});
function updateBoardColumns() {
  const count=state.pairs*2;
  const cols=count<=10?5:(innerWidth<650?5:10);
  $("#board").style.setProperty("--cols",cols);
}
init();
