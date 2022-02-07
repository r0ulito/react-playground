const helloWorld = React.createElement('h1', {}, 'Hello world!');


// mauvaise pratique


//ReactDOM.render(helloWorld, document.body);

ReactDOM.render(helloWorld, document.querySelector('#app'));
