import {HfInference} from '@huggingface/inference'
import {API_KEY} from "./components/TestFile.tsx";

const SYSTEM_PROMPT = `
Вы — помощник, который получает список ингредиентов, имеющихся у пользователя, и предлагает рецепт, который он мог бы приготовить из некоторых или всех этих ингредиентов. Вам не обязательно использовать все ингредиенты, упомянутые в рецепте. Рецепт может включать дополнительные ингредиенты, которые они не упомянули, но старайтесь не включать слишком много дополнительных ингредиентов.Отформатируйте свой ответ в формате markdown, чтобы его было легче отобразить на веб-странице.
`



const hf = new HfInference(API_KEY)

export async function getRecipeFromMistral(ingredientsArr: Array<string>) {
	const ingredientsString = ingredientsArr.join(", ")
	try {
		const response = await hf.chatCompletion({
			model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
			messages: [
				{role: "system", content: SYSTEM_PROMPT},
				{role: "user", content: `У меня есть список игредиентов ${ingredientsString}. Пожалуйста, посоветуй рецепт отталкиваясь от этого списка продуктов!`},
			],
			max_tokens: 1024,
		})
		return response.choices[0].message.content
	} catch (err) {
		console.error(err)
	}
}