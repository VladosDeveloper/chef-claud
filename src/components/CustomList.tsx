import {ReadyForRecipeBlock} from "../layout/ingredientPart/readyForRecipeBock/ReadyForRecipeBlock.tsx";
import {ListIngredients} from "./ListIngredients.ts";

type CustomListDataProps = {
	data: Array<string>
}


export const CustomList = ({data}: CustomListDataProps) => {
	
	const ShowIngredientsList = (dataList: Array<string>) => {
		return (
			dataList.map((ingr, i) => {
				return <li key={i}>{ingr}</li>
			})
		)
	}
	
	return (
		<>
			<ListIngredients>
				{ShowIngredientsList(data)}
			</ListIngredients>
			{data.length < 4
				? <p>Шефу нужно еще {4 - data.length} игредиента...</p>
				: <ReadyForRecipeBlock data={data} />
			}
		</>
	);
};


