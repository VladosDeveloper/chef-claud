import styled from "styled-components";
import {ReadyForRecipeBlock} from "../layout/ingredientPart/readyForRecipeBock/ReadyForRecipePage.tsx";

type CustomListDataProps = {
	data: Array<string>
}

export const CustomList = ({data}: CustomListDataProps) => {
	return (
		<>
			{data.length < 3
				? (<ListIngredients>
						{data.map((ingr, i) => {
							return <li key={i}>{ingr}</li>
						})}
						<p>Chief needs {3 - data.length} more ingredients...</p>
					</ListIngredients>
				
				)
				: (<ListIngredients>
					{data.map((ingr, i) => {
						return <li key={i}>{ingr}</li>
					})}
					<ReadyForRecipeBlock/>
				</ListIngredients>)
			}
		</>
	);
};


 export const ListIngredients = styled.ul`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.55556;
    color: #475467;

    li {
        margin-left: 20px;
        text-transform: capitalize;
    }

    p {
        padding: 15px 0;
    }
`