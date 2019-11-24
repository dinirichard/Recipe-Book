package dinirichard.recipe;

import dinirichard.recipe.db.RecipeRepository;
import dinirichard.recipe.domain.IngredientViewModel;
import dinirichard.recipe.domain.RecipeViewModel;
import dinirichard.recipe.model.Ingredient;
//import lombok.var;
import dinirichard.recipe.model.Recipe;
import org.springframework.stereotype.Component;

import java.sql.Date;

@Component
public class Mapper {

    private RecipeRepository recipeRepository;

    public Mapper(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public IngredientViewModel convertToIngredientViewModel(Ingredient entity) {
        var viewModel = new IngredientViewModel();

        viewModel.setId(entity.getId());
        viewModel.setName(entity.getName());
        viewModel.setAmount(entity.getAmount());

        return viewModel;
    }

    public Ingredient convertToNoteEntity(IngredientViewModel viewModel) {
        Ingredient entity;

        if(viewModel.getId() != 0){
            entity = new Ingredient( viewModel.getId(), viewModel.getName(), viewModel.getAmount());

        } else{
            entity = new Ingredient( viewModel.getName(), viewModel.getAmount());
        }
        return entity;
    }

    public RecipeViewModel convertToRecipeViewModel(Recipe entity) {

        var viewModel = new RecipeViewModel();
        viewModel.setId(entity.getId());
        viewModel.setName(entity.getName());
        viewModel.setDescription(entity.getDescription());
        viewModel.setImage(entity.getImage());

        return viewModel;
    }

    public Recipe convertToRecipeEntity(RecipeViewModel viewModel) {
        var note = this.recipeRepository.findById(viewModel.getId()).get();
        Recipe entity;
        if(viewModel.getId() == 0) {
            entity = new Recipe(viewModel.getName(), viewModel.getDescription(), viewModel.getImage());
        } else {
            entity = new Recipe(viewModel.getId(), viewModel.getName(), viewModel.getDescription(), viewModel.getImage());
        }

        return entity;
    }

}
