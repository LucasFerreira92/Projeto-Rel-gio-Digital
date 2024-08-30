// Seleciona os elementos HTML onde as horas, minutos e segundos serão exibidos
const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

// Função que atualiza a hora, minuto e segundo
function updateTime() {
    let date = new Date(); // Cria um novo objeto Date com a hora atual
    let hours = date.getHours(); // Obtém as horas
    let minutes = date.getMinutes(); // Obtém os minutos
    let seconds = date.getSeconds(); // Obtém os segundos

    // Atualiza o conteúdo dos elementos HTML com as horas, minutos e segundos formatados
    hour.innerHTML = formaTime(hours);
    min.innerHTML = formaTime(minutes);
    sec.innerHTML = formaTime(seconds);
}

// Função para formatar o tempo, adicionando um zero à esquerda se for menor que 10
function formaTime(time) {
    return time < 10 ? "0" + time : time;
}

// Chama a função updateTime a cada 1000 milissegundos (1 segundo)
setInterval(updateTime, 1000);

// Atualiza o relógio imediatamente ao carregar a página
updateTime();