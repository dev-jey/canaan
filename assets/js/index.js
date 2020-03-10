
var menu = document.getElementById('mobile-menu');

function toggleMenu() {
    menu.style.visibility = "visible";
    menu.style.opacity = 1;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    menu.style.visibility = "hidden";
    menu.style.opacity = 0;
}
window.onclick = function (event) {
    if (event.target == menu) {
        menu.style.visibility = "hidden";
        menu.style.opacity = 0;
    }
}

let loader_holder = document.getElementsByClassName("loader-holder")[0];

function hideLoader() {
    document.getElementById("loader-holder").style.display = "none";
    loader_holder.style.display = "none";
}


/**
 * Career body open close
 */
function closeBody() {
    var menu = document.getElementById('career-body');
    var detail = document.getElementById('more-detail');
    
    console.log(menu.style.display)
    if(menu.style.display === "block"){
        detail.innerHTML = "More Detail";
        menu.style.display = "none";
        return;
    }
    detail.innerHTML = "Less Detail";
    menu.style.display = "block";
}