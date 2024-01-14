import './App.css';
import Container from './components/Container';
import { CityProvider } from './context/CityContext';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <CityProvider>
          <Container />
        </CityProvider>
      </WeatherProvider>
    </div>
  );
}

export default App;
