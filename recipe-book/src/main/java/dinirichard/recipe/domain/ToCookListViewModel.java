package dinirichard.recipe.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ToCookListViewModel {

    private int id;

    private Integer user_id;

    @NotNull
    private Integer recipe_id;

    private String recipe_name;

    private Date cook_date;
}
