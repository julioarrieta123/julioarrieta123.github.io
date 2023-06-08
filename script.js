val1= document.getelementbyid("txt.input1").value
val2=document.getelementbyid("txt.input2").value

window.addEventListener('scroll', function() {
    var infoBar = document.querySelector('.info-bar');
    var header = document.querySelector('header');
    var container = document.getElementById('container-body');

    if (window.scrollY > 0) {
        infoBar.style.transform = 'translateY(-100%)';
        header.style.transform = 'translateY(-100%)';
    } 
    else {
        infoBar.style.transform = 'translateY(0)';
        header.style.transform = 'translateY(0)';
    }


    if (window.scrollY > 50) { 
        container-body.classList.add('container-hidden');
    } else {
        container-body.classList.remove('container-hidden');
    }

}