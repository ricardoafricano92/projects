imagenes = ["imagenes-de-las-pruebas/Zelda.png","imagenes-de-las-pruebas/Zelda Color.jpg","imagenes-de-las-pruebas/0ED.jpg"];
console.log(imagenes);

let i=0;

function slider(){
document.holder.src=imagenes[i];

if(i < imagenes.length -1){
i++

}else{
    i=0;
}

setTimeout(slider,2000);
}


slider();