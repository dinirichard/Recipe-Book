package dinirichard.recipe.service;

import dinirichard.recipe.Mapper;
import dinirichard.recipe.db.RecipeRepository;
import dinirichard.recipe.domain.RecipeViewModel;
import dinirichard.recipe.model.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;
    @Autowired
    private Mapper mapper;

    @Transactional
    public RecipeViewModel save(RecipeViewModel notebookViewModel){

        Recipe recipeEntity = mapper.convertToRecipeEntity(notebookViewModel);

        // save notebookEntity instance to db
        this.recipeRepository.save(recipeEntity);


        return mapper.convertToRecipeViewModel(recipeEntity);
    }

    public List<RecipeViewModel> getAllRecipe() {
        List<Recipe> allCategories = recipeRepository.findAll();

        return allCategories
                .stream()
                .map(mapper::convertToRecipeViewModel)
                .collect(Collectors.toList());
    }

    public RecipeViewModel updateRecipe(RecipeViewModel recipeViewModel) {

        Recipe entity = mapper.convertToRecipeEntity(recipeViewModel);

        recipeRepository.save(entity);

        return mapper.convertToRecipeViewModel(entity);
    }
    
    
}
