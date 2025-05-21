// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBLsTxTjkSCrt3kAd0EmTNnTr8qkWU9pM",
  authDomain: "cadesi-exam.firebaseapp.com",
  projectId: "cadesi-exam",
  storageBucket: "cadesi-exam.firebasestorage.app",
  messagingSenderId: "686619414745",
  appId: "1:686619414745:web:072f8bf1b6ff2d7f6eeec8",
  measurementId: "G-CKJ98B8YY8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('cadesi-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const selects = document.querySelectorAll('#cadesi-form select');
  const responses = {};
  let total = 0;
  selects.forEach(sel => {
    responses[sel.name] = Number(sel.value);
    total += Number(sel.value);
  });

  try {
    await addDoc(collection(db, "cadesi_responses"), {
      responses: responses,
      total: total,
      timestamp: Date.now()
    });
    document.getElementById('result').textContent = "응답이 저장되었습니다! (총점: " + total + ")";
    e.target.reset();
  } catch (error) {
    document.getElementById('result').textContent = "저장 중 오류 발생: " + error.message;
  }
});
