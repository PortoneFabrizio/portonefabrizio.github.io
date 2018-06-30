$(document).ready(function(){
    $('.icon').click(function(){
          $('.icon').toggleClass('active');
          $('.list').toggleClass('active');
        })
    $('.list li').click(function(){
          $('.icon').toggleClass('active');
          $('.list').toggleClass('active');
        })
 
//one page scroll ------------
    
    $(".list li a[href^='#']").on('click', function(e){
        
        target = this.hash; 
        e.preventDefault();
        
        $('html,body').animate({
        scrollTop : $(this.hash).offset().top
        }, 600)
    })
    
//Loading ------------
    
setTimeout(function(){
 $('body').addClass('loaded');
 }, 3000);
    
    
})
