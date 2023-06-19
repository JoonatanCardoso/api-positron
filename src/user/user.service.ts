import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { userRegisterDto } from './dto/user.register.dto';
import { ResultDto } from 'src/dto/result.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) { }

  async list(): Promise<User[]> {
    return this.userRepository.find();
  }

  async register(data: userRegisterDto): Promise<ResultDto> {

    let user = new User()
    user.name = data.nome
    user.orcamento = data.orcamento
    user.phone = data.phone

    return this.userRepository.save(user)
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
