import styled from "styled-components";
import {Title} from "../../components/Title.tsx";
import {ListIngredients} from "../../components/CustomList.tsx";



export const RecipeBlock = () => {
	return (
		<StyledRecipeBlock>
			<Title title={"Chef Claude Recommends:"}/>
			<StyledRecommendations>Based on the ingredients you have available, I would recommend making a simple a
				delicious Beef Bolognese
				Pasta. Here is the recipe:
			</StyledRecommendations>
			<InstructionsTitle>Beef Bolognese Pasta</InstructionsTitle>
			<InstructionsSubTitle>Ingredients:</InstructionsSubTitle>
			<ListIngredients>
				<li>1 lb. ground beef</li>
				<li>1 onion, diced</li>
				<li>3 cloves garlic, minced</li>
				<li>2 tablespoons tomato paste</li>
				<li>1 (28 oz) can crushed tomatoes</li>
				<li>1 cup beef broth</li>
				<li>1 teaspoon dried oregano</li>
			</ListIngredients>
			<InstructionsSubTitle>Instructions:</InstructionsSubTitle>
			<ol>
				<li>Bring a large pot of salted water to a boil for the pasta.</li>
				<li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a
					wooden spoon, until browned and cooked through, about 5-7 minutes.
				</li>
				<li>
					Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is
					translucent.
				</li>
				<li>
					Stir in the tomato paste and cook for 1 minute.
				</li>
				<li>
					Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.
				</li>
			</ol>
		</StyledRecipeBlock>
	);
};

const StyledRecipeBlock = styled.article`
    display: flex;
	flex-direction: column;
    color: #475467;
	
	${ListIngredients} {
		margin-left: 10px;
	}
	ol {
		margin-left: 30px;
	}
`

const StyledRecommendations = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.2;
	margin-bottom: 20px;
`

const InstructionsTitle = styled.h3`
    color: #000;
	font-size: 20px;
	font-weight: 500;
`
const InstructionsSubTitle = styled.h4`
    color: #000;
	margin-top: 20px;
    font-weight: 500;
`
