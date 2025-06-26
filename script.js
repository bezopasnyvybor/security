const correctAnswers = {
  q1: 'b',
  q2: 'a',
  q3: 'b',
  q4: 'a'
};

document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let score = 0;
  const formData = new FormData(this);
  for (let [key, value] of formData.entries()) {
    if (correctAnswers[key] === value) {
      score++;
    }
  }
  const total = Object.keys(correctAnswers).length;
  const resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';
  resultDiv.textContent = `Вы ответили правильно на ${score} из ${total} вопросов.`;

  // Показать блок подписки
  const subscribeBlock = document.getElementById('subscribeBlock');
  subscribeBlock.style.display = 'block';

  // Прокрутка к результатам
  resultDiv.scrollIntoView({behavior: "smooth"});
});

document.getElementById('subscribeBtn').addEventListener('click', () => {
  window.open('https://t.me/yourchannel', '_blank');
});
