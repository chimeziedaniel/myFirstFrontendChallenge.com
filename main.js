// let arrow = document.getElementById('link');
// arrow.onclick = function() {
//    let share = document.getElementById('share')
//    share.style.display = "flex"
// }

document.getElementById('link').addEventListener('click', function() {
   const share = document.getElementById('share');
   share.style.display = 'flex';
   share.dispatchEvent(clickEvent);
 });