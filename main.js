function time() {
  let t = new Date();
  let time = t.toLocaleTimeString();
  document.getElementById('time').innerHTML = '⏱ ' + time;
}
setInterval (time,1000);
