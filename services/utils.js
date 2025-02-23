const DIVIDER = "\n-----------------------------\n";
const NOT_FOUND_ERR_MSG = 'not found';

const searchByName = (name, beverages) => {
    const recipe = beverages.find(beverage => beverage.name.toLowerCase() === name.toLowerCase());

    if (!recipe) {
      return NOT_FOUND_ERR_MSG;
    }

    const namePrint = `Name: ${recipe.name}`;
    const ingredientsPrint = `Ingredients: ${recipe.ingredients.join(', ')}`;
    const instructionsPrint = `Instructions:\n${recipe.instructions.map((instruction, idx) => `${idx + 1}. ${instruction}`).join('\n')}`

    return `${DIVIDER}${namePrint}\n${ingredientsPrint}\n${instructionsPrint}${DIVIDER}`;
}

const filterByCategory = (category, beverages) => {
    const recipes = beverages.filter(beverage => beverage.category.toLowerCase() === category.toLowerCase());

    if (recipes.length === 0) {
        return NOT_FOUND_ERR_MSG;
    }

    const result = recipes.map(({ name, category, description }) => {
        const namePrint = `Name: ${name}`;
        const categoryPrint = `Category: ${category}`;
        const descriptionPrint = `Description: ${description}`;

        return `${namePrint}\n${categoryPrint}\n${descriptionPrint}`;
    }).join('\n\n');

    return `${DIVIDER}${result}${DIVIDER}`;
}

const filterByIngredients = (ingredient, beverages) => {
    const recipes = beverages.filter(beverage => beverage.ingredients.includes(ingredient.toLowerCase()));

    if (recipes.length === 0) {
        return NOT_FOUND_ERR_MSG;
    }

    const result = recipes.map(({ name, ingredients, description }) => {
        const namePrint = `Name: ${name}`;
        const categoryPrint = `Ingredients: ${ingredients.join(', ')}`;
        const descriptionPrint = `Description: ${description}`;

        return `${namePrint}\n${categoryPrint}\n${descriptionPrint}`;
    }).join('\n\n');

    return `${DIVIDER}${result}${DIVIDER}`;
}

module.exports = {
    searchByName,
    filterByCategory,
    filterByIngredients
};