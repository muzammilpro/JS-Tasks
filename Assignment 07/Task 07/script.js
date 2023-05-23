function countDown() {
    var hours = document.getElementById("hours").value
    var minutes = document.getElementById("minutes").value
    var second = document.getElementById("seconds").value

    for (let index = hours; index > 0; index--) {
        document.getElementById("toDisplay").innerHTML = ` Hello ${index}`

        console.log(index);

    }
}