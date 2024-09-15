function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var expandedImg = document.getElementById("expandedImg");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    expandedImg.scr = imgElement.src;
    captionText.innerHTML = imgElement.alt;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"
}