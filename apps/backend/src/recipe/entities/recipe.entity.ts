import { Exclude } from 'class-transformer';
import { User } from 'src/auth/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  ingredients?: string;

  @Column()
  instructions!: string;

  @ManyToOne(() => User, (user) => user.recipes, { nullable: false })
  user!: User;
}
