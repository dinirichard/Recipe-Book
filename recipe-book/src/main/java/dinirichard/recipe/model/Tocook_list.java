package dinirichard.recipe.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Tocook_list {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private Integer user_id;

    @Column
    private Integer recipe_id;

    @Column
    private Date cook_date;

    @OneToMany
    private List<Recipe> recipes;

    private Tocook_list() {
    }

    public Tocook_list(Integer recipe_id, Date cook_date) {
        this.recipe_id = recipe_id;
        this.cook_date = cook_date;
    }

    public Tocook_list(Integer id, Integer recipe_id, Date cook_date) {
        this(recipe_id, cook_date);
        this.id = id;
    }

    public Tocook_list(Integer id, Integer user_id, Integer recipe_id, Date cook_date) {
        this(id, recipe_id, cook_date);
        this.user_id = user_id;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getRecipe_id() {
        return recipe_id;
    }

    public void setRecipe_id(Integer recipe_id) {
        this.recipe_id = recipe_id;
    }

    public Date getCook_date() {
        return cook_date;
    }

    public void setCook_date(Date cook_date) {
        this.cook_date = cook_date;
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(List<Recipe> recipes) {
        this.recipes = recipes;
    }
}
