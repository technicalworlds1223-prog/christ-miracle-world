function sendWhatsApp() {
    var name = document.getElementById("name").value;
    var request = document.getElementById("request").value;

    var phone = "917396307396";

    var message = "Shalom,%0A%0AMy name is " + name +
    ".%0AI humbly request prayer for:%0A" + request +
    "%0A%0AThank you.";

    var url = "https://wa.me/" + phone + "?text=" + message;
    window.open(url, "_blank");
}

function openModal(src){
    document.getElementById("modal").style.display="flex";
    document.getElementById("modal-img").src=src;
}

function closeModal(){
    document.getElementById("modal").style.display="none";
}