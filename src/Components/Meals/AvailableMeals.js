import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Veg Momo',
      description: 'Chinese',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Shiddu and Ghee',
      description: 'Himachali Indian!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Ras-Malai',
      description: 'Indian,Purani Delhi',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Veg burger',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  const AvailableMeals=()=>{
      const mealsList=DUMMY_MEALS.map((meal)=>
      <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}>  </MealItem>);
      return(
       <section className={classes.meals}>
           <Card>
             <ul>{mealsList}</ul>
             </Card>
       </section>
      );
  };
  export default AvailableMeals;