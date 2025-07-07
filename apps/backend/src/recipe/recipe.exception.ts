import { HttpException, HttpStatus } from '@nestjs/common';

export class RecipeNotFound extends HttpException {
  constructor() {
    super(
      {
        code: 'RECIPE_NOT_FOUND',
        error: 'Recipe Not Found',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
