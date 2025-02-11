function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function updateCountdown() {
  const eventName = getQueryParam('name');
  const eventDate = new Date(getQueryParam('date'));
  const now = new Date();

  const timeDiff = eventDate - now;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById('event-name').innerText = eventName;
  document.getElementById('countdown-timer').innerHTML = `
    <div><span class="count">${days}</span> Days</div>
    <div><span class="count">${hours}</span> Hours</div>
    <div><span class="count">${minutes}</span> Minutes</div>
    <div><span class="count">${seconds}</span> Seconds</div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});