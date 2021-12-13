//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const firstName = 'r0ulito';
const lastName = 'formateur';


// Solution sans bonus
const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.substr(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;

ReactDOM.render(helloWorld, document.querySelector('#app'));
