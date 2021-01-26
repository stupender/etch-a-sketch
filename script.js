// VARIABLES TO HOLD CANVAS, SLIDER
let canvas = document.querySelector('#canvas');
let input = document.querySelector('#slider');
let clear = document.querySelector("#clear");

// FUNCTION TO GENERATE DEFAULT GRID
function createDefaultGrid(number) {
    // LOOP FOR 16 x 16 PIXEL GRID
    for (let i = 0; i < number * number; i++) {
        let div = document.createElement('div');
        div.classList.add('blank');
        canvas.appendChild(div);
        // EVENT LISTENER TO TURN MOUSEOVER BOXES BLACK
        div.addEventListener('mouseover', function(event) {
            event.target.classList.add('black');
            // EVENT LISTENER RESET ALL BLACK PIXELS
            clear.addEventListener("click", function() {
                event.target.classList.remove('black');
            })
            slider.addEventListener("mouseup", function () {
                event.target.classList.remove('black');
            })
        })
    }
}

createDefaultGrid(16);

// UPDATE DISPLAY TEXT TO MATCH SLIDER VALUE w/ EVENT LISTENER
let slider = document.getElementById("slider");
let sliderValue = parseInt(slider.value, 10);

slider.addEventListener("mousemove", function () { 
    document.getElementById('displayValue').textContent = "Size: " + slider.value;
}); 

// UPDATE GRID SIZE TO MATCH SLIDER VALUE w/ EVENT LISTENER -- this doesn't seem to be doing the trick yet.

slider.addEventListener("mouseup", function () {
    createDefaultGrid(sliderValue);
});
