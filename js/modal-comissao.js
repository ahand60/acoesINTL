/* Modal "Ver integrantes" (antes era um <script> inline no index.html).
   Envolvido em IIFE para não conflitar com variáveis de js/comissao.js. */
(function () {
  const abrirComissao = document.getElementById("abrirComissao");
  const fecharComissao = document.getElementById("fecharComissao");
  const modalComissao = document.getElementById("modalComissao");

  if (!abrirComissao || !fecharComissao || !modalComissao) return;

  let elementoAnterior;

  function abrirModalComissao() {
    elementoAnterior = document.activeElement;

    modalComissao.hidden = false;
    document.body.style.overflow = "hidden";

    fecharComissao.focus();
  }

  function fecharModalComissao() {
    modalComissao.hidden = true;
    document.body.style.overflow = "";

    if (elementoAnterior) {
      elementoAnterior.focus();
    }
  }

  abrirComissao.addEventListener("click", abrirModalComissao);
  fecharComissao.addEventListener("click", fecharModalComissao);

  // Fecha quando o usuário clica fora da caixa branca
  modalComissao.addEventListener("click", function (evento) {
    if (evento.target === modalComissao) {
      fecharModalComissao();
    }
  });

  // Fecha com a tecla Esc
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && !modalComissao.hidden) {
      fecharModalComissao();
    }
  });
})();
