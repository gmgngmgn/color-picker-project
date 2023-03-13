let colorsArray = []

function fetchAndRender() {
    const colorPicker = document.getElementById("color-picker")
                const colorValue = colorPicker.value
                const hexColor = colorValue.substring(1);
                const mode = document.getElementById('select-option').value
        fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${mode}&count=5`)
            .then((response) => response.json())
            .then(function(data){
                colorsArray.push(...data.colors.map(color => color.hex.value))
                document.getElementById("color-1").style.backgroundColor = colorsArray[0]
                document.getElementById("color-2").style.backgroundColor = colorsArray[1]
                document.getElementById("color-3").style.backgroundColor = colorsArray[2]
                document.getElementById("color-4").style.backgroundColor = colorsArray[3]
                document.getElementById("color-5").style.backgroundColor = colorsArray[4]
                document.getElementById("hex-1").innerText = colorsArray[0]
                document.getElementById("hex-2").innerText = colorsArray[1]
                document.getElementById("hex-3").innerText = colorsArray[2]
                document.getElementById("hex-4").innerText = colorsArray[3]
                document.getElementById("hex-5").innerText = colorsArray[4]
                        })
}


window.onload = function() {
    let submit = document.getElementById('submit-btn')
    submit.addEventListener("click", function(e){
        e.preventDefault()
        colorsArray = []
        fetchAndRender()
    })
}

// document.addEventListener('click', function(event){
//     console.log(event.target.dataset.id.)
// })

