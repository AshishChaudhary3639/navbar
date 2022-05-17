import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';
import Links from './components/Links';
import Button from './components/Button';

function App() {
  return (
    <div className='body'>
      <div className='nav'>
        <Logo ></Logo>
        <Links ></Links>
        <Button ></Button>
      </div>
    </div>
  );
}

export default App;
