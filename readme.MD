## Запуск

    npm install
    npx cypress open

## Структура

- в папке `cypress/integration` находится примеры тестов
- в папке `cypress/pageObjects` находятся примеры паттерна Page Object Model
- в папке `cypress/support` в файле `commands.ts` находятся кастомные команды cypress'a
- в папке `cypress/support` в файле `index.d.ts` размещаются декларации и объявляются типы
- в папке `cypress/plugins` в файле `index.js` указываются настройки при запуске с переменными env:

  npx cypress open --env upstream=dev

- в папке `cypress/fixtures` хранятся заранее подготовленные тестовые данные для использования в тестах
