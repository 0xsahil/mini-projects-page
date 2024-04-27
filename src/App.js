import './App.css';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <div className='relative w-full max-w-5xl bg-black mx-auto'>
      <div className='relative max-w-3xl mx-auto flex items-center flex-col ' >
          <Nav />
          <Projects />
        </div>
    </div>
  );
}

export default App;
