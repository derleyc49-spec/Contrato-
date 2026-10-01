// =====================================
// CONTAGEM REGRESSIVA
// =====================================

// 5 horas em segundos
let tempoRestante = 5 * 60 * 60;

function atualizarContagem() {

    const horas = Math.floor(tempoRestante / 3600);

    const minutos = Math.floor(
        (tempoRestante % 3600) / 60
    );

    const segundos = tempoRestante % 60;

    const h = String(horas).padStart(2, "0");
    const m = String(minutos).padStart(2, "0");
    const s = String(segundos).padStart(2, "0");

    document.getElementById("countdown").textContent =
        `${h}:${m}:${s}`;

    if (tempoRestante > 0) {
        tempoRestante--;
    } else {
        document.getElementById("countdown").textContent =
            "00:00:00";
    }
}


// Atualiza imediatamente
atualizarContagem();

// Atualiza a cada segundo
setInterval(atualizarContagem, 1000);
