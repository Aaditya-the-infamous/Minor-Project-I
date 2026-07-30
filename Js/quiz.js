markActiveNav('categories');

const params = new URLSearchParams(window.location.search);
const catId = params.get('cat');
const app = document.getElementById('app');

if(!catId || !QUESTIONS[catId]){
  app.innerHTML = `
    <div class="no-quiz">
      <h2>No category selected</h2>
      <p>Pick a category to start a quiz.</p>
      <a class="btn" href="categories.html">Browse categories →</a>
    </div>
  `;
} else {
  runQuiz(catId);
}

function runQuiz(catId){
  const questions = QUESTIONS[catId];
  const catName = CATEGORIES.find(c=>c.id===catId).name;
  let idx = 0, score = 0, answers = [], locked = false, timeLeft = TIME_PER_Q, timerHandle = null;

  function renderQuestion(){
    const q = questions[idx];
    const total = questions.length;
    const pct = Math.round((idx/total)*100);
    const circumference = 2*Math.PI*22;
    app.innerHTML = `
      <div class="quiz-wrap">
        <div class="quiz-top">
          <span class="mono" style="font-size:12px; color:var(--muted);">${idx+1} / ${total}</span>
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
          <div class="timer-ring" id="timerRing">
            <svg width="56" height="56" viewBox="0 0 56 56">
              <circle class="bg" cx="28" cy="28" r="22"></circle>
              <circle class="fg" id="timerFg" cx="28" cy="28" r="22"
                stroke-dasharray="${circumference}" stroke-dashoffset="0"></circle>
            </svg>
            <div class="num" id="timerNum">${timeLeft}</div>
          </div>
        </div>
        <div class="q-card">
          <span class="cat-tag">${catName}</span>
          <h3>${q.q}</h3>
          <div class="options" id="optionsWrap">
            ${q.o.map((opt,i)=>`
              <button class="opt" data-i="${i}" onclick="window.__quizSelect(${i})">
                <span class="letter">${String.fromCharCode(65+i)}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>
          <div class="q-foot">
            <button class="btn" id="nextBtn" onclick="window.__quizNext()" disabled>
              ${idx+1===total ? 'See results →' : 'Next question →'}
            </button>
          </div>
        </div>
        <button class="quiz-exit" onclick="window.location.href='categories.html'">Exit quiz</button>
      </div>
    `;
    locked = false;
    timeLeft = TIME_PER_Q;
    startTimer();
  }

  function startTimer(){
    const circumference = 2*Math.PI*22;
    const fg = document.getElementById('timerFg');
    const num = document.getElementById('timerNum');
    const ring = document.getElementById('timerRing');
    const update = ()=>{
      const frac = timeLeft / TIME_PER_Q;
      fg.style.strokeDashoffset = circumference * (1-frac);
      num.textContent = timeLeft;
      ring.classList.toggle('warn', timeLeft <= 5);
    };
    update();
    clearInterval(timerHandle);
    timerHandle = setInterval(()=>{
      timeLeft--;
      if(timeLeft <= 0){
        timeLeft = 0;
        update();
        timeUp();
        return;
      }
      update();
    },1000);
  }

  function selectAnswer(i){
    if(locked) return;
    locked = true;
    clearInterval(timerHandle);
    const q = questions[idx];
    const correct = i === q.a;
    if(correct) score++;
    answers.push({chosen:i, correct});

    document.querySelectorAll('.opt').forEach(btn=>{
      const bi = parseInt(btn.dataset.i,10);
      btn.disabled = true;
      if(bi === q.a) btn.classList.add('correct');
      else if(bi === i) btn.classList.add('wrong');
    });
    document.getElementById('nextBtn').disabled = false;
  }

  function timeUp(){
    if(locked) return;
    locked = true;
    clearInterval(timerHandle);
    const q = questions[idx];
    answers.push({chosen:null, correct:false});
    document.querySelectorAll('.opt').forEach(btn=>{
      const bi = parseInt(btn.dataset.i,10);
      btn.disabled = true;
      if(bi === q.a) btn.classList.add('correct');
    });
    document.getElementById('nextBtn').disabled = false;
  }

  function nextQuestion(){
    clearInterval(timerHandle);
    if(idx+1 >= questions.length){
      finishQuiz();
    } else {
      idx++;
      renderQuestion();
    }
  }

  function finishQuiz(){
    const result = { catId, score, total: questions.length, answers };
    sessionStorage.setItem('quizzly-result', JSON.stringify(result));
    window.location.href = 'result.html';
  }

  window.__quizSelect = selectAnswer;
  window.__quizNext = nextQuestion;

  renderQuestion();
}