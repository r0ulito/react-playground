const helloWorld = React.createElement('h1', {}, 'Hello world!');


// mauvaise pratique


//ReactDOM.render(helloWorld, document.body);

// Meilleure pratique mais pas encore LA meilleure

ReactDOM.render(helloWorld, document.querySelector('#app'));
