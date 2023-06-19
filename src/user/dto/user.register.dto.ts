import { ApiProperty } from "@nestjs/swagger";

export class userRegisterDto {
  @ApiProperty({
    example: 'Teste',
    description: 'Informe o nome do usuário.',
  })
  nome: string;

  @ApiProperty({
    example: '98,90',
    description: 'Informe o valor de conta do usuário.',
  })
  orcamento: number;

  @ApiProperty({
    example: '67999999999',
    description: 'Informe o telefone do usuário.',
  })
  phone: string;
}
