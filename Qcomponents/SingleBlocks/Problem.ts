export class Problem {
    paint(questionStructure: any) {
        return `
            <p class="question__title">${questionStructure.problem}</p>
        `;
    }
}