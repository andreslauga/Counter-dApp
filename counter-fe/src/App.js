import './App.css';
import {useWeb3, useContract} from './hooks/web3';

function App() {

    //CONST
    const provider = "ws://127.0.0.1:8545";
    const defaultAccount = "";

    //HOOKS
    const web3 = useWeb3(provider, defaultAccount);
    const contract = useContract(web3, "", "");

    function handleIncrement() {

    }

    function handleDecrement() {
        
    }

    return (
    <div className="App">
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <span>Valor actual: </span>
    </div>
    );
}

export default App;
