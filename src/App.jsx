import BackgroundImage from "./Components/BackgroundImage";
import WeatherCard from "./Components/WeatherCard";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <WeatherCard />;
    </div>
  );
};

export default App;

{
  /* <div className="relative">
<BackgroundImage>
  <div className="relative z-100">
    <WeatherCard />
  </div>
</BackgroundImage>
</div> */
}

// return <WeatherCard />;
