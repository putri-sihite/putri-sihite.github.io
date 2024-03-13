function generateResponse() {
    var text = document.getElementById("text").value; // Diperbaiki untuk mengambil nilai dari input
    var response = document.getElementById("response");

    fetch("response.php", {
        method: "post",
        body: JSON.stringify({
            text: text
        })
    })
    .then((res) => res.text())
    .then((res) => {
        response.innerHTML = res;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
