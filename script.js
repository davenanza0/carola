const targetDate = new Date("May 09, 2026 19:00:00").getTime();

  function updateCountdown(){
    const now = new Date().getTime();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  setInterval(updateCountdown,1000);
  updateCountdown();

  document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const guests = document.getElementById("guests").value;
  const msg = document.getElementById("message").value;

  const text =
`Olá! Confirmo a minha presença na festa.

Nome: ${name}
Acompanhantes: ${guests}
Mensagem: ${msg || "Sem mensagem"}`;

  const phone = "258833269298";

  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);

  window.location.href = url;
});
  if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});