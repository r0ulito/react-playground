//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const firstName = 'toto';
const lastName = 'glandu';


// Solution sans bonus
const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.substr(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;



/* 
// Solution avec bonus

function formatFirstName(firstName) {
    return firstName[0].toUpperCase() + firstName.substr(1);
}

function formatLastName(lastName){
    return lastName.toUpperCase();
    
}

const helloWorld = <h1>Hello <span>{formatFirstName(firstName)}</span> <span className="red-text">{formatLastName(lastName)}</span></h1>;
 */



ReactDOM.render(helloWorld, document.querySelector('#app'));
