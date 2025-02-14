import { Injectable } from "@nestjs/common";
import { Company } from ".prisma/client";
import { CompanyRepository } from "./repository/company.repository";
import { CreateCompanyDto } from "./dtos/create-company.dto";

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {

  }

  async create(data: CreateCompanyDto): Promise<Company>{
    return await this.companyRepository.create(data);
  }

  async findAll(): Promise<Company[]>{
    return await this.companyRepository.findMany();
  }
}
