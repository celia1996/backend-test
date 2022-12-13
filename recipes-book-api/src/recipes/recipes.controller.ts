import { RecipesService } from './recipes.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getAllRecipes(): Promise<any> {
    return this.recipesService.getAll();
  }

  @Post()
  async createRecipe(@Body() payload: any): Promise<any> {
    return this.recipesService.createRecipe(payload);
  }
}
