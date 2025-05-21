// script.js
function calculateScore() {
  const selects = document.querySelectorAll('select');
  let total = 0;
  selects.forEach(sel => {
    total += Number(sel.value);
  });
  document.getElementById('result').textContent = `총점: ${total}`;
}
<script>
  document.getElementById('survey-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // 폼 데이터 수집
    const username = e.target.username.value;
    const age = e.target.age.value;

    // Firebase에 데이터 저장 (Realtime Database)
    database.ref('responses/').push({
      username: username,
      age: age,
      timestamp: Date.now()
    }).then(() => {
      alert('응답이 저장되었습니다!');
      e.target.reset();
    }).catch((error) => {
      alert('저장 중 오류 발생: ' + error.message);
    });
  });
</script>
