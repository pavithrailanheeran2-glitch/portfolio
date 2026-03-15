```javascript
/* =========================
   SCROLL ANIMATION
========================= */

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("animate")
}
})
})

document.querySelectorAll(".section, .card").forEach(el=>{
observer.observe(el)
})


/* =========================
   PARTICLE BACKGROUND
========================= */

const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i=0;i<120;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:2,
dx:(Math.random()-0.5)*0.5,
dy:(Math.random()-0.5)*0.5

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

/* movement */

p.x += p.dx
p.y += p.dy

/* bounce edges */

if(p.x < 0 || p.x > canvas.width) p.dx *= -1
if(p.y < 0 || p.y > canvas.height) p.dy *= -1

/* draw particle */

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="cyan"
ctx.fill()

})

requestAnimationFrame(animate)

}

animate()


/* =========================
   WINDOW RESIZE FIX
========================= */

window.addEventListener("resize",()=>{

canvas.width = window.innerWidth
canvas.height = window.innerHeight

})
```
