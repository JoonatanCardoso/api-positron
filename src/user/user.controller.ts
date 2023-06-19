import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { userRegisterDto } from './dto/user.register.dto';
import { ResultDto } from 'src/dto/result.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('list')
  async list(): Promise<User[]> {
    return this.userService.list();
  }

  @Post()
  async register(@Body() data: userRegisterDto): Promise<ResultDto> {
    return this.userService.register(data)
  }
}
