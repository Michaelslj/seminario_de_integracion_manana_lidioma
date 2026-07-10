// src/domain/ports/category.repository.ts
import type { CategoryStats } from '../entities/category-stats.entity'
import type { Category } from '../entities/category.entity'

export interface CategoryRepository {
  getCategories(): Promise<Category[]>
getStats(): Promise<CategoryStats>

}