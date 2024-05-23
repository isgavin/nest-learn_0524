import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRespository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRespository.find();
  }
  async findOne(id: number): Promise<User> {
    return this.usersRespository.findOneBy({ id });
  }
  async create(user: User): Promise<User> {
    return this.usersRespository.save(user);
  }
  async update(id: number, user: Partial<User>): Promise<void> {
    await this.usersRespository.update(id, user);
  }
  async remove(id: number): Promise<void> {
    await this.usersRespository.delete(id);
  }
}
