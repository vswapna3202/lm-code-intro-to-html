document.addEventListener('DOMContentLoaded', function(){
    var heading = document.getElementById("covid-update-heading");
    var searchButton = document.getElementById("searchButton");
    var imageMessage = document.getElementById("imageMessage");
    var images = document.getElementById("imageContainer").getElementsByTagName('img');
    var isRed = true;
    var imageIndex = 0;
    heading.addEventListener('click', function(){
        if(isRed){
            heading.style.color = 'blue';
            isRed = false;
        }else{
            heading.style.color = 'red';
            isRed = true;
        }
    });

    searchButton.addEventListener('click', function(){
        images[imageIndex].style.display = 'none';
        imageIndex = (imageIndex + 1) % images.length;
        images[imageIndex].style.display = 'block';
        imageMessage.style.display = 'block';
    });

});