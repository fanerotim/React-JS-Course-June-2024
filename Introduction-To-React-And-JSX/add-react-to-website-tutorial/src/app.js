const htmlContainer = document.querySelector('.root');

const root = ReactDOM.createRoot(htmlContainer);

const heading = (
    <header>
        <h1>Hello JSX from React!</h1>
        <p>Random paragraph with no meaning</p>
        <h2>Second heading that tests Babel</h2>
    </header>
);

root.render(heading);