import React, { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("The response of network is not correct");
    }
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("An error appeared for fetch operation", error);
    return [];
  }
}

function MealIdeasComponent({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const cleanedIngredient = ingredient
      .split(",")[0]
      .trim()
      .replace(
        /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{E000}-\u{F8FF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu,
        ""
      ); 

    const mealIdeas = await fetchMealIdeas(cleanedIngredient);
    setMeals(mealIdeas);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]);
    }
  }, [ingredient]);

  return (
    <div>
      <h1 className="text-xl md:text-4xl font-medium mb-1 md:mb-8 ml-4 md:ml-20 p-2 md:p-8 text-gray-400 md:text-black shadow-lg
">
        Meal Ideas ↓
      </h1>
      <ul className="margin-left: 5rem;">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal}>
              {meal.strMeal}
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "90px", height: "80px" }}
              />
            </li>
          ))
        ) : (
          <p>No meal selected....</p>
        )}
      </ul>
    </div>
  );
}

export default MealIdeasComponent;