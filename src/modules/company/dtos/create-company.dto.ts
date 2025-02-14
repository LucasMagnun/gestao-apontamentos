import { IsNotEmpty, IsString } from "class-validator";

export class CreateCompanyDto {
    @IsNotEmpty()
    @IsString() 
    readonly companyName: string;

    @IsNotEmpty()
    @IsString() 
    readonly companyFantasyName: string;

    @IsNotEmpty()
    @IsString() 
    readonly cnpj: string;

    @IsNotEmpty()
    @IsString() 
    readonly address: string;

    @IsNotEmpty()
    @IsString() 
    readonly city: string;

    @IsNotEmpty()
    @IsString() 
    readonly state: string;

    @IsNotEmpty()
    @IsString() 
    readonly email: string;

    @IsNotEmpty()
    @IsString() 
    readonly phone: string;
}
