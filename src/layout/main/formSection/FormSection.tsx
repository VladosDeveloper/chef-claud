import {Button, S} from "../Main.styles.ts";


type FormSectionPropsType = {
	ingredientsList: Array<string>
	setIngredientsList: (string: Array<string>) => void
	
}

export const FormSection = ({ingredientsList, setIngredientsList}: FormSectionPropsType) => {
	
	
	
	const submitHandle = (event) => {
		// Если полей в форме будет много, удобнее всего будет использовать
		// const fields = Object.fromEntries(event.currentTarget)
		
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const newIngredient = formData.get("ingredient")!.toString()
		setIngredientsList([newIngredient, ...ingredientsList])
		event.currentTarget.reset()
	}
	
	return (
		<S.FormBlock action="" onSubmit={submitHandle}>
			<S.Input required aria-label={"Add Ingredient"} type="text" id={"add-ingredient"} placeholder={"Add" +
				" Ingredient at least three"} name={"ingredient"}/>
			<Button>+ Add ingredient</Button>
		</S.FormBlock>
	);
};
