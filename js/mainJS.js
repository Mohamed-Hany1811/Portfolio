
var root= document.querySelector(':root')
var rootStyle= getComputedStyle(root)
var colorPalleteW=  $('.colorsContainer').outerWidth()

$('window,html,body').ready(function(){
    let colorPalleteWidth=  $('.colorsContainer').outerWidth()
    let palleteContainer = $('.palleteContainer').css("left")
    $('.palleteContainer').animate({left: `-`+colorPalleteWidth})

    $('.loader').slideUp(5000)
}



)

window.addEventListener('resize', ()=>{
    let colorPalleteWidth=  $('.colorsContainer').outerWidth()
    $('.palleteContainer').animate({left: `-`+colorPalleteWidth}, 0)

   
})



$('.nav-link').click(function(e){
    $(this).parent().siblings().children().removeClass('active')
    $(this).addClass('active')
})

$(window).scroll((e)=>{
let windowScroll= $(window).scrollTop()
let navChange= $('.aboutMe').offset().top
    if(windowScroll >= navChange)
    {
        $('.navB').addClass('bg-white')
        $('.nav-link, .navbar-brand').addClass('text-muted')
        $('.navB').addClass('bg-opacity-75')
    }else{
        $('.navB').removeClass('bg-white')
        $('.nav-link, .navbar-brand').removeClass('text-muted')

        $('.navB').removeClass('bg-opacity-75')

    }
 let  aboutCardAN= $('.aboutMe').offset().top
 if(windowScroll >= aboutCardAN- aboutCardAN/3){
 $('.aboutCardAN').css('transform', 'translateX(0%)')
 $('.upIcon').css('opacity', `1`)
}else{
     $('.upIcon').css('opacity', `0`)

 }
let skills= $('.skills').offset().top
if(windowScroll >= skills- skills/3){
    $('.sk').css('transform', 'translateX(0%)')
    $('.skillsProgress').css('transform', 'translateX(0%)')
    $('.progress-bar').css('transform', 'translateX(0%)')
}


})


$('.openIcon').click(function(){

    
            let colorPalleteWidth=  $('.colorsContainer').outerWidth()
            let palleteContainer = $('.palleteContainer').css("left")
            $('.openIcon').addClass('d-none')
            $('.closeIcon').removeClass('d-none')
    $('.palleteContainer').animate({left: '0px' })
})

$('.closeIcon').click(function(){

    
    let colorPalleteWidth=  $('.colorsContainer').outerWidth()
    let palleteContainer = $('.palleteContainer').css("left")
    $('.closeIcon').addClass('d-none')
    $('.openIcon').removeClass('d-none')
$('.palleteContainer').animate({left: `-`+colorPalleteWidth})


})

// $('.iconcontainer').click(function(){

    
//     let colorPalleteWidth=  $('.colorsContainer').outerWidth()
//     let palleteContainer = $('.palleteContainer').css("left")

// if(palleteContainer == 0+`px`){
// $('.palleteContainer').animate({left: `-`+colorPalleteWidth})
// }else{
// $('.palleteContainer').animate({left: '0px' })

// }
// })


$('.color-1').click(function(){
   root.style.setProperty('--main-theme-background-color', `245, 245, 245`)
   root.style.setProperty('--main-theme-cards-color',  `255, 255, 255, 1` )
   root.style.setProperty('--heading',   `223, 215, 191` )
   console.log(rootStyle.getPropertyValue(''));
}
)
$('.color-2').click(function(){
    root.style.setProperty('--main-theme-cards-color', `212, 226, 212` )
    root.style.setProperty( '--main-theme-background-color',  `255, 202, 204` )
    root.style.setProperty('--heading',`245, 245, 245` )
console.log(rootStyle.getPropertyValue(''));
}
)
$('.color-3').click(function(){
    root.style.setProperty('--main-theme-cards-color', `249, 241, 240` )
    root.style.setProperty( '--main-theme-background-color',  `248, 175, 166` )
    root.style.setProperty('--heading', `248, 175, 166` )
console.log(rootStyle.getPropertyValue(''));
}
)
$('.color-4').click(function(){
    root.style.setProperty('--main-theme-cards-color',  `129, 190, 206`)
    root.style.setProperty( '--main-theme-background-color',  `55, 139, 164`   )
    root.style.setProperty('--heading', `55, 139, 164` )
console.log(rootStyle.getPropertyValue(''));
}
)