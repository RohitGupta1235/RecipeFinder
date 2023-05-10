import React, { useState, useEffect } from "react";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const RecipeListItem = ({ recipe }) => {
  const [clickedRecipe, setClickedRecipe] = useState(null);

  useEffect(() => {
    if (clickedRecipe) {
      localStorage.setItem(
        clickedRecipe.recipe_id,
        JSON.stringify(clickedRecipe)
      );
      console.log(`Added ${clickedRecipe.title} to Favorites!`);
    }
  }, [clickedRecipe]);

  const handleIcon = () => {
    setClickedRecipe(recipe);
  };

  return (
    <Card className="recipe-card">
      <img src={recipe.image_url} alt="thumbnail" style={{ height: 170 }} />
      <Card.Content>
        <Card.Header content={recipe.title} />
        <Card.Description>
          <h4>{recipe.publisher}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button
          as={Link}
          to={`/recipes/${recipe.recipe_id}`}
          content="Details"
          color="blue"
          size="tiny"
        />
        <Button
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
          size="tiny"
        />
        <FontAwesomeIcon
          onClick={handleIcon}
          icon={faHeart}
          className={clickedRecipe ? "fav-icons-red" : "fav-icons-pink"}
        />
      </Card.Content>
    </Card>
  );
};

export default RecipeListItem;
