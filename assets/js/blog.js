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

blogList.forEach(element => {
    const child = document.createElement('div')

    const title = document.createElement('h2')

    const userName = document.createElement('h3')

    const content = document.createElement('p')

// I initiaize the create element in the fuction to make the div, h2,
// h3 and p elements for the blog post, and assigning these new elemnets
// to the variable, bloglist. This will set the items to be shown in the
// document object.

    title.innerHTML = element.title

    title.innerHTML = element.userName

    title.innerHTML = element.content

// This tells the computer that I want the users input values for username,
// content input and titles to appear in the DOM, when the elements
// are created.
    
    child.appendChild(title)

    child.appendChild(userName)

    child.appendChild(content)

// I tell the computer to append the newly created elements to the 
// actual DOM that way they will appear on the browser screen 
   
blogPost.appendChild(child)
}); 