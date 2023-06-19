import { ApiProperty } from "@nestjs/swagger";

export class serviceRegisterDto {
  @ApiProperty({
    example: 'Titulo',
    description: 'Informe o titulo do serviço.',
  })
  title: string;

  @ApiProperty({
    example: 'https://www.imagempng.com.br/imagem-solar.png',
    description: 'Informe o link da imagem do serviço.',
  })
  img: string;

  @ApiProperty({
    example: 'Dourados - MS',
    description: 'Informe o nome da cidade onde foi realizado o serviço.',
  })
  city: string;
}
