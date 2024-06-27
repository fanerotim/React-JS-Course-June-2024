var htmlContainer = document.querySelector('.root');

var root = ReactDOM.createRoot(htmlContainer);

var heading = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello JSX from React!'
    ),
    React.createElement(
        'p',
        null,
        'Random paragraph with no meaning'
    ),
    React.createElement(
        'h2',
        null,
        'Second heading that tests Babel'
    )
);

root.render(heading);