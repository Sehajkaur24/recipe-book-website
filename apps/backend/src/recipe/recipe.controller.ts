import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';
import { User } from 'src/auth/entities/user.entity';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @ApiBearerAuth()
  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Body() createRecipeDto: CreateRecipeDto,
    @Req() request: Request,
  ) {
    const user = request['user'] as User;
    return this.recipeService.create(createRecipeDto, user);
  }
}
