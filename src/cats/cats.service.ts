import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: string[] = ['Cat', 'Meow'];
    
    create(cat: string) {
        this.cats.push(cat);
    }
    
    findAll(): string[] {
        return this.cats;
    }
}
