import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://isllkewo:Y30XMmcKBRnq4t_TBYzMqREm60GPWv56@prawn.rmq.cloudamqp.com/isllkewo',
        ],
        queue: 'main_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
