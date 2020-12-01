      // Create a variable to hold the grid value. 
      let slider = document.querySelector('#slider');
      let displayValue = document.querySelector('.displayValue');
      let sliderValue = document.getElementById('slider');

      // Generate the default grid of divs.
      let canvas = document.querySelector('.canvas');

      fuction createGrid() {
        for (let i = 0; i < 400; i++) {
          div.classList.add('blankPixel');
          div.addEventListener('mouseover', function(event) {
          event.target.style.backgroundColor = 'black';
          canvas.appendChild(div);
          })
        }
      }

      // Create variables to hold slider number, and update the grid!
      
      function changeSize() {
        // let displayValue = document.querySelector('.displayValue')
        displayValue.textContent = sliderValue;
          for (let i = 0; i < value * value; i++) {
            div.classList.add('blankPixel');
            div.addEventListener('mouseover', function(event) {
              event.target.style.backgroundColor = 'black';
            })
            canvas.appendChild(div);
          }
        };
      
      slider.addEventListener('input', changeSize);

      // Add an event listener to these divs so that when they are selected, they will change to a class or id with a different color.
      // Ideally, this will use the arrow keys on the keyboard to move up and down through the divs --- .focus()

      function colorGrid {
        this.style.backgroundColor = '#000000';
        this.classList.remove('');
      }

      // Add a button with an event listener that will clear all classes from these divs

