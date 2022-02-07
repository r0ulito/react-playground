//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const firstName = 'may';
const lastName = 'Bensaber';


class FirstName extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <span>{this.props.name[0].toUpperCase()+this.props.name.slice(1)}</span>;
    }
}



function LastName(props) {
    return <span className="red-text">{props.name.toUpperCase()}</span>;
}



// Solution sans bonus
const helloWorld = <h1>Hello <FirstName name ={firstName}/> <LastName name={lastName}/></h1>;

ReactDOM.render(helloWorld, document.querySelector('#app'));




