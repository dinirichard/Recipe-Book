package dinirichard.recipe.service;

import dinirichard.recipe.Mapper;
import dinirichard.recipe.db.RecipeRepository;
import dinirichard.recipe.db.ToCookListRepo;
import dinirichard.recipe.domain.IngredientViewModel;
import dinirichard.recipe.domain.ToCookListViewModel;
import dinirichard.recipe.model.Ingredient;
import dinirichard.recipe.model.Recipe;
import dinirichard.recipe.model.Tocook_list;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CookListService {

    @Autowired
    private ToCookListRepo toCookListRepo;

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private Mapper mapper;

    @Transactional
    public ToCookListViewModel save(ToCookListViewModel toCookListViewModel) {

        Tocook_list toCookEntity = mapper.convertToCookEntity(toCookListViewModel);
        // save note instance to db
        toCookListRepo.save(toCookEntity);
        return mapper.convertToCookListViewModel(toCookEntity);
    }

    public List<ToCookListViewModel> getCookListByUserId(Integer userId) {

//        List<Tocook_list> ingredients = new ArrayList<>();

        List<Tocook_list> recipes = toCookListRepo.getToCook_listByUser_id(userId);

//        if (recipe.isPresent()) {
//            ingredients = toCookListRepo.getTocook_listByUser_id(userId);
////            ingredients = ingredientRepository.getIngredientsByRecipesId(recipeId);
//        }

        // map to note view model
        return recipes.stream().map(recipe -> mapper.convertToCookListViewModel(recipe)).collect(Collectors.toList());
    }

    public ToCookListViewModel updateCookList(ToCookListViewModel toCookListViewModel) {
        Tocook_list entity = mapper.convertToCookEntity(toCookListViewModel);

        toCookListRepo.save(entity);

        return mapper.convertToCookListViewModel(entity);
    }

}
