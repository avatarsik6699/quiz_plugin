import { SingleAnswerFactory } from "../QFactories/SingleAnswerFactory";

export class Selector {
    constructor() {}
    
    public getFactory(type:string):any {
        if (type === 'singleanswer') return new SingleAnswerFactory();
    }
}