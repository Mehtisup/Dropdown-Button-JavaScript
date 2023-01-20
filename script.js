<script>
function lifeFunction() {
    document.getElementById("myBye").classList.toggle("cl");
}

window.onclick = function(event) {
    if (!event.target.matches('.life')) {
        var lis = document.getElementsByClassName("myBye");
        var i;
        for (i = 0 ; i < lis.length ; i++) {
            var myLis = lis[i];
            if (myLis.classList.contains('cl')) {
                myLis.classList.remove('cl');
            }
        }
    }
}
</script>
