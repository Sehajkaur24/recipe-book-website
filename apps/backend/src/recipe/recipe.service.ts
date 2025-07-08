import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { RecipeNotFound } from './recipe.exception';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepo: Repository<Recipe>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto, user: User): Promise<Recipe> {
    const recipe = this.recipeRepo.create({
      name: createRecipeDto.name,
      description: createRecipeDto.description,
      ingredients: createRecipeDto.ingredients,
      instructions: createRecipeDto.instructions,
      user,
    });
    return this.recipeRepo.save(recipe);
  }

  async update(
    id: number,
    updateRecipeDto: UpdateRecipeDto,
    user: User,
  ): Promise<Recipe> {
    const recipe = await this.recipeRepo.findOne({
      where: { id, user },
    });

    if (!recipe) {
      throw new RecipeNotFound();
    }

    return this.recipeRepo.save({
      ...recipe,
      ...updateRecipeDto,
    });
  }

  async findAll(user: User): Promise<Recipe[]> {
    return this.recipeRepo.find({ where: { user } });
  }

  async findOne(id: number, user: User): Promise<Recipe> {
    const recipe = await this.recipeRepo.findOne({
      where: { id, user },
    });

    if (!recipe) {
      throw new RecipeNotFound();
    }

    return recipe;
  }

  async delete(id: number, user: User): Promise<Recipe> {
    const recipe = await this.recipeRepo.findOne({
      where: { id, user },
    });

    if (!recipe) {
      throw new RecipeNotFound();
    }

    return this.recipeRepo.remove(recipe);
  }
}
