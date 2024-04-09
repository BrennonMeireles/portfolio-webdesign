// Função para rolar suavemente até o topo da página quando o botão for clicado
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("btnTopo").style.display = "block";
    } else {
      document.getElementById("btnTopo").style.display = "none";
    }
  }
  