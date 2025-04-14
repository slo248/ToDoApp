import { IsInt, Min } from 'class-validator';

export class PaginationDto {
  @IsInt()
  @Min(0)
  limit: number = 20;

  @IsInt()
  @Min(0)
  offset: number = 0;
}
