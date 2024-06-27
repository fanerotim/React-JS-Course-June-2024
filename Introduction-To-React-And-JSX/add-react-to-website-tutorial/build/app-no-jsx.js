//Get html container
var htmlContainer = document.querySelector('.root');

// Create React root container
var root = ReactDOM.createRoot(htmlContainer);

// Create a React DOM h1 element 
var heading = React.createElement('h1', null, 'Hello JSX from React!');

// Create a second React DOM element - paragraph
var paragraph = React.createElement('p', null, 'First experience with this library');

//Create a third React DOM element - h2
var subheading = React.createElement('h2', null, 'Learning the React library!');

// Create a React DOM header element;
var header = React.createElement('header', null, heading, subheading, paragraph);

// Render the React DOM h1 element on page
root.render(header);