package dinirichard.recipe;

import dinirichard.recipe.db.RecipeRepository;
import dinirichard.recipe.db.ToCookListRepo;
import dinirichard.recipe.domain.IngredientViewModel;
import dinirichard.recipe.domain.RecipeViewModel;
import dinirichard.recipe.domain.ToCookListViewModel;
import dinirichard.recipe.model.Ingredient;
//import lombok.var;
import dinirichard.recipe.model.Recipe;
import dinirichard.recipe.model.Tocook_list;
import org.springframework.stereotype.Component;

import java.sql.Date;

@Component
public class Mapper {

    private RecipeRepository recipeRepository;
    private ToCookListRepo toCookListRepo;

    public Mapper(RecipeRepository recipeRepository, ToCookListRepo toCookListRepo) {
        this.recipeRepository = recipeRepository;
        this.toCookListRepo = toCookListRepo;
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
        if(viewModel.getId() == 0 ) {
            entity = new Recipe(viewModel.getName(), viewModel.getDescription(), viewModel.getImage());
        } else {
            entity = new Recipe(viewModel.getId(), viewModel.getName(), viewModel.getDescription(), viewModel.getImage());
        }
        return entity;
    }

    public ToCookListViewModel convertToCookListViewModel(Tocook_list entity){
        var viewModel = new ToCookListViewModel();
        viewModel.setId(entity.getId());
        viewModel.setUser_id(entity.getUser_id());
        viewModel.setRecipe_id(entity.getRecipe_id());
        viewModel.setCook_date(entity.getCook_date());
        var recipe = recipeRepository.findById(entity.getRecipe_id());
        recipe.ifPresent(value -> viewModel.setRecipe_name(value.getName()));

        return viewModel;
    }

    public Tocook_list convertToCookEntity( ToCookListViewModel viewModel){
        Tocook_list entity;
        if(viewModel.getId() == 0 ){
            entity = new Tocook_list(viewModel.getRecipe_id(), viewModel.getCook_date());
        } else{
            entity = new Tocook_list(viewModel.getId(), viewModel.getRecipe_id(), viewModel.getCook_date());
        }
        return entity;
    }

}
