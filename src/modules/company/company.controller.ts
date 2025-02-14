import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dtos/create-company.dto";
import { UpdateCompanyDto } from "./dtos/update-company.dto";

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() data: CreateCompanyDto) {
    return this.companyService.create(data);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    // return this.companyService.findById(id);
  }

  @Get('all')
  async findAll() {
    return this.companyService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateCompanyDto) {
    // return this.companyService.update(id, data);
  }

  // Rota para deletar uma empresa por ID
  @Delete(':id')
  async delete(@Param('id') id: string) {
    // return this.companyService.delete(id);
  }
}