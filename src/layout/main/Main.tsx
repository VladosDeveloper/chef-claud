import {S} from "./Main.styles.ts";
import {IngredientPart} from "../ingredientPart/IngredientPart.tsx";
import {Container} from "../../components/Container.tsx";
import {useState} from "react";



export const Main = () => {
	
	
	const [ingredients, setIngredients] = useState<Array<string>>([]);
	
	const onClickHandler = () => {
		console.log();
	}
	
	const submitHandle = (event) => {
		// Если полей в форме будет много, удобнее всего будет использовать
		// const fields = Object.fromEntries(event.currentTarget)
		
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const newIngredient = formData.get("ingredient")!.toString()
		setIngredients([newIngredient, ...ingredients])
		event.currentTarget.reset()
	}
	
	return (
		<S.Main>
			<Container>
				<S.FormBlock action="" onSubmit={submitHandle}>
					<S.Input aria-label={"Add Ingredient"} type="text" id={"add-ingredient"} placeholder={"Add" +
						" Ingredient"} name={"ingredient"}/>
					<S.Button onClick={onClickHandler}>+ Add ingredient</S.Button>
				</S.FormBlock>
				
				{/*Ingredients on hands block*/}
				{ingredients.length > 0 && <IngredientPart data={ingredients} />}
			</Container>
		</S.Main>
	);
};

