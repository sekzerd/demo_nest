import { Controller, Get } from '@nestjs/common';

// import { UsersService } from '@/service/users';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    // let user  = new UsersService();
    // retrun  UsersService.findAll();
    const p = { name: 'jack', age: 18, status: false };
    return JSON.stringify(p);
  }
}
