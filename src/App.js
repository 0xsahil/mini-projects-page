import './App.css';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className='relative max-w-3xl mx-auto flex items-center flex-col ' >
          <Nav />
          <Projects />
        </div>
    </>
  );
}

export default App;
