function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const retur = Math.floor(Math.random() * (max - min) + min)

    const number = retur
    const result = document.getElementById("input-result").value = number
    
    console.log(number)


}


