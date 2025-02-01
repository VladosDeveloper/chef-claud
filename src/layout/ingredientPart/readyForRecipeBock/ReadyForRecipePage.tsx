import styled from "styled-components";
import {Button} from "../../main/Main.styles.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";



export const ReadyForRecipeBlock = () => {
	return (
		<StyledReadyForRecipeBlock>
		
			<FlexWrapper alignItems={"center" } justifyContent={"space-around"}>
				<OrderBlock>
					<OrderTitle>Ready for a recipe?</OrderTitle>
					<p>Generate a recipe from your list of ingredients.</p>
				</OrderBlock>
				<Button isItRed>Get a recipe</Button>
			</FlexWrapper>

		
		</StyledReadyForRecipeBlock>
	);
};

const StyledReadyForRecipeBlock = styled.article`
    border-radius: 8px;
    padding: 24px;
    max-width: 594px;
	width: 100%;
    height: 109px;
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