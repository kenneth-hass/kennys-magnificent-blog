const themeswitcher = document.querySelector('#theme-switch')

const container = document.querySelector('.container');

let mode = 'light'

// I set the variables to reference the theme switch and use the container
// and created the variable for the light mode that will set the default 
// settings of the switch.

function displayBlogPost () {

    const blogPost = document.getElementById('blogPost');

// I am setting the blogPost variable so it can be accessed by the
// function, displayBlogPost.
    
    const blogList = JSON.parse(localStorage.getItem('blogList'));

// I am creating a variable to retrieve the information stored in the 
// localstorage from the blogList and convert it from a JSON string back
// into an object.
