
// Partie 2
function App(props) {
  const [base, setBase] = React.useState('none')
  const [decimal, setDecimal] = React.useState('');
  const [binary, setBinary] = React.useState('');

  const handleChange = (value, base) => {    
    switch(base) {
      case "binary":
        setBinary(parseInt(value, 10).toString(2))
        setDecimal(value);
        break;

      case "decimal":
        setDecimal(parseInt(value, 2).toString(10))
        setBinary(value);
        break;
    }

  }


  return (
    <React.Fragment>
      <BaseNumberInput 
        number={decimal} 
        onChangeBase={handleChange} 
        base="binary" 
        text="décimale"  />
      <BaseNumberInput 
        number={binary} 
        onChangeBase={handleChange} 
        base ="decimal" 
        text="binaire" />
    </React.Fragment>
  )
}


function BaseNumberInput({base, text, number, onChangeBase}) {
  const handleChange = ({target: {value}}) => {
    onChangeBase(value, base);
    console.log(base);

  }


  return(
      <React.Fragment>
        <p>Base {text} </p>
        <input value={number} onChange={handleChange} />
      </React.Fragment>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);


