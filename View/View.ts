import { makeTemplateQuestion } from "../Helpers/Template";
import { Selector } from "./Selector";

export class View {
    private domAnchor : HTMLElement;
    private Qtype : string = 'singleanswer';
    private selector: any;
    private questionElements: any[] = [];
    private template: any;
    constructor(
                anchor:string, //ошибка, view не работает с dom
        private Modelstate: object,
        private questions: object[],
        ) {
            this.domAnchor = document.querySelector(anchor); // это должен делать Dom, а не view!!!
            this.selector = new Selector; //возвращает нужную фабрику
            this.setDefaultQuestionElements();
            this.render();
        }

    // отрисовка всех вопросов
    private render() : void {
        this.questions.map( question => {
            if (this.isDefaultType(question)) {
                this.addQuestion(question);
            } else {
                this.Qtype = question.type;
                this.createQuestionElements();
                this.addQuestion(question);
            }
        });
    }

    // прикрепляет собранный question к domAnchor
    private addQuestion(question: object) : void {
        let content = this.createQuestionContent(question);
        this.template = makeTemplateQuestion(content);
        this.domAnchor.insertAdjacentHTML('beforeend', this.template);
    }

    // создает instances компонентов questions (problem, answers...)
    private createQuestionElements():void {
        this.questionElements = this.selector
                .getFactory(this.Qtype)
                .createElements();
    }

    // дефолтные instances (нужно для кэширования)
    // чтобы не обращаться лишний раз к factory
    // если у нас идут однотипные type
    private setDefaultQuestionElements() {
        this.questionElements = this.selector
        .getFactory(this.Qtype)
        .createElements();   
    }

    // внутреннее содержимое question (problem, answers...)
    private createQuestionContent(question : object) : string {
        let content = '';
        this.questionElements.map(el => {
            content += el.paint(question);
        })
        return content;
    }

    // проверка на то, повторяется type или нет (кэширование)
    private isDefaultType(question : object) : boolean {
        return question.type === this.Qtype;
    }
}