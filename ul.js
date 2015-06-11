window.onload = function  () {
	var li_ul = document.querySelectorAll(".col_ul li  ul");
    for (var i = 0; i < li_ul.length; i++) {
        li_ul[i].style.display = "none"
    };

    var exp_li = document.querySelectorAll(".col_ul li > span");
    for (var i = 0; i < exp_li.length; i++) {
        exp_li[i].style.cursor = "pointer";
        exp_li[i].onclick = showul;
    };
    function showul () {
        nextul = this.nextElementSibling;
        if(nextul.style.display == "block")
            nextul.style.display = "none";
        else
            nextul.style.display = "block";
    }
}
