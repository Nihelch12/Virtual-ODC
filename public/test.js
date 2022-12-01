
function appearP2() { 
    var loader = document.getElementById('loader');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var keypoint1 = document.getElementsByClassName('keypoint-1');
    var keypoint2 = document.getElementsByClassName('keypoint-2');
    var keypoint3 = document.getElementsByClassName('keypoint-3');

    
    loader.style.left = "0";
    setTimeout(function() { 
        loader.style.left = "150%";
        page1.style.display = "none";
        page2.style.display = 'block';
        keypoint1[0].style.display= "none";
        keypoint2[0].style.display= "none";
        keypoint3[0].style.display= "none";
     }, 250)
 }


function appearP1() { 
    var loader = document.getElementById('loader');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    loader.style.left = "0";
    setTimeout(function() { 
        loader.style.left = "-100%";
        page1.style.display = "block";
        page2.style.display = 'none';
     }, 500)
 }
