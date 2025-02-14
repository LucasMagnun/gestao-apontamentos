import { Body, Controller, Get, Post } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dtos/create-company.dto";

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() data: CreateCompanyDto) {
    return this.companyService.create(data);
  }

  @Get('all')
  async findAll() {
    return this.companyService.findAll();
  }
}