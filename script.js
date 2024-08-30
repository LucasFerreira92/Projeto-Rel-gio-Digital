const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = getSeconds();

    hour.innerHTML = '${formaTime(hours)}';
    min.innerHTML = '${formaTime(minutes)}';
    sec.innerHTML = '$formaTime(seconds)}';

}, 1000);

function formaTime(time){
    return time < 10 ? "0" + time : time;
}