import './App.css';
import {useWeb3, useContract} from './hooks/web3';
import CounterAbi from './data/Counter.json';
import {useEffect, useState} from 'react';

function App() {

    //CONST
    const provider = "ws://127.0.0.1:8545";
    const defaultAccount = "0xb6f58F474d068a347Be62216da2B6c1dDDbaAdE1";
    const contractAddress = "0x4cA2aC5D4B72be09B252bF0337c958bFad0C66ad";

    //HOOKS
    const web3 = useWeb3(provider, defaultAccount);
    const counterContract = useContract(web3, CounterAbi, contractAddress);
    const [counterValue, setCounterValue] = useState(0);


    useEffect(async () => {
        setCounterValue(await counterContract.methods.counter().call());
    }, [])

    async function handleIncrement() {
        await counterContract.methods.increment().send({from: defaultAccount});
        setCounterValue(await counterContract.methods.counter().call());
    }

    async function handleDecrement() {
        await counterContract.methods.decrement().send({from: defaultAccount});
        setCounterValue(await counterContract.methods.counter().call());
    }

    return (
    <div className="App">
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <span>Valor actual: {counterValue}</span>
    </div>
    );
}

export default App;
