import BackgroundImage from "./Components/BackgroundImage";
import WeatherCard from "./Components/WeatherCard";
import bg from "./assets/bg.png";

const App = () => {
  return (
    <BackgroundImage
      imageUrl={bg}
      alt="bg"
      className="h-screen bg-cover flex items-center font-alimama"
    >
      <WeatherCard />
    </BackgroundImage>
  );
};

export default App;
