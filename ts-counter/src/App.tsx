import './App.css';
import { Logos } from './Logos';
import { Counter } from './Counter';

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
    return (
        <>
            <Header2 firstName="Andrey" />
            <Logos />
            <Header />
            <Counter />
        </>
    );
}

export default App;
