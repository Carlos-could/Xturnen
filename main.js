let boton = document.getElementById("hamburger");
let enlaces = document.getElementById("enlaces");
let contador = 0;

function ver() {
  if(window.innerWidth >= 768){
    enlaces.classList.remove( "uno");
  }else{
    enlaces.classList.add( "uno");
  }
}

window.addEventListener("resize", ver);

boton.addEventListener("click",function(){
        enlaces.classList.toggle("dos");
})
