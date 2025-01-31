import styled from "styled-components";

type IngredientsList = {
	data: Array<string>
}

export const IngredientPart = (props:IngredientsList) => {
	
	return (
		<StyledIngredientPart>
			<Title>Ingredients on hand:</Title>
			<ListIngredients>
				{props.data.map((ingr,i) => {
					return <li key={i}>{ingr}</li>
				})}
			</ListIngredients>
		</StyledIngredientPart>
	);
};


const StyledIngredientPart = styled.article`

`

const Title = styled.h2`
    font-weight: 600;
    font-size: 30px;
    line-height: 1.26667;
    color: #141413;
	margin-bottom: 24px;
`

const ListIngredients = styled.ul`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.55556;
    color: #475467;
	margin-bottom: 48px;
	li {
        margin-left: 20px;
		text-transform: capitalize;
	}
`