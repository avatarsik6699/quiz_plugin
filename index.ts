import { Controller } from "./Controller/Controller";
//У объекта Test должны быть методы
//init - инициализация(создание теста)
//destroy - уничтожение теста
//reset - создать по новой?
//remove - удаление (скрытие)?
// ещё можно добавить выбор анимации
// declare global {
//     interface Window {$: any}
// }
(function(){
    const $ = function(selector): void {
        if (!(this instanceof $) ) {
        return new $(selector);
      }
      this.selector = document.querySelector(this.selector);
    }  
    $.fn = $.prototype;
    
    window.$ = $;
})()

window.$.fn.testCreate = function(anchor, settings) {
    const controller = new Controller(anchor, settings);
    console.log(controller)
};

window.$('.questions').testCreate('.questions',{
    // type: 'oneanswer',// multipleanswers, openanswers // определяется в самом вопросе
    format: 'row',
    description: false,
    help: false,
    draggable: false,
    resizeable: false,
    color: 'red',
    amount: 10,
});

