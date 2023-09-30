import './App.css';
import Navbar from './pages/Navbar';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className='h-screen'>
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
