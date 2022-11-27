//Day 9 Remind Function In JavaScript

function music(a, b) {
  let sec = b;
  let minutes = 0;
  let hours = 0;
  if (sec > 60) {
    sec = b % 60;
    minutes = parseInt(b / 60);
    hours = 0;
    if (minutes > 60) {
      hours = parseInt(minutes / 60);
      minutes = minutes % 60;
    }
  }
  const playtime = ` ${hours} : ${minutes} : ${sec}`;
  const title = a;

  console.log(`Music ${title} play after ${playtime}`);
}
const song_name = "Aguilera";
const duration = 624;
music(song_name, duration);
