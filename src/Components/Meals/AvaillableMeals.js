import  classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import { useEffect, useState } from 'react';

const AvaillableMeal = () =>{
  const [meals, setMeals] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
 const [httpError,setHttpError]= useState();

  useEffect(() =>{
    const fetchMeals = async () =>{
      const response = await   fetch('https://meals-9384.asia-southeast1.firebasedatabase.app/meals.json');
      if(!response.ok){
        throw new Error("Something goes wrong");
      }
      const responseData = await response.json();
      const loadedmeal = [];
       for (const key in responseData){
         loadedmeal.push({
           id: key,
           name: responseData[key].name,
           description: responseData[key].description,
           price: responseData[key].price

         });
       }
    setMeals(loadedmeal);
    setIsLoading (false);
    };
   
    fetchMeals().catch(error =>{
      setIsLoading (false);
      setHttpError(error.message);
    });
 
  },[]);
  if(isLoading){
    return(
      <section className={classes.MealsLoading}>
        <p>Loading ...</p>
      </section>
    );
  }
  if (httpError){
    return(
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

    const mealsList = meals.map(meal =>
    <MealItem 
        id={meal.id} // this is new!
        key={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
    />);
return(
<section className={classes.meals}>
    <Card>
        <ul>
            {mealsList}
        </ul>
    </Card>
</section>
);
}

export default AvaillableMeal;