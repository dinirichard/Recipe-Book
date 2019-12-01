export class ToCook {
    public id: number;
    public user_id: number;
    public recipe_id: number;
    public recipe_name: string;
    public cook_date: Date;

    constructor(recipe_id: number, cook_date: Date) {
        this.recipe_id = recipe_id;
        this.cook_date = cook_date;
    }
}