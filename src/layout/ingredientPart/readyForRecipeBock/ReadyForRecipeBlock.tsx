import styled from "styled-components";
import {Button} from "../../main/Main.styles.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {RecipeBlock} from "../../RecipeBlock/RecipeBlock.tsx";
import {useState} from "react";
import {getRecipeFromMistral} from "../../../ai.ts";

type GetRecipeDataType = {
	data: Array<string>
}


export const ReadyForRecipeBlock = (props: GetRecipeDataType) => {
	
	const [recipe, setRecipe] = useState<string>("");
	
	async function getRecipe(){
		 const RecipeMarkDown = await  getRecipeFromMistral(props.data)
		setRecipe(RecipeMarkDown!);
	}
	
	return (
		<>
			<StyledReadyForRecipeBlock>
				<FlexWrapper alignItems={"center"} justifyContent={"space-around"}>
					<OrderBlock>
						<OrderTitle>Готовы получить рецепт?</OrderTitle>
						<p>Создать реуепт из ваших продуктов.</p>
					</OrderBlock>
					<Button isItRed onClick={getRecipe}>Получить рецепт</Button>
				</FlexWrapper>
			
			</StyledReadyForRecipeBlock>
			{recipe && <RecipeBlock recipe={recipe}/>}
		
		</>
	);
};

const StyledReadyForRecipeBlock = styled.article`
    border-radius: 8px;
    padding: 24px;
    max-width: 594px;
    width: 100%;
    background: #f0efeb;
    margin: 48px auto 66px;
`

const OrderBlock = styled.div`
    max-width: 340px;
    width: 100%;

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.42857;
        color: #6b7280;
    }
`

const OrderTitle = styled.h3`
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33333;
    color: #141413;


`