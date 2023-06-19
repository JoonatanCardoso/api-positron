import { Body, Controller, Get, Post } from '@nestjs/common';
import { ServiceService } from './service.service';
import { Service } from './service.entity';
import { serviceRegisterDto } from './dto/service.register.dto';
import { ResultDto } from 'src/dto/result.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('services')
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) { }

  @Get('list')
  async list(): Promise<Service[]> {
    return this.serviceService.list();
  }

  @Post()
  async register(@Body() data: serviceRegisterDto): Promise<ResultDto> {
    return this.serviceService.register(data)
  }
}
