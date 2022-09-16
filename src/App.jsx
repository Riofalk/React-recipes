import './App.css';
import DailyRecipe from './components/topBar/DailyRecipe';

function App() {
  const recIngridients = ["Lettuce","Cucumber","Orange","Sprinkle of love"];
  return (
    <>
      <DailyRecipe 
        imgURL = "https://thecookiechrunicles.com/wp-content/uploads/2018/05/english-muffin.jpg"
        name = "Chicken Curry"
        ingridients = {recIngridients}
      />
    </>
  )
}

export default App;
