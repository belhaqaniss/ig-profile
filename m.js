function edValueKeyPress() {
    var edValue = document.getElementById("edValue");
    var s = edValue.value;

    var lblValue = document.getElementById("lblValue");
    lblValue.innerText = "www.instagram.com/" + s;

    //var s = $("#edValue").val();
    //$("#lblValue").text(s);    
}