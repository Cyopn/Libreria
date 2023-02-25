function collap() {
    var c = document.getElementsByClassName("collapsible")
    var i
    for (i = 0; i < c.length; i++) {
        c[i].onclick = function () {
            this.classList.toggle("active")
            var cn = this.nextElementSibling
            if (cn.style.maxHeight) {
                cn.style.maxHeight = null
            } else {
                cn.style.maxHeight = cn.scrollHeight + "px";
            }
        }
    }
}