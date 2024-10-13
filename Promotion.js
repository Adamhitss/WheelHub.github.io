    let index = 0;
    let images =$('.fotocarousel')
    let totalimg = images.length;

    $(".next").on("click", ()=>{
        images.eq(index).removeClass("active")
        index++;
        if(index > totalimg-1){
            index= 0;
        }
        images.eq(index).addClass("active")

    })

    $(".prev").on("click", ()=>{
        images.eq(index).removeClass("active")
        index++;
        if(index < 0){
            index= totalimg-1;
        }
        images.eq(index).addClass("active")

    })

    $('.carousel').slick ({
        autoplay: true,
        autoplaySpeed: 2000
    })
