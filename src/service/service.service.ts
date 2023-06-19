import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Service } from './service.entity';
import { serviceRegisterDto } from './dto/service.register.dto';
import { ResultDto } from 'src/dto/result.dto';

@Injectable()
export class ServiceService {
  constructor(
    @Inject('SERVICE_REPOSITORY')
    private serviceRepository: Repository<Service>,
  ) { }

  async list(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  async register(data: serviceRegisterDto): Promise<ResultDto> {

    let service = new Service()
    service.title = data.title
    service.img = data.img
    service.city = data.city

    return this.serviceRepository.save(service)
      .then((result) => {
        return <ResultDto>{
          status: true,
          mensagem: "Cadastrado com sucesso!"
        }
      })
      .catch((error) => {
        return <ResultDto>{
          status: false,
          mensagem: "Aconteceu algo de errado!"
        }
      })

  }
}
