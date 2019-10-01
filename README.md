Проект был создан использую библиотеки `React`/`Redux` а так же [Create React App](https://github.com/facebook/create-react-app). 
## Own Library
Эту библиотеку вы имеете возможность добавлять, удалять и редактировать книги.
### `Первая страницу`
Вы можете увидеть таблицу книг состоящая из 7 колонок: <br/>
1: `id` книги <br/>
2: `Автор` книги <br/>
3: `Название` книги <br/>
4: `Рейтинг` (отсутствует по умолчанию) <br/>
5: `Статус` (отсутствует по умолчанию) <br/>
6: кнопка `Редактировать` <br/>
7: кнопка `Удалить` <br/>
А так же кнопка `Добавить книгу`, которая расположена под таблицей  <br/>
### Кнопка `Добавить книгу`
При нажатии на кнопку `Добавить книгу` вы переходите в форму для добавления книги, <br/>
 где вы можете указать `Название` и `Автор` книги. <br/>
### Кнопка `Редактировать`
При нажатии на на кнопку  `Редактировать`, вы переходите на форму для редактирование данной книги. <br/>
При редактировании возможно изменить `Название` и `Автор` книги, а так же добавить `Рейтинг` и <br/>
`Статус` книги. Поле `id` отсутствует при редактировании, оно указанно в загаловке редактируемой книги.
### Кнопка `Удалить`
При нажатии на кнопку `Удалить`,книгу возможно удали из таблицы.
