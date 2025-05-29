import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section>
      <h2>Chef Claude Reccomends: </h2>
      <ReactMarkdown>
          {props.recipe || "No recipe found. Please try again."}
        </ReactMarkdown>
    </section>
  );
}
