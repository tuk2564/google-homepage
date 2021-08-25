import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <img className='app_share' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAoklEQVR42mNgSPvPQAZ2AOKZQPwAimdCxRBqyDT0DBD/R8NnUAwnw+CZWAyF4ZmUGPwAj8EPBp3BzkB8mdSgwBfTMkC8EsmAW8RGHq6YPgu14DOUD6IrgNiF2OSGL6ZheDUQyxEdbEREyCcgdiU5kkmKaTIMxhcUlylxMa7Iu0VpGONKbqDYL6ckVRDCZKdjmua84VkI0bQ8plkNQrM6jygMAH2nSPYgx5jtAAAAAElFTkSuQmCC' alt='share' data-atf='1' data-frt='0' />
    </div>
  );
}

export default App;
