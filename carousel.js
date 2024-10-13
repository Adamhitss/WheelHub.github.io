const carousel = document.getElementById ('carousel')
const prev = document.getElementById ("prev")
const next = document.getElementById("next")

let index = 0;
let images = ["2023_Mirai.jpeg", "2024_GR_Corolla.jpeg", "2024_grand_highlander.jpeg", "2024_land_cruiser.jpeg"]

function showimage (){
    carousel.src=images[index]
}

prev.addEventListener("click",()=> {
    index--;
    if(index<0){
        index = images.length-1
    }
    showimage()
})

next.addEventListener("click",()=>{
    index++;
    if(index>images.length-1)
        {
         index=0
    }
    showimage()

})

function sliding (){
    index++;
    if(index>images.length-1)
        {
            index=0
    
        }
        showimage()
}
next.addEventListener("click", sliding)

setInterval(sliding,1000)
window.onload(showimage())