import './App.css';
import { Logos } from './Logos';
import { Counter } from './Counter';
import { useState } from 'react';

function Header() {
    return <h1>Vite + React</h1>;
}

type Header2props = {
    firstName: string;
};
const Header2 = ({ firstName }: Header2props) => {
    return <h1>Привет {firstName}</h1>;
};

function App() {
    const [status, setStatus] = useState(true);

    const changeStatus = () => {
        setStatus((prev) => !prev);
    };
    return (
        <>
            <Header2 firstName="Andrey" />
            <Logos />
            <Header />
            <Counter />
            {/* <button onClick={setStatus(!status)}>Сменить статус</button> */}
            <div onClick={changeStatus}>{status ? 'Правда' : 'Ложь'}</div>
        </>
    );
}

export default App;
