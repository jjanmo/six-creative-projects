import"./modulepreload-polyfill-9p4a8sJU.js";(function(){const c=document.querySelector(".hamberger"),n=document.querySelector(".button-container"),r=document.querySelectorAll(".picture"),a=()=>{document.querySelector(".wrapper").classList.toggle("clicked")},i=e=>{const t=e.target.className;t.includes("captain")?document.querySelector(".captain-picture").classList.add("show"):t.includes("ironman")&&document.querySelector(".ironman-picture").classList.add("show")},o=e=>{e.target.parentNode.classList.remove("show")};function s(){c.addEventListener("click",a),n.addEventListener("click",i),r.forEach(e=>e.addEventListener("click",o))}s()})();
