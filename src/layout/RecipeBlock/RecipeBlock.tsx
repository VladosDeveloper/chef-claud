import styled from "styled-components";
import {Title} from "../../components/Title.tsx";
import Markdown from "react-markdown";

type RecipeProps = {
	recipe: string
}

export const RecipeBlock = (props: RecipeProps) => {
	return (
		<StyledRecipeBlock>
			<Title title={"Рекомендации от шефа	:"}/>
			
			<Markdown >{props.recipe}</Markdown>
		</StyledRecipeBlock>
	);
};

const StyledRecipeBlock = styled.article`
    display: flex;
	flex-direction: column;
    color: #475467;
	padding-bottom: 40px;
	
	h3 {
        color: #000;
        font-weight: 500;
		font-size: 24px;
		margin-bottom: 15px;
	}
	
	h4 {
        color: #000;
        margin-top: 20px;
        font-weight: 500;
	}
	
	ul {
		margin-left: 30px;
	}
	ol {
		margin-left: 30px;
	}
	
	li {
		padding: 5px 0;
	}
	
	p {
        color: #000;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.2;
        margin-bottom: 20px;
	}
	
`