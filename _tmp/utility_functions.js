function show(elem) {

    var p = document.getElementsByClassName("hidden");

    if (p[elem] != undefined) {

        if (p[elem].style.display == "none") {
            p[elem].style.display = "block";
        } else {
            p[elem].style.display = "none";
        }
    }

}