import styled from "styled-components";
import {CustomList} from "../../components/CustomList.tsx";
import {Title} from "../../components/Title.tsx";

type IngredientsList = {
	data: Array<string>
}

export const IngredientPart = ({data}: IngredientsList) => {
	return (
		<StyledIngredientPart>
			{/*Present data of list*/}
			<Title title={"Ваши ингредиенты:"}/>
			<CustomList data={data}/>
		</StyledIngredientPart>
	);
};


const StyledIngredientPart = styled.article`

`

