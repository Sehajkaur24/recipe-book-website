import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Recipe } from 'src/recipe/entities/recipe.entity';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'example',
  database: 'recipe',
  entities: [User, Recipe],
  synchronize: true,
};
