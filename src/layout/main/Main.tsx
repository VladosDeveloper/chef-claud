import {S} from "./Main.styles.ts";
import {IngredientPart, Title} from "../ingredientPart/IngredientPart.tsx";
import {Container} from "../../components/Container.tsx";
import {useState} from "react";
import {FormSection} from "./formSection/FormSection.tsx";
import {RecipeBlock} from "../RecipeBlock/RecipeBlock.tsx";



export const Main = () => {
	
	
	const [ingredients, setIngredients] = useState<Array<string>>([]);
	const [recipeShown, setRecipeShown] = useState<boolean>(true);

	
	return (
		<S.Main>
			<Container>
				<FormSection setIngredientsList={setIngredients} ingredientsList={ingredients} />
				
				{/*Ingredients on hands block*/}
				{ingredients.length > 0 ? <IngredientPart data={ingredients} /> : <Title>Add some product...</Title>}
				
				{recipeShown && <RecipeBlock/>}
			</Container>
		</S.Main>
	);
};

