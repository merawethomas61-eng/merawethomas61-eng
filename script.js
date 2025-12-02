// script.js
document.getElementById('url-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const url = document.getElementById('url-input').value.trim();
  if (!url) return;

  // Foreløpig demo: vis en melding
  alert(`Takk! Vi analyserer: ${url}\n(Demo – full analyse kommer senere.)`);
});
