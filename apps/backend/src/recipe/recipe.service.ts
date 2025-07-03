import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepo: Repository<Recipe>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto, user: User) {
    const recipe = this.recipeRepo.create({
      name: createRecipeDto.name,
      description: createRecipeDto.description,
      ingredients: createRecipeDto.ingredients,
      instructions: createRecipeDto.instructions,
      user,
    });
    return this.recipeRepo.save(recipe);
  }

  async findAll(user: User) {
    return this.recipeRepo.find({ where: { user } });
  }
}
