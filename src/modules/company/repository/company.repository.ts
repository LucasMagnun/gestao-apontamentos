import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateCompanyDto } from "../dtos/create-company.dto";

@Injectable()
export class CompanyRepository {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(data: CreateCompanyDto) {
    return await this.prisma.company.create({data});
  }

  async findMany() {
    return await this.prisma.company.findMany();
  }
}