let div = document.createElement('div');

div.style.backgroundColor = 'orange';
div.style.borderRadius = "10px";
div.style.padding = "60px 80px";
div.style.marginTop = "200px";
document.body.appendChild(div);

let p = document.createElement('p');

p.style.backgroundColor = 'black';
p.style.color = 'white';
p.style.borderRadius = "10px";
p.style.padding = "40px 40px";
p.style.display = "inline-block";
p.style.margin = "10px";
div.appendChild(p);

let pp = document.createElement('pp');

pp.style.backgroundColor = 'black';
pp.style.color = 'white';
pp.style.borderRadius = "10px";
pp.style.padding = "40px 40px";
pp.style.display = "inline-block";
pp.style.margin = "10px";
div.appendChild(pp);

let ppp = document.createElement('ppp');

ppp.style.backgroundColor = 'black';
ppp.style.color = 'white';
ppp.style.borderRadius = "10px";
ppp.style.padding = "40px 40px";
ppp.style.margin = "10px";
ppp.style.display = "inline-block";
div.appendChild(ppp);

const clockElement1 = document.createElement('div');
clockElement1.style.fontSize = '48px';
clockElement1.style.color = 'white';
clockElement1.style.textAlign = 'center';


const clockElement2 = document.createElement('div');
clockElement2.style.fontSize = '48px';
clockElement2.style.color = 'white';
clockElement2.style.textAlign = 'center';


const clockElement3 = document.createElement('div');
clockElement3.style.fontSize = '48px';
clockElement3.style.color = 'white';
clockElement3.style.textAlign = 'center';


document.body.style.display = 'flex';
document.body.style.backgroundColor = 'darkorange';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
p.appendChild(clockElement1);
pp.appendChild(clockElement2);
ppp.appendChild(clockElement3);

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());
    clockElement1.textContent = (`${hours}`);
    clockElement2.textContent = (`${minutes}`);
    clockElement3.textContent = (`${seconds}`);
  }

setInterval(updateClock, 1000);

updateClock();