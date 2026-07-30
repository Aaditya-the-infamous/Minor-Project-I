markActiveNav('categories');

const app = document.getElementById('app');
const raw = sessionStorage.getItem('quizzly-result');

if(!raw){
  app.innerHTML = `
    <div class="no-quiz">
      <h2>No results to show</h2>
      <p>Take a quiz first to see your score here.</p>
      <a class="btn" href="categories.html">Browse categories →</a>
    </div>
  `;
} else {
  const result = JSON.parse(raw);
  const { catId, score, total, answers } = result;
  const questions = QUESTIONS[catId];
  const catName = CATEGORIES.find(c=>c.id===catId).name;
  const pct = Math.round((score/total)*100);

  let verdict = 'Keep practicing';
  if(pct >= 80) verdict = 'Excellent';
  else if(pct >= 60) verdict = 'Well done';
  else if(pct >= 40) verdict = 'Not bad';

  app.innerHTML = `
    <div class="result-wrap">
      <div class="stamp">
        <div class="pct">${pct}%</div>
        <div class="verdict">${verdict}</div>
      </div>
      <h2>${score} out of ${total} correct</h2>
      <p class="sub">${catName} category</p>
      <div class="result-actions">
        <a class="btn" href="quiz.html?cat=${catId}">Retry this category</a>
        <a class="btn ghost" href="categories.html">Try another category</a>
      </div>
      <div class="section-head" style="width:100%; max-width:640px; margin-top:0;">
        <h2 style="font-size:19px;">Answer summary</h2>
      </div>
      <div class="review-list">
        ${answers.map((a,i)=>{
          const q = questions[i];
          return `
          <div class="review-item ${a.correct?'ok':'bad'}">
            <span class="mark">${a.correct?'✓':'✕'}</span>
            <div>
              <div class="q-text">${i+1}. ${q.q}</div>
              <div class="a-text">
                ${a.correct
                  ? `Your answer: <b>${q.o[a.chosen]}</b>`
                  : `Your answer: <b>${a.chosen===null?'No answer (time up)':q.o[a.chosen]}</b> &nbsp;·&nbsp; Correct: <b>${q.o[q.a]}</b>`
                }
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}