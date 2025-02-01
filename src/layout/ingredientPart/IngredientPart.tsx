import styled from "styled-components";
import {Title} from "../../components/Title.tsx";
import {CustomList} from "../../components/CustomList.tsx";

type IngredientsList = {
	data: Array<string>
}

export const IngredientPart = ({data}: IngredientsList) => {
	console.log(data.length);
	return (
		<StyledIngredientPart>
			<Title title={"Ingredients on hand:"}/>
			
			<CustomList data={data} />
			
			{/*<ReadyForRecipeBlock/>*/}
		</StyledIngredientPart>
	);
};


const StyledIngredientPart = styled.article`

`

