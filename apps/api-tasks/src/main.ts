import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilite o CORS para que o BFF (na porta 3001) consiga acessar esta API
  app.enableCors();

  // No Express (padrão), passamos apenas a porta, ou a porta e o host separadamente
  await app.listen(3002);

  console.log(`✅ Microserviço API-TASKS rodando em: http://localhost:3002`);
}
bootstrap();