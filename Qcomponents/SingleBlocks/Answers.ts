export class Answers {
    private template: any;
    
    constructor() {}
    
    paint(question: any):any {
        let content: string = '';
        question.answers.map( (answer, index) => {
            content += `
            <div class="question__answer${index + 1}">
                <label>
                    <input type="radio" name="answer">
                    <span>${answer}</span>
                </label>
            </div>`
        });

        this.template = `
            ${content}
            <input type="submit" value="answer" class="question__submit">
        `
        return this.template;  
    }


}