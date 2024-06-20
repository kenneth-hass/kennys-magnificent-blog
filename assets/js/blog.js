const themeswitcher = document.querySelector('#theme-switch')

const container = document.querySelector('.container');

let mode = 'light'

// I set the variables to reference the theme switch and use the container
// and created the variable for the light mode that will set the default 
// settings of the switch.

themeswitcher.addEventListener('click', function() {

    if (mode === 'light')  {
        mode = 'dark';

    container.setAttribute('class', 'dark');
    
    } else {mode = 'light';

    container.setAttribute('class', 'light');}

    });

    // I added an event listener to make the theme switcher change modes
    // from light to dark based on user preference. As well as set the 
    // light mode as the default with the ability to switch to the dark
    // mode container.