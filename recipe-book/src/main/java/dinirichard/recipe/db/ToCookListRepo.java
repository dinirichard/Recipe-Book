package dinirichard.recipe.db;

import dinirichard.recipe.model.Tocook_list;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ToCookListRepo extends JpaRepository<Tocook_list, Integer> {

        @Query("select new Tocook_list(Tocook_list.id, Tocook_list.user_id, Tocook_list.recipe_id, Tocook_list.cook_date)" +
            "from Tocook_list " +
            "where Tocook_list.id = :userId")
        List<Tocook_list> getTocook_listByUser_id(@Param("userId")int userId);
}
