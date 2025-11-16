import {createComparison, defaultRules} from "../lib/compare.js";

// @todo: #4.3 — настроить компаратор
const compare = createComparison(defaultRules);

export function initFiltering(elements, indexes) {
    // @todo: #4.1 — заполнить выпадающие списки опциями
    Object.keys(indexes)                                    // Получаем ключи из объекта
      .forEach((elementName) => {                        // Перебираем по именам
        elements[elementName].append(                    // в каждый элемент добавляем опции
            ...Object.values(indexes[elementName])        // формируем массив имён, значений опций
                      .map(name => {                        // используйте name как значение и текстовое содержимое
                        const newOption = document.createElement('option');
                        newOption.value = name;
                        newOption.textContent = name;
                        return newOption;                             // @todo: создать и вернуть тег опции
                      })
        )
     })

    return (data, state, action) => {
        return data.filter(row => compare(row, state));
    }
}