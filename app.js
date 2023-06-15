const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  // converting seconds into degrees
  const secondDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const minutes = now.getMinutes();
  // converting minutes to degrees
  const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  const hours = now.getHours();
  // converting hours to degrees
  const hoursDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
