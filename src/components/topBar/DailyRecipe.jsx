import "./dailyRecipe.css"

const DailyRecipe = ({imgURL, name, ingridients}) => {
  return (
    <div className="recipe">
      <h1 className="dailyRecipeLabel">Your Daily Recipe:</h1>
      <div className="recipeRapper">
        <div className="imgContainer">
          <img src={imgURL} alt="Tasty-Meal" className="mealImg" />
        </div>
        <div className="recipeContainer">
          <h1 className="recipeName">{name}</h1>
          <ul className="ingridients">
          {
            ingridients.map(ingridient => {
              return <li>{ingridient}</li>
            })
          }
          </ul>
        </div>


      </div>
    </div>
  )
}

export default DailyRecipe