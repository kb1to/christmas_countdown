const boxes = document.getElementById("boxes");
const message = document.getElementById("message");

function update() {
  const now = new Date();

  const isChristmas = now.getMonth() === 11 && now.getDate() === 25;
  boxes.hidden = isChristmas;
  message.textContent = isChristmas ? "🎄 Merry Christmas! 🎄" : "";
  if (isChristmas) return;

  let year = now.getFullYear();
  if (now.getMonth() === 11 && now.getDate() > 25) year++;

  const seconds = Math.floor((new Date(year, 11, 25) - now) / 1000);

  document.getElementById("days").textContent = Math.floor(seconds / 86400);
  document.getElementById("hours").textContent = Math.floor(seconds / 3600) % 24;
  document.getElementById("minutes").textContent = Math.floor(seconds / 60) % 60;
  document.getElementById("seconds").textContent = seconds % 60;
}

update();
setInterval(update, 1000);
