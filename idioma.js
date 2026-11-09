// Cambia entre español e inglés y recuerda la elección.
(function () {
  var guardado = null;
  try { guardado = localStorage.getItem("idioma"); } catch (e) {}
  var inicial = guardado || ((navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en");

  function aplicar(lang) {
    document.documentElement.lang = lang;
    var botones = document.querySelectorAll(".idioma button");
    for (var i = 0; i < botones.length; i++) {
      botones[i].setAttribute("aria-pressed", botones[i].getAttribute("data-set") === lang ? "true" : "false");
    }
    try { localStorage.setItem("idioma", lang); } catch (e) {}
  }

  document.addEventListener("click", function (ev) {
    var b = ev.target.closest && ev.target.closest(".idioma button");
    if (b) aplicar(b.getAttribute("data-set"));
  });

  aplicar(inicial);
})();
