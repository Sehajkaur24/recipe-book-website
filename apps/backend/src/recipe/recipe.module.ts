import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/core/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Recipe } from './entities/recipe.entity';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: '1h',
      },
    }),
    TypeOrmModule.forFeature([User, Recipe]),
  ],
  controllers: [RecipeController],
  providers: [RecipeService, AuthService],
})
export class RecipeModule {}
