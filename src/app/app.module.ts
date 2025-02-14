import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CompanyModule } from 'src/modules/company/company.module';

@Module({
  imports: [CompanyModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
