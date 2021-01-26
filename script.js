// VARIABLES TO HOLD CANVAS, SLIDER
let canvas = document.querySelector('#canvas');
let clear = document.querySelector("#clear");
let slider = document.getElementById("slider");

// FUNCTION TO GENERATE DEFAULT GRID
function createGrid(value) {
    // LOOP FOR 16 x 16 PIXEL GRID
    for (let i = 0; i < value * value; i++) {
        let div = document.createElement('div');
        div.classList.add('blank');
        canvas.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
        canvas.style.gridTemplateRows = `repeat(${value}, 1fr)`;
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

// CALL FUNCTION TO CREATE GRID WITH CURRENT (DEFAULT) SLIDER VALUE
let sliderValue = parseInt(slider.value, 10);
createGrid(sliderValue);

// UPDATE DISPLAY TEXT TO MATCH SLIDER VALUE w/ EVENT LISTENER
slider.addEventListener("mousemove", function () { 
    document.getElementById('displayValue').textContent = "Size: " + slider.value;
}); 

// UPDATE GRID SIZE TO MATCH SLIDER VALUE w/ EVENT LISTENER -- this doesn't seem to be doing the trick yet.
slider.addEventListener("mouseup", function () {
    let sliderValue = parseInt(slider.value, 10);
    createGrid(sliderValue);
});
