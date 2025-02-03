import {S} from "./Main.styles.ts";
import {IngredientPart} from "../ingredientPart/IngredientPart.tsx";
import {Container} from "../../components/Container.tsx";
import {useState} from "react";
import {FormSection} from "./formSection/FormSection.tsx";
import {Title} from "../../components/Title.tsx";



export const Main = () => {
	
	const [ingredients, setIngredients] = useState<Array<string>>([]);
	
	return (
		<S.Main>
			<Container>
				{/* Section holds form */}
				<FormSection setIngredientsList={setIngredients} ingredientsList={ingredients}/>
				{/* Ingredients on hands block */}
				{ingredients.length > 0 ? <IngredientPart data={ingredients}/> : <Title title={"Добавьте еще" +
					" продукт..."}/>}
			</Container>
		</S.Main>
	);
};

