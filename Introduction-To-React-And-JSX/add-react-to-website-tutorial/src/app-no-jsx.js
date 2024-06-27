//Get html container
const htmlContainer = document.querySelector('.root');

// Create React root container
const root = ReactDOM.createRoot(htmlContainer);

// Create a React DOM h1 element 
const heading = React.createElement('h1', null, 'Hello JSX from React!');

// Create a second React DOM element - paragraph
const paragraph = React.createElement('p', null, 'First experience with this library')

//Create a third React DOM element - h2
const subheading = React.createElement('h2', null, 'Learning the React library!')

// Create a React DOM header element;
const header = React.createElement('header', null, heading, subheading, paragraph)

// Render the React DOM h1 element on page
root.render(header);
