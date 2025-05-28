import { HfInference } from "@huggingface/inference";

// export async function fetchRecipe(ingredients) {
//     const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.`;

//     const response = await fetch(
//         "https://api-inference.huggingface.co/models/<your-model-id>", // e.g., bigscience/bloom
//         {
//             method: "POST",
//             headers: {
//                 Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}`,
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 inputs: `${SYSTEM_PROMPT}\n\nUser ingredients: ${ingredients.join(", ")}`
//             }),
//         }
//     );

//     if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Something went wrong!");
//     }

//     const result = await response.json();
//     return result[0]?.generated_text || "No response generated.";
// }




// Make sure you set an environment variable in Scrimba 
// for HF_ACCESS_TOKEN

const hf = new HfInference(process.env.REACT_APP_HF_API_KEY)
const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.`;

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}