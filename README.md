# О проекте
Перед Вами мой первый опыт работы с **React.js** и сопутствующими библиотеками.<br>
В задумке было создать интернет магазин с нуля, используя новую для себя технологию. Стояла цель закончить его за пару-тройку месяцев, но было не учтено время на изучение новых подходов к выполнению привычных задач, разработку новой архитектуры, чтение документации и литературы. Также возникли трудности с отсутствием сервера: был создан импровизированный *back-end* — каталог ``/api/`` внутри ``/public/`` имитирующий настоящее *REST API*.<br>
В данный момент сверстана главная страница и её мобильная версия, за исключением нескольких модальных окон.<br>
По маршрутам ``/login`` и ``/register`` находится импровизированный компонент, который авторизует пользователя при вводе любого пароля.

**[Ссылка на демо-версию](https://seventrio.github.io/react-app)**

## Файловая структура
- ``src/`` — корневой каталог React приложения
    - ``components/`` — каталог со всеми компонентами приложения, каждый компонент вынесен в свой отдельный каталог, который содержит файл компонента с расширением *jsx*, абстрагированный от внешней логики, *sass* файл со стилями и *контейнер* (компонент высшего порядка) позволяющий добавить компоненту некоторую логику и связать его с хранилищем *redux*. <br> Если в компоненте используются другие компоненты которые не используются за его пределами, то они также помещаются в этот каталог;
    - ``helpers/`` — вспомогательные утилиты, пользовательские *хуки*;
    - ``i18n/`` — все связанное с интернационализацией: переводы, конфиг, утилиты;
    - ``pages/`` — компоненты, которые являются страницами сайта;
    - ``redux/`` — содержит все связанное *redux*: действия, редюсеры и хранилище;
    - ``sass/`` — содержит общие стили, миксины и переменные;
    - ``index.js`` — основной файл приложения;
    - ``routes.js`` — связывает маршруты с компонентами.

## Технологии использованные в проекте:
- **[React](https://reactjs.org/)** — основная библиотека проекта, позволяет описывать как части интерфейса приложения выглядят в разных состояниях и своевременно обновляет их при изменении данных;
- **[Webpack](https://webpack.js.org/)**  —  сборщик проекта;
- **[Material UI](https://material-ui.com/)** — библиотека готовых UI компонентов;
- **[node-sass](https://www.npmjs.com/package/node-sass)** — компилирует *sass* в *css*;
- **[classnames](https://www.npmjs.com/package/classnames)** — позволяет удобно добавлять компоненту несколько классов;
- **[redux](https://redux.js.org/)** — централизованное хранилище состояния всего приложения, применяется когда нужно использовать одно состояние в разных местах приложения;
- **[react-redux-i18n](https://www.npmjs.com/package/react-redux-i18n)** — организовывает локализацию и интернационализацию приложения, посредством хранения переводов в хранилище и предоставляет удобные компоненты которые автоматически обновляются при изменении состояния;
- **[react-router](https://reactrouter.com/)** — предоставляет *роутинг* по приложению
- **[axios](https://www.npmjs.com/package/axios)** — служит заменой стандартному [Fetch API](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API), была выбрана мной из-за лучшей работы с загрузкой файлов на сервер (возможность отслеживать выгрузку);
- **[uuid](https://www.npmjs.com/package/uuid)** — создание временного уникального *id* перед отправкой на сервер, где должно быть присвоено другое *id*.