var htmlContainer = document.querySelector('.root');

var root = ReactDOM.createRoot(htmlContainer);

var heading = React.createElement('h1', null, 'Hello JSX from React!');

root.render(heading);