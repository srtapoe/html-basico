function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar ou ocultar o botão com base na posição de rolagem da página
window.onscroll = function() {
    var btnVoltarTopo = document.getElementById('btn-voltar-topo');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnVoltarTopo.style.display = 'block';
    } else {
        btnVoltarTopo.style.display = 'none';
    }
};