// VARIABLES TO HOLD CANVAS, SLIDER
let canvas = document.querySelector('#canvas');
let input = document.querySelector('#slider');
let reset = document.querySelector("#resetbutton");

// FUNCTION TO GENERATE DEFAULT GRID
function createDefaultGrid() {
    // LOOP FOR 16 x 16 PIXEL GRID
    for (let i = 0; i < 16 * 16; i++) {
        let div = document.createElement('div');
        div.classList.add('blank');
        canvas.appendChild(div);
        // EVENT LISTENER TO TURN MOUSEOVER BOXES BLACK
        div.addEventListener('mouseover', function(event) {
            event.target.classList.add('black');
            // EVENT LISTENER RESET ALL BLACK PIXELS
            reset.addEventListener("click", function() {
                event.target.classList.remove('black');
            })
        })
    }
}

createDefaultGrid();

// UPDATE DISPLAY TEXT TO MATCH SLIDER VALUE
let slider = document.getElementById("slider");
let sliderValue = slider.value;

slider.addEventListener("mousemove", function () { 
    sliderValue = slider.value;
    document.getElementById('displayValue').textContent = "Size: " + slider.value;
}); 

// slider.addEventListener("mousemove", createSliderGrid);

// FUNCTION TO GENERATE NEW GRID BASED ON SLIDER VALUE
sliderValue.onchange = function() {
    // LOOP FOR 16 x 16 PIXEL GRID
    for (let i = 0; i < sliderValue * sliderValue; i++) {
        let div = document.createElement('div');
        div.classList.add('blank');
        canvas.appendChild(div);
        // EVENT LISTENER TO TURN MOUSEOVER BOXES BLACK
        div.addEventListener('mouseover', function(event) {
            event.target.classList.add('black');
            // EVENT LISTENER RESET ALL BLACK PIXELS
            reset.addEventListener("click", function() {
                event.target.classList.remove('black');
            })
        })
    }
};