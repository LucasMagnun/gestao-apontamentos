import { IsOptional, IsString } from "class-validator";

export class UpdateCompanyDto {
  @IsOptional()
  @IsString()
  readonly companyName?: string;

  @IsOptional()
  @IsString()
  readonly companyFantasyName?: string;

  @IsOptional()
  @IsString()
  readonly cnpj?: string;

  @IsOptional()
  @IsString()
  readonly address?: string;

  @IsOptional()
  @IsString()
  readonly city?: string;

  @IsOptional()
  @IsString()
  readonly state?: string;

  @IsOptional()
  @IsString()
  readonly email?: string;

  @IsOptional()
  @IsString()
  readonly phone?: string;
}
