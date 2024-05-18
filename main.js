const quizData = [
    {
        question: 'Вопрос 1: Что такое HTML?',
        choices: ['Язык разметки', 'Язык программирования', 'CSS', 'Что-то непонятное'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 2: Что такое CSS?',
        choices: ['Язык разметки', 'Язык программирования', 'Каскадные таблицы стилей'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 3: О чем говорит тэг <p align="right"> ... </p>?',
        choices: ['Текст, заключенный в тэг, будет расположен по центру страницы', 'Текст, заключенный в тэг, будет расположен по левому краю страницы', 'Текст, заключенный в тэг, будет расположен по центру страницы'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 4: Какие единицы измерения могут использоваться для атрибута ширины?',
        choices: ['Пиксели и %', 'Миллиметры и сантиметры', 'Пиксели и миллиметры'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 5: Использование тэга … позволяет добавлять одну строку текста без начала нового абзаца?',
        choices: ['<line/>', '<br/>', '<td/>'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 6: Напишите код HTML, который бы создавал кнопку отправки заполненной формы. Имя кнопки – ОК.',
        choices: ['<input type="ОК" value="Submit"/>', '<p> input type="submit" value="OK"< /p>', '<input type="submit" value="ОК"/>'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 7: Какой тэг при создании страницы добавляет имя страницы, которое будет отображаться в строке заголовка в браузере пользователя?',
        choices: ['<title> … </title>', '<header> … </header>', '<body> … </body>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 8: Заполните поля, чтобы отобразить картинку “flower.jpg” с высотой 300 пикселей и шириной 750 пикселей:',
        choices: ['<img ref=”flower” format=.jpg high=300 px width=750 px />', '<src img=”flower.jpg” height=”300%” width=”750%”/>', '<img src=”flower.jpg” height=”300 px” alt=”” width=”750 px”/>'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 9: Какие из перечисленных тэгов относятся к созданию таблицы?',
        choices: ['<header> <body> <footer>', '<table> <tr> <td>', '<ul> <li> <tr> <td>'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 10: Укажите тэг, который соответствует элементу списка:',
        choices: ['<li>', '<ul>', '<ol>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 11: Что содержит в себе атрибут href?',
        choices: ['URL страницы, на которую произойдет перенаправление', 'Имя страницы, на которую произойдет перенаправление', 'Указание на то, где будет открываться новая страница: в том же или новом окне'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 12: О чем говорит следующая запись: <form action="url" method="POST">?',
        choices: ['Создается форма, при заполнении которой вводимые данные будут отображаться', 'Создается форма, при заполнении которой вводимые данные не будут отображаться', 'Создается форма, которая будет служить для внесения информации, представленной в виде ссылки'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 13: Какое значение следует задать атрибуту type, чтобы оно превращало входной тэг в форму отправки?',
        choices: ['Submit', 'Checkbox', 'Radiobutton'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 14: Для задания размеров тэгу <frameset> требуются следующие атрибуты:',
        choices: ['Высока и ширина', 'Площадь и толщина границ', 'Строки и столбцы'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 15: Выберите верное утверждение.',
        choices: ['В HTML цвета задаются комбинацией значений шестнадцатеричной системы исчисления: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, A, B, C, D, E, F', 'В HTML цвета задаются комбинацией значений двоичной системы исчисления: 0 или 1', 'В HTML цвета задаются комбинацией значений восьмеричной системы исчисления: 0, 1, 2, 3, 4, 5, 6, 7'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 16: Какие тэги делают шрифт текста жирным?',
        choices: ['<ins> и <del>', '<li> и <ul>', '<b> и <strong>'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 17: Какие тэги используются для определения заголовков?',
        choices: ['h1-h6', 'Header', 'Heading'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 18: Неотображаемые комментарии в HTML задаются следующим образом:',
        choices: ['<! - Your comment -!>', '<!-- Your comment --!>', '<!p> Your comment </!p>'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 19: Перечислите основные модули контента, существующие в HTML 5.',
        choices: ['Image, Media, Metadata, Link, Heading, Color, Input Value', 'Metadata, Embedded, Interactive, Heading, Phrasing, Flow, Sectioning', 'Flow, Static, Link, Header, Body, Footer, Processing, Chase'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 20: Укажите, какой элемент HTML 5 отвечает за воспроизведение видео:',
        choices: ['<video>', '<media>', '<movie>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 21: На сайте внутри папки pages находится файл page.html. А внутри папки images находится файл foto.jpg. Причём папки images и pages лежат в корне сайта. Как правильно написать путь к foto.jpg из файла page.html:',
        choices: ['images/foto.jpg', '../images/foto.jpg', 'pages/images/foto.jpg', '../images/pages/foto.jpg'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 22: Элемент <canvas> используется для:',
        choices: ['Прикрепления таблиц Excel', 'Управления данными в базе данных', 'Прорисовки графики'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 23: Какой тэг содержит навигацию?',
        choices: ['<nav>', '<geo>', '<metanav>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 24: SessionStorage – это клиентское решение в HTML 5, которое позволяет:',
        choices: ['Извлекать и использовать данные предыдущих сессий при условии того, что не были очищены cash и cookie', 'Создавать базу данных решений пользователей в памяти браузера', 'Извлекать и использовать данные только текущей сессии'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 25: Функция HTML 5 «',
        choices: ['Встроенную в основной функционал сайта карту мира', 'Данные о местонахождении пользователя', 'Данные о местонахождении сервера'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 26: HTML – это',
        choices: ['Язык разметки', 'Библиотека гипертекста', 'Скриптовый язык'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 27: Обязательно ли использование тэгов <html> … </html>?',
        choices: ['Да, без них браузер не распознает HTML-документ', 'Да, если HTML-документ создается в блокноте или другом текстовом редакторе. В специальном компиляторе HTML эти тэги можно не использовать', 'Не обязательно'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 28: Какой атрибут позволяет объединить ячейки таблицы по вертикали?',
        choices: ['Union', 'Colspan', 'Rowspan'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 29: Допустимое число заголовков первого уровня в HTML-документе составляет:',
        choices: ['1', '7', '3'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 30: Текст, выделенный курсивом, представлен в следующей записи:',
        choices: ['<del> курсив </del>', '<i> курсив </i>', '<hr> курсив </hr>'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 31: В HTML не существует … тэгов.',
        choices: ['Одиночных', 'Парных', 'Тройных'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 32: При создании сайтов используют кодировку:',
        choices: ['UTF8', 'ASCII', 'UTF-32'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 33: HTML-документ может иметь расширения:',
        choices: ['.html', '.html или .htm', '.html или .txt'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 34: Укажите устаревшие тэги для HTML 5.',
        choices: ['<applet>, <blink>, <u>', '<ul>, <audio>, <pre>', '<code>, <s>, <embed>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 35: Тэг, подключающий к существующему HTML-документу скрипты, которые выполняются на клиентской стороне – это:',
        choices: ['<object>', '<script>', '<client>'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 36: Какой символ обозначает конец тэга?',
        choices: ['^', ';', '/'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 37: Список, в котором элементы перечисления отмечаются буллетами, позволяет создать тэг:',
        choices: ['<ul>', '<ol>', '<bl>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 38: Укажите корректную запись для создания чек-бокса:',
        choices: ['<input checkbox>', '<type input=”checkbox”>', '<input type=”checkbox”>'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 39: Укажите корректную запись для создания выпадающего списка:',
        choices: ['<input type=”dropdown”>', '<input dropdown list>', '<dropdown list>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 40: Какой атрибут HTML указывает альтернативный текст для изображения, если данное изображение не отобразится?',
        choices: ['imgalt', 'imgvar', 'alt'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 41: Какой HTML-тэг используется для определения футера документа или раздела?',
        choices: ['<footer>', '<bottom>', '<section>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 42: HTML-тэг, позволяющий воспроизводить аудиозаписи – это:',
        choices: ['<music>', '<audio>', '<sound>'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 43: В HTML 5, onblur и onfocus – это:',
        choices: ['Атрибуты событий', 'Атрибуты стиля', 'Атрибуты подключения базы данных'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 44: Графика, определенная SVG, отображается в формате:',
        choices: ['CSS', 'JSOM', 'XML'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 45: Что определяет тэг <aside>?',
        choices: ['Дополнительное содержимое, т.е. то, что не включает основной документ', 'Ссылку на подключенный документ', 'Цветовое решение документа'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 46: Что такое HTML?',
        choices: ['Язык разметки', 'Язык программирования', 'CSS', 'Что-то непонятное'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 47: Что такое CSS?',
        choices: ['Язык разметки', 'Язык программирования', 'Каскадные таблицы стилей'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 48: О чем говорит тэг <p align="right"> ... </p>?',
        choices: ['Текст, заключенный в тэг, будет расположен по центру страницы', 'Текст, заключенный в тэг, будет расположен по левому краю страницы', 'Текст, заключенный в тэг, будет расположен по центру страницы'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 49: Какие единицы измерения могут использоваться для атрибута ширины?',
        choices: ['Пиксели и %', 'Миллиметры и сантиметры', 'Пиксели и миллиметры'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 50: Использование тэга … позволяет добавлять одну строку текста без начала нового абзаца?',
        choices: ['<line/>', '<br/>', '<td/>'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 51: Напишите код HTML, который бы создавал кнопку отправки заполненной формы. Имя кнопки – ОК.',
        choices: ['<input type="ОК" value="Submit"/>', '<p> input type="submit" value="OK"< /p>', '<input type="submit" value="ОК"/>'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 52: Какой тэг при создании страницы добавляет имя страницы, которое будет отображаться в строке заголовка в браузере пользователя?',
        choices: ['<title> … </title>', '<header> … </header>', '<body> … </body>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 53: Заполните поля, чтобы отобразить картинку “flower.jpg” с высотой 300 пикселей и шириной 750 пикселей:',
        choices: ['<img ref=”flower” format=.jpg high=300 px width=750 px />', '<src img=”flower.jpg” height=”300%” width=”750%”/>', '<img src=”flower.jpg” height=”300 px” alt=”” width=”750 px”/>'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 54: Какие из перечисленных тэгов относятся к созданию таблицы?',
        choices: ['<header> <body> <footer>', '<table> <tr> <td>', '<ul> <li> <tr> <td>'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 55: Укажите тэг, который соответствует элементу списка:',
        choices: ['<li>', '<ul>', '<ol>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 56: Что содержит в себе атрибут href?',
        choices: ['URL страницы, на которую произойдет перенаправление', 'Имя страницы, на которую произойдет перенаправление', 'Указание на то, где будет открываться новая страница: в том же или новом окне'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 57: О чем говорит следующая запись: <form action="url" method="POST">?',
        choices: ['Создается форма, при заполнении которой вводимые данные будут отображаться', 'Создается форма, при заполнении которой вводимые данные не будут отображаться', 'Создается форма, которая будет служить для внесения информации, представленной в виде ссылки'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 58: Какое значение следует задать атрибуту type, чтобы оно превращало входной тэг в форму отправки?',
        choices: ['Submit', 'Checkbox', 'Radiobutton'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 59: Для задания размеров тэгу <frameset> требуются следующие атрибуты:',
        choices: ['Высока и ширина', 'Площадь и толщина границ', 'Строки и столбцы'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 60: Выберите верное утверждение.',
        choices: ['В HTML цвета задаются комбинацией значений шестнадцатеричной системы исчисления: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, A, B, C, D, E, F', 'В HTML цвета задаются комбинацией значений двоичной системы исчисления: 0 или 1', 'В HTML цвета задаются комбинацией значений восьмеричной системы исчисления: 0, 1, 2, 3, 4, 5, 6, 7'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 61: Какие тэги делают шрифт текста жирным?',
        choices: ['<ins> и <del>', '<li> и <ul>', '<b> и <strong>'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 62: Какие тэги используются для определения заголовков?',
        choices: ['h1-h6', 'Header', 'Heading'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 63: Неотображаемые комментарии в HTML задаются следующим образом:',
        choices: ['<! - Your comment -!>', '<!-- Your comment --!>', '<!p> Your comment </!p>'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 64: Перечислите основные модули контента, существующие в HTML 5.',
        choices: ['Image, Media, Metadata, Link, Heading, Color, Input Value', 'Metadata, Embedded, Interactive, Heading, Phrasing, Flow, Sectioning', 'Flow, Static, Link, Header, Body, Footer, Processing, Chase'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 65: Укажите, какой элемент HTML 5 отвечает за воспроизведение видео:',
        choices: ['<video>', '<media>', '<movie>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 66: На сайте внутри папки pages находится файл page.html. А внутри папки images находится файл foto.jpg. Причём папки images и pages лежат в корне сайта. Как правильно написать путь к foto.jpg из файла page.html:',
        choices: ['images/foto.jpg', '../images/foto.jpg', 'pages/images/foto.jpg', '../images/pages/foto.jpg'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 67: Элемент <canvas> используется для:',
        choices: ['Прикрепления таблиц Excel', 'Управления данными в базе данных', 'Прорисовки графики'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 68: Какой тэг содержит навигацию?',
        choices: ['<nav>', '<geo>', '<metanav>'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 69: SessionStorage – это клиентское решение в HTML 5, которое позволяет:',
        choices: ['Извлекать и использовать данные предыдущих сессий при условии того, что не были очищены cash и cookie', 'Создавать базу данных решений пользователей в памяти браузера', 'Извлекать и использовать данные только текущей сессии'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 70: Функция HTML 5 «',
        choices: ['Встроенную в основной функционал сайта карту мира', 'Данные о местонахождении пользователя', 'Данные о местонахождении сервера'],
        correctAnswer: 1
    },
    {
        question: 'Вопрос 71: HTML – это',
        choices: ['Язык разметки', 'Библиотека гипертекста', 'Скриптовый язык'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 72: Обязательно ли использование тэгов <html> … </html>?',
        choices: ['Да, без них браузер не распознает HTML-документ', 'Да, если HTML-документ создается в блокноте или другом текстовом редакторе. В специальном компиляторе HTML эти тэги можно не использовать', 'Не обязательно'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 73: Какой атрибут позволяет объединить ячейки таблицы по вертикали?',
        choices: ['Union', 'Colspan', 'Rowspan'],
        correctAnswer: 2
    },
    {
        question: 'Вопрос 74: Допустимое число заголовков первого уровня в HTML-документе составляет:',
        choices: ['1', '7', '3'],
        correctAnswer: 0
    },
    {
        question: 'Вопрос 75: Текст, выделенный курсивом, представлен в следующей записи:',
        choices: ['<del> курсив </del>', '<i> курсив </i>', '<hr> курсив </hr>'],
        correctAnswer: 1
    },
];


let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    questionElement.textContent = quizData[currentQuestion].question;
    choicesElement.innerHTML = '';
    quizData[currentQuestion].choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => chooseAnswer(index);
        choicesElement.appendChild(button);
    });
}

function chooseAnswer(index) {
    if (index === quizData[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `Тест завершен! Ваш результат: ${score} из ${quizData.length}`;
        let score_2 = (score / quizData.length) * 100
        const ozenkaElement = document.getElementById('ozenka');
        ozenkaElement.innerHTML = `Ваш процент правильных ответов: ${score_2}%`;
        const ozenka_2_Element = document.getElementById('ozenka_2');
        if(score_2  < 40){
            ozenka_2_Element.innerHTML = `Оценка: 2`;
        }
        if(40 <= score_2  && score_2  < 59){
            ozenka_2_Element.innerHTML = `Оценка: 3`;
        }
        if(60 <= score_2  && score_2  < 85){
            ozenka_2_Element.innerHTML = `Оценка: 4`;
        }
        if(score_2  >= 85){
            ozenka_2_Element.innerHTML = `Оценка: 5`;
        }
        
    }
}
loadQuestion();