import { Answers } from '../Qcomponents/SingleBlocks/Answers';
import { Problem } from '../Qcomponents/SingleBlocks/Problem';
import { QFactory } from './QFactory';

export class SingleAnswerFactory implements QFactory  {
    private elements = [Problem, Answers];
    
    constructor() {}
    
    //создает экземпляры элементов вопроса в виде массиве [title, descr, answers]
    createElements():any[] {
        return this.elements.map( el => {
            return new el();
        })
    }
}