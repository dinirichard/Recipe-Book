package dinirichard.recipe.controller;


import dinirichard.recipe.db.ToCookListRepo;
import dinirichard.recipe.domain.IngredientViewModel;
import dinirichard.recipe.domain.ToCookListViewModel;
import dinirichard.recipe.service.CookListService;
import dinirichard.recipe.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;
import java.util.List;

@RestController
@RequestMapping("/api/cook-list")
@CrossOrigin
public class CookListController {

    @Autowired
    private CookListService cookListService;

    @Autowired
    private ToCookListRepo toCookListRepo;

    @PostMapping
    public ToCookListViewModel save(@RequestBody ToCookListViewModel toCookListViewModel, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            throw new ValidationException();
        }

        if(toCookListViewModel.getId() != 0){
            return cookListService.updateCookList(toCookListViewModel) ;
        }

        return cookListService.save(toCookListViewModel);
    }

    @RequestMapping(value = "/byUser/{userId}", method = RequestMethod.GET)
    public List<ToCookListViewModel> byUserId(@PathVariable("userId") Integer userId) {

        return cookListService.getCookListByUserId(userId);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        this.toCookListRepo.deleteById(id);
    }

}
