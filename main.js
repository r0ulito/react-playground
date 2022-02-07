//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const firstName = 'r0ulito';
const lastName = 'formateur';


// Solution sans bonus
const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;



/**
 * 
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello <span>{formatFirstName(firstName)}</span>{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */

ReactDOM.render(helloWorld, document.querySelector('#app'));
