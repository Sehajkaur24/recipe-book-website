import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { RecipeModule } from './recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './core/database.config';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    AuthModule,
    RecipeModule,
    CoreModule,
    TypeOrmModule.forRoot(dbConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
