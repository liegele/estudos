//debouncing
let timeout;

document.addEventListener('mousemove', function(event){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        console.log('Your current position');
        console.log(event.pageX);
        console.log(event.pageY);
    }, 5000);
});