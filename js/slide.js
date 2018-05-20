var index = 1;
showslide(index);
autoshowslide();

function plus(n) {
    showslide(index += n);
}

function showslide(n) {
    var i;
    var x = document.getElementsByClassName("slide-img");
    if (n > x.length) {
        index = 1;
    }
    if (n < 1) {
        index = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[index - 1].style.display = "block";
}

function autoshowslide() {
    showslide(index);
    index++;
    setTimeout(autoshowslide, 2000);
}