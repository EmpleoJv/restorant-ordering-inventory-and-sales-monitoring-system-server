import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    // throw new Error('Method not implemented.');
    this.$connect()
      .then(() => console.log('conekted Pare!'))
      .catch((err) => {
        console.log(err);
      });
  }
}
