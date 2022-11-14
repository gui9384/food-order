import {Fragment} from 'react';
import MealsSummary from './MealsSummary';
import AvaillableMeal from './AvaillableMeals';

const Meals = () =>
{

    return(
    <Fragment>
        <MealsSummary />
        <AvaillableMeal />
    </Fragment>
)}

export default Meals;