import { Exclude } from 'class-transformer';
import { Recipe } from 'src/recipe/entities/recipe.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Exclude({ toPlainOnly: true })
  @Column()
  password!: string;

  @Exclude({ toPlainOnly: true })
  @OneToMany(() => Recipe, (recipe) => recipe.user)
  recipes: Recipe[];
}
