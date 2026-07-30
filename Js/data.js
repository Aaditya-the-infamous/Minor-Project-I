/* ============ Shared question bank ============ */
const CATEGORIES = [
  { id:'general', name:'General Knowledge', desc:'Everyday facts, geography, and a little bit of everything.', icon:'globe' },
  { id:'science', name:'Science', desc:'From atoms to astronomy — how the world works.', icon:'flask' },
  { id:'sports', name:'Sports', desc:'Records, rules, and legends of the game.', icon:'ball' },
  { id:'tech', name:'Technology', desc:'Computers, the internet, and the tools we build.', icon:'chip' },
  { id:'history', name:'History', desc:'People and events that shaped the world.', icon:'scroll' },
];

const QUESTIONS = {
  general:[
    {q:"What is the capital of Australia?", o:["Sydney","Canberra","Melbourne","Perth"], a:1},
    {q:"Which ocean is the largest by surface area?", o:["Atlantic","Indian","Arctic","Pacific"], a:3},
    {q:"How many continents are there on Earth?", o:["5","6","7","8"], a:2},
    {q:"What is the tallest mountain in the world?", o:["K2","Kangchenjunga","Mount Everest","Lhotse"], a:2},
    {q:"Which currency is used in Japan?", o:["Won","Yuan","Yen","Ringgit"], a:2},
    {q:"What is the smallest country in the world by area?", o:["Monaco","San Marino","Vatican City","Liechtenstein"], a:2},
    {q:"What painted the painting, 'And stay down'?", o:["Vincent Van Gogh","Leonardo Da Vinci","Charles Keegan","Claude Monet"], a:2},
    {q:"Who is the only president in U.S. history who became one without wanting to?", o:["James A. Garfield","John F. Kennedy","Abraham Lincoln","George W. Bush"], a:0},
    {q:"When did the great Asian Financial crisis begin?", o:["1996","2005","1456","1997"], a:3},
    {q:"Who was the first king of Simraugadh?", o:["Rama Singh Deva","Nanyadeva","Harisingh Dev","Ghiyasuddin Tughlaq"], a:1},
  ],
  science:[
    {q:"What gas do plants primarily absorb from the atmosphere?", o:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"], a:1},
    {q:"What is the chemical symbol for gold?", o:["Go","Gd","Au","Ag"], a:2},
    {q:"How many bones are in the adult human body?", o:["186","206","226","246"], a:1},
    {q:"What planet is known as the Red Planet?", o:["Venus","Jupiter","Mars","Saturn"], a:2},
    {q:"What is the powerhouse of the cell?", o:["Nucleus","Ribosome","Mitochondria","Golgi body"], a:2},
    {q:"At sea level, water boils at what temperature (°C)?", o:["90°C","95°C","100°C","110°C"], a:2},
    {q:"What did Albert Einstein win his only Nobel prize for?", o:["Theory of relativity","Law of photoelectic effect","Unified field theory","Advancement in study of Wormholes"], a:3},
    {q:"What type of chemical bond is formed when two atoms share a pair of electrons?", o:["Ionic bond","Covalent bond","Hydrogen bond","Metallic bond"], a:1},
    {q:"What is the primary function of red blood cells in the human body?", o:["Fighting off viral infections","Transporting oxygen to tissues","Clotting blood at wound sites","Producing digestive enzymes"], a:1},
    {q:"Which of the following organic functional groups contains a carbon-oxygen double bond (carbonyl group) bonded to at least one hydrogen atom?", o:["Ketone","Alcohol","Aldehyde","Ether"], a:2},
  ],
  sports:[
    {q:"How many players are on a football team on the field?", o:["9","10","11","12"], a:2},
    {q:"In which sport would you perform a slam dunk?", o:["Volleyball","Basketball","Badminton","Tennis"], a:1},
    {q:"How often are the Summer Olympic Games held?", o:["Every 2 years","Every 3 years","Every 4 years","Every 5 years"], a:2},
    {q:"What sport is associated with Wimbledon?", o:["Golf","Cricket","Tennis","Rugby"], a:2},
    {q:"In cricket, how many players are on each team?", o:["9","10","11","12"], a:2},
    {q:"Which country hosted the 2022 FIFA World Cup?", o:["Russia","Qatar","Brazil","France"], a:1},
    {q:"Which basketball player has the highest points in NBA history?", o:["Michael Jordan","Kareem-Abdul Jabar","Lebron James","Kevin Durant"], a:2},
    {q:"Unlike most sport, hockey has a consensus greatest of all time, simply known as 'The great one'. Who is he?", o:["Connor McDavid","Sidney Crosby","Auston Matthews","Wayne Gretzky"], a:3},
    {q:"Who is the black player to famously break the 'color line' of professional baseball in the United States ?", o:["Shohei Ohtani","Jackie Robinson","Babe Ruth","Moses Fleetwood Walker"], a:2},
    {q:"Who is the player with the most direct free kick goals in football history?", o:["Juninho Pernambucano","Lionel Messi","Marcelinho Carioca","Zico"], a:2},
  ],
  tech:[
    {q:"What does 'CPU' stand for?", o:["Central Process Unit","Central Processing Unit","Computer Personal Unit","Central Processor Utility"], a:1},
    {q:"Who is credited as a co-founder of Apple?", o:["Bill Gates","Elon Musk","Steve Jobs","Jeff Bezos"], a:2},
    {q:"What does 'HTML' stand for?", o:["Hyper Trainer Marking Language","HyperText Markup Language","Hyperlink and Text Markup Language","Home Tool Markup Language"], a:1},
    {q:"Which company developed the JavaScript language?", o:["Microsoft","Netscape","Google","Apple"], a:1},
    {q:"What does 'URL' stand for?", o:["Uniform Resource Locator","Universal Reference Link","United Resource Locator","Uniform Retrieval Link"], a:0},
    {q:"Which of these is a version control system?", o:["MySQL","Photoshop","Git","Excel"], a:2},
    {q:"In computer networking, what is the primary function of a router?", o:["To assign temporary IP addresses to local devices","To connect different networks together and direct data traffic between them","To store and serve website files to external users","To filter out malicious traffic and block unauthorized access"], a:1},
    {q:"Which of the following data structures operates on a Last-In, First-Out (LIFO) basis, where the last element added is the first one removed?", o:["Queue","Array","Stack","Linked List"], a:2},
    {q:"What is the purpose of a CSS (Cascading Style Sheets) file in modern web development?", o:["To handle server-side database queries","To define the structural layout and content of a webpage","To provide interactivity and logic to the user interface","To control the visual presentation, styling, and layout of a webpage"], a:3},
    {q:"In cybersecurity, what distinguishes a symmetric encryption algorithm from an asymmetric encryption algorithm?", o:["Symmetric encryption uses the same key for both encryption and decryption.","Symmetric encryption is only used for securing physical hardware.","Symmetric encryption requires a public registry to share keys.","Symmetric encryption uses two mathematically linked keys."], a:0},
  ],
  history:[
    {q:"In which year did World War II end?", o:["1943","1945","1947","1950"], a:1},
    {q:"Who was the first President of the United States?", o:["Thomas Jefferson","John Adams","George Washington","Abraham Lincoln"], a:2},
    {q:"The ancient pyramids are located primarily in which country?", o:["Mexico","Egypt","Peru","Greece"], a:1},
    {q:"Which empire built the Colosseum?", o:["Ottoman","Roman","Byzantine","Persian"], a:1},
    {q:"In what year did Nepal become a federal democratic republic?", o:["2006","2008","2015","2018"], a:1},
    {q:"Who wrote the Indian national epic the Mahabharata?", o:["Valmiki","Kalidasa","Vyasa","Tulsidas"], a:2},
    {q:"What was the primary purpose of the League of Nations, established in 1920 following the end of World War I?", o:["To regulate international trade and global currency values","To manage the rebuild of war-torn European infrastructure","To prevent future global conflicts through collective security and diplomacy","To enforce the colonization of remaining unaligned territories"], a:2},{q:"Which 19th-century geopolitical conflict was primarily fought over control of access to holy sites in the Ottoman Empire and effectively dismantled the Concert of Europe?", o:["The Crimean War","The Napoleonic Wars","The Franco-Prussian War","The Austro-Hungarian War"], a:0},{q:"What was the significance of the 1648 Peace of Westphalia in shaping modern global politics?", o:["It established the concept of state sovereignty and the modern nation-state system.","It unified the fractured Germanic states into a single empire.","It ended the democratic revolutions sweeping across Western Europe.","It officially created the first international maritime trade laws."], a:0},
    {q:"The Cold War policy of 'Containment', aimed at stopping the geopolitical expansion of Soviet communism, was first officially articulated in which American doctrine?", o:["The Monroe Doctrine","The Truman Doctrine","The Eisenhower Doctrine","The Marshall Plan"], a:1},
  ],
};

const ICONS = {
  globe:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z"/></svg>',
  flask:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3"/><path d="M8 15h8"/></svg>',
  ball:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18"/></svg>',
  chip:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>',
  scroll:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 4h11a2 2 0 0 1 2 2v13a1 1 0 0 1-1.6.8L15 18H8a2 2 0 0 1-2-2V4z"/><path d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2"/></svg>',
};

const TIME_PER_Q = 10;

/* Renders the shared category grid markup into any element */
function catGridMarkup(){
  return `<div class="cat-grid">
    ${CATEGORIES.map(c=>`
      <a class="cat-card" href="quiz.html?cat=${c.id}">
        <div class="icon">${ICONS[c.icon]}</div>
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
        <span class="meta">${QUESTIONS[c.id].length} questions</span>
      </a>
    `).join('')}
  </div>`;
}

/* Highlights the current page in the nav bar. Call with the current file name. */
function markActiveNav(page){
  document.querySelectorAll('nav.tabs a').forEach(a=>{
    a.classList.toggle('active', a.dataset.page === page);
  });
}