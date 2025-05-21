// script.js
function calculateScore() {
  const selects = document.querySelectorAll('select');
  let total = 0;
  selects.forEach(sel => {
    total += Number(sel.value);
  });
  document.getElementById('result').textContent = `총점: ${total}`;
}
