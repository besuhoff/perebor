angular.module('app-templates', ['js/templates/base.html', 'js/templates/breadcrumbs.html', 'js/templates/lang-switcher.html', 'js/templates/portfolio.html', 'js/templates/projects/fmg.ru.html', 'js/templates/projects/fmg.ua.html', 'js/templates/projects/whoshoe.ru.html', 'js/templates/projects/whoshoe.ua.html']);

angular.module("js/templates/base.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/templates/base.html",
    "<lang-switcher></lang-switcher>\n" +
    "<h1 translate=\"STUDIO_PEREBOR_HEADER\">Веб-студия «Перебор»<small>*</small></h1>\n" +
    "<ui-view></ui-view>");
}]);

angular.module("js/templates/breadcrumbs.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/templates/breadcrumbs.html",
    "<ul class=\"breadcrumbs\">\n" +
    "    <li><a href=\"/\" translate=\"STUDIO_PROJECTS\">Проекты студии</a></li>\n" +
    "    <li>\n" +
    "        <span ng-if=\"itemIsArchive\" archive>{{name}}</span>\n" +
    "        <span ng-if=\"!itemIsArchive\">{{name}}</span>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("js/templates/lang-switcher.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/templates/lang-switcher.html",
    "<div class=\"lang-switcher\" ng-click=\"langPopupVisible = !langPopupVisible\"  ng-class=\"{ 'lang-switcher__active': langPopupVisible }\">\n" +
    "  <div class=\"lang-switcher__switch\">\n" +
    "    <div class=\"lang-switcher__flag lang-switcher__flag--{{ currentLanguage }}\"></div>\n" +
    "    <span class=\"lang-switcher__name\">{{ currentLanguage }}</span>\n" +
    "  </div>\n" +
    "  <ul class=\"lang-switcher__options\">\n" +
    "    <li ng-repeat=\"lang in availableLanguages\" ng-click=\"switchLanguage(lang, $event);\" ng-if=\"lang !== currentLanguage\">\n" +
    "      <div class=\"lang-switcher__flag lang-switcher__flag--{{ lang }}\"></div>\n" +
    "      <span class=\"lang-switcher__name\">{{ lang }}</span>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("js/templates/portfolio.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/templates/portfolio.html",
    "<article>\n" +
    "    <p translate=\"STUDIO_PEREBOR_ABOUT\">Делаем сайты, интернет-магазины, промо-странички, интранет-приложения, мобильные приложения, логотипы, фирменные стили и&nbsp;вот&nbsp;это вот всё:</p>\n" +
    "    <ul>\n" +
    "        <li><span translate=\"PORTFOLIO_PEREBOR\">«<a href=\"http://pereborstudio.com\">Перебор</a>»&nbsp;— сайт веб&#8209;студии (комбо! сапожник в сапогах! см. «<a href=\"http://lurkmore.to/Рекурсия\">рекурсия</a>»)</span></li>\n" +
    "        <li><span archive></span><span translate=\"PORTFOLIO_WHOSHOE\">«<a href=\"/projects/whoshoe\">Чей туфля?</a>»&nbsp;— интернет&#8209;магазин обуви</span></li>\n" +
    "        <li><span archive></span><span translate=\"PORTFOLIO_FMG\">«<a href=\"/projects/fmg\">Фуд Маркет Груп</a>»&nbsp;— сайт&#8209;витрина продуктовой компании</span></li>\n" +
    "        <li><span translate=\"PORTFOLIO_FTD\">«<a href=\"http://feedthedevs.herokuapp.com\">Накорми разработчиков</a>»&nbsp;— приложение, позволяющее оценивать предложенные разработчиками изменения в проектах на Гитхабе (идея и прототип <a href=\"http://stepansuvorov.com\">Степана Суворова</a>)</span></li>\n" +
    "        <li><span translate=\"PORTFOLIO_JUSTPRIVAT\">«<a href=\"http://justprivat.com.ua\">Юстприват</a>»&nbsp;— информационный сайт юридической фирмы</span></li>\n" +
    "        <li><span translate=\"PORTFOLIO_AUTOLIGHTS\">«<a href=\"http://remont-far.in.ua\">Ремонт фар</a>»&nbsp;— целевая страница автомастерской</span></li>\n" +
    "        <li><span translate=\"PORTFOLIO_XMAS\">«<a href=\"https://play.google.com/store/apps/details?id=com.hiploaded.christmasbeard\">Xmas Beard</a>»&nbsp;— рождественская игра под Андроид. Мы нарисовали интерфейс и логотип игры</span></li>\n" +
    "        <li><span translate=\"PORTFOLIO_CAREERSTUDIO\">Лендинг и блог «<a href=\"http://career-studio.com.ua\">Студии карьерного развития</a>», тренеры которой помогают раскрыть таланты и построить успешную карьеру</span></li>\n" +
    "    </ul>\n" +
    "    <h4><span translate=\"PORTFOLIO_RABBIT\">А ещё у нас есть зайчик:</span> <img src=\"/assets/images/logo_100x100_transp_dark.png\"></h4>\n" +
    "\n" +
    "    <h2 translate=\"CONTACT_US\">Напишите нам:</h2>\n" +
    "    <p translate=\"CONTACT_ANIA\">Аня Переверзева, акула планшетного пера — <a href=\"mailto:ania&#64;pereborstudio.com\">ania&#64;pereborstudio.com</a></p>\n" +
    "    <p translate=\"CONTACT_SERG\">Серёжа Переверзев, текстовый евангелист — <a href=\"mailto:serg&#64;pereborstudio.com\">serg&#64;pereborstudio.com</a></p>\n" +
    "    <div class=\"hr\"></div>\n" +
    "    <p class = \"ref\" translate=\"STUDIO_PEREBOR_REFERENCE\">Принципиально разрешимые задачи всегда разрешимы путём, как&nbsp;минимум, полного перебора. Студия «Перебор» сделает для&nbsp;вас подходящий инструмент, пусть даже для&nbsp;этого придётся перебрать и&nbsp;отбросить множество вариантов.</p>\n" +
    "</article>\n" +
    "");
}]);

angular.module("js/templates/projects/fmg.ru.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/templates/projects/fmg.ru.html",
    "<breadcrumbs item-is-archive=\"true\" name=\"Интернет-витрина «Фуд Маркет Груп»\"></breadcrumbs>\n" +
    "<article>\n" +
    "  <blockquote><strong>Задача:</strong> создать интернет-витрину для распространителя импортных продуктов питания.</blockquote>\n" +
    "  <p>В студии разработали привлекательный сайт с возможностями интернет-витрины и блога.</p>\n" +
    "  <figure>\n" +
    "    <p><img src=\"/assets/images/bucket/fmg/small-screen.png\" alt=\"Главная страница\" width=\"1007\" height=\"1165\"></p>\n" +
    "    <figcaption>На главной показываем заморские вкусности</figcaption>\n" +
    "  </figure>\n" +
    "\n" +
    "  <figure>\n" +
    "    <p><img src=\"/assets/images/bucket/fmg/large-screen.png\" alt=\"Главная на большом экране\" width=\"1393\" height=\"550\"></p>\n" +
    "    <figcaption>Композиция подстраивается под размер экрана</figcaption>\n" +
    "  </figure>\n" +
    "\n" +
    "  <figure>\n" +
    "    <p><img src=\"/assets/images/bucket/fmg/products.png\" alt=\"Раскладка каталога\" width=\"1280\" height=\"657\"></p>\n" +
    "    <figcaption>Раскладка каталога</figcaption>\n" +
    "  </figure>\n" +
    "\n" +
    "  <p>Сайт ориентирован как на потребителей товаров, так и на потенциальных бизнес-партнеров. Карта представительств, созданная на основе карт Гугл, показывает покрытие торговой сетью территории Украины и приглашает к сотрудничеству дистрибьюторов.</p>\n" +
    "  <figure>\n" +
    "    <p><img src=\"/assets/images/bucket/fmg/map.png\" alt=\"Карта представительств\" width=\"1278\" height=\"873\"></p>\n" +
    "    <figcaption>Карта представительств</figcaption>\n" +
    "  </figure>\n" +
    "\n" +
    "  <p>Работа сдана в архив в 2015 году.</p>\n" +
    "</article>\n" +
    "<a ui-sref=\"index\">Вернуться к списку проектов</a>");
}]);

angular.module("js/templates/projects/fmg.ua.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/templates/projects/fmg.ua.html",
    "<breadcrumbs item-is-archive=\"true\" name=\"Інтернет-вітрина «Фуд Маркет Груп»\"></breadcrumbs>\n" +
    "<article>\n" +
    "  <blockquote>\n" +
    "    <strong>Задача:</strong> створити інтернет-вітрину для розповсюджувача імпортних продуктів харчування.\n" +
    "  </blockquote>\n" +
    "  <p>У студії розробили привабливий сайт з можливостями інтернет-вітрини та блога.</p>\n" +
    "  <figure>\n" +
    "    <p><img src=\"/assets/images/bucket/fmg/small-screen.png\" alt=\"Головна сторінка\" width=\"1007\" height=\"1165\"></p>\n" +
    "    <figcaption>На головній показуємо заморські ласощі</figcaption>\n" +
    "  </figure>\n" +
    "  <figure>\n" +
    "    <p><img src=\"/assets/images/bucket/fmg/large-screen.png\" alt=\"Головна на великому екрані\" width=\"1393\" height=\"550\"></p>\n" +
    "    <figcaption>Композиція адаптується під розмір екрану</figcaption>\n" +
    "  </figure>\n" +
    "  <figure><p><img src=\"/assets/images/bucket/fmg/products.png\" alt=\"Сторінка каталога\" width=\"1280\" height=\"657\"></p>\n" +
    "    <figcaption>Сторінка каталога</figcaption>\n" +
    "  </figure>\n" +
    "\n" +
    "  <p>Сайт орієнтовано як на споживачsd товарів, так і на потенційних бізнес-партнерів. Мапа представництв, яку збудовано на базі мапи Гугл, показує покриття торговельною мережею території України і заохочує до співпраці дистриб’юторів.</p>\n" +
    "  <figure>\n" +
    "    <p><img src=\"/assets/images/bucket/fmg/map.png\" alt=\"Мапа представництв\" width=\"1278\" height=\"873\"></p>\n" +
    "    <figcaption>Мапа представництв</figcaption>\n" +
    "  </figure>\n" +
    "  <p>Роботу здано до архіву в 2015 році.</p>\n" +
    "</article>\n" +
    "<a ui-sref=\"index\">Повернутися до списку проектів</a>");
}]);

angular.module("js/templates/projects/whoshoe.ru.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/templates/projects/whoshoe.ru.html",
    "<breadcrumbs item-is-archive=\"true\" name=\"Интернет-магазин обуви «Чей туфля?»\"></breadcrumbs>\n" +
    "<article>\n" +
    "    <blockquote><strong>Задача:</strong> создать для обувного магазина торговую интернет-площадку.</blockquote>\n" +
    "    <p>В студии разработали торговую марку, логотип и сайт магазина дешевой обуви. Название «Чей туфля?», сразу принятое заказчиком, определило шутливый стиль взаимодействия интерфейса с пользователем.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/003.png\" alt=\"Логотип\" width=\"225\" height=\"95\"></p>\n" +
    "        <figcaption>В студии разработали торговую марку и логотип</figcaption>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/002.png\" alt=\"Синичка на ботинке\" width=\"141\" height=\"115\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/006.png\" alt=\"Строчка меню\" width=\"188\" height=\"49\"></p>\n" +
    "        <figcaption>Строка меню оформлена с&nbsp;помощью швейной машинки</figcaption>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/007.png\" alt=\"Деньги под ботинком\" width=\"158\" height=\"113\"></p>\n" +
    "        <figcaption>Экономная обувь позволяет владельцу сорить деньгами</figcaption>\n" +
    "    </figure>\n" +
    "    <p>Страница 404 подозревает в&nbsp;слишком любопытных посетителях чёрных геологов, а страница серверной ошибки проклинает непостоянство мира.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/008.png\" alt=\"Понятно. Нефть ищете?\" width=\"310\" height=\"285\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/030.png\" alt=\"Будь проклят тот день, когда я сел за баранку этого пылесоса!\" width=\"715\" height=\"273\"></p>\n" +
    "    </figure>\n" +
    "    <p>В&nbsp;каталоге бесконечный список товаров. Слева интуитивно понятные фильтры, блок с&nbsp;которыми плывет вслед за прокруткой окна.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/010.png\" alt=\"Блок с фильтрами\" width=\"281\" height=\"370\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/011.png\" alt=\"Неточный размер\" width=\"300\" height=\"336\"></p>\n" +
    "        <figcaption>Для тех, кто готов купить туфли на&nbsp;размер меньше, лишь&nbsp;бы блестели, мы приготовили опцию «неточный размер»</figcaption>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/014.png\" alt=\"Плавающий блок\" width=\"671\" height=\"626\"></p>\n" +
    "        <figcaption>Блок с фильтрами плывет вслед за прокруткой окна</figcaption>\n" +
    "    </figure>\n" +
    "    <p>Иногда обувь уходит немного отдохнуть.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/009.png\" alt=\"Обувь спряталась\" width=\"567\" height=\"116\"></p>\n" +
    "    </figure>\n" +
    "    <p>Сайт правильно работает и на маленьком экране смартфона, и на дизайнерском мониторе. Неважное прячется. Кстати, все ползунки и перетаскивания адаптированы под жесты тачскрина.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/013.png\" alt=\"На большом мониторе\" width=\"1974\" height=\"781\"></p>\n" +
    "    <figure>\n" +
    "    </figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/028.png\" alt=\"На большом мониторе\" width=\"1241\" height=\"824\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/012.png\" alt=\"На смартфоне\" width=\"473\" height=\"734\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/029.png\" alt=\"На смартфоне\" width=\"640\" height=\"667\"></p>\n" +
    "        <figcaption>Баннеры на главной простраиваются в красивую сетку в зависимости от разрешения экрана</figcaption>\n" +
    "    </figure>\n" +
    "    <p>В карточке товара покупатель выбирает размер обуви с помощью ползунка, в котором показан приблизительный размер ноги в сантиметрах. На всякий случай мы добавили всю таблицу размеров во всплывающем окне помощника.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/016.png\" alt=\"Карточка товара\" width=\"822\" height=\"856\"></p>\n" +
    "        <figcaption>Под карточкой товара показываем список обуви того же типа, примерно похожей по цене.</figcaption>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/015.png\" alt=\"Галерея фотографий\" width=\"1256\" height=\"847\"></p>\n" +
    "        <figcaption>Качественные фотографии в галерее позволяют рассмотреть обувь крупным планом.</figcaption>\n" +
    "    </figure>\n" +
    "    <p>В магазине на мелкий опт (при покупке от двух или от пяти пар) действуют скидки.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/017.png\" alt=\"От двух пар\" width=\"640\" height=\"397\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/018.png\" alt=\"От пяти пар\" width=\"295\" height=\"381\"></p>\n" +
    "        <figcaption>Чем больше заказ, тем больше скидки.</figcaption>\n" +
    "    </figure>\n" +
    "    <p>В корзине предлагаем покупателю пересмотреть состав заказа и оплатить его на той же странице.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/019.png\" alt=\"Корзина\" width=\"534\" height=\"328\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/020.png\" alt=\"Форма заказа\" width=\"736\" height=\"594\"></p>\n" +
    "    </figure>\n" +
    "    <p>На форме заказа вежливые и понятные подсказки. Покупатель сразу узнаёт, как магазин использует его личные данные.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/021.png\" alt=\"Номер телефона\" width=\"612\" height=\"55\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/022.png\" alt=\"Личные данные\" width=\"751\" height=\"67\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/023.png\" alt=\"Способы доставки\" width=\"650\" height=\"112\"></p>\n" +
    "    </figure>\n" +
    "    <p>К способам доставки и оплаты даны короткие пояснения.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/025.png\" alt=\"Способы доставки\" width=\"536\" height=\"116\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/027.png\" alt=\"Способы оплаты\" width=\"539\" height=\"78\"></p>\n" +
    "        <figcaption>Доставка курьерской службой оплачивается отдельно.</figcaption>\n" +
    "    </figure>\n" +
    "    <p>Мы зарегистрируем пользователей, которые согласятся на создание профиля. Мы даже сгенерируем им пароль, если они не хотят придумывать его.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/024.png\" alt=\"Придумайте пароль\" width=\"764\" height=\"81\"></p>\n" +
    "        <figcaption>Пароль будет сгенерирован из нескольких легко запоминаемых английских слов. Это куда надёжнее и проще, чем непонятные комбинации с цифрами и знаками препинания.</figcaption>\n" +
    "    </figure>\n" +
    "    <p>Для входа используется виджет в правом верхнем углу. Для смелых есть кнопка «показать пароль»</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/004.png\" alt=\"Вход\" width=\"225\" height=\"166\"></p>\n" +
    "        <p>И вариант для смелых:</p>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/005.png\" alt=\"Показать пароль\" width=\"221\" height=\"89\"></p>\n" +
    "    </figure>\n" +
    "    <p>Вуаля!</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/026.png\" alt=\"Спасибо!\" width=\"580\" height=\"110\"></p>\n" +
    "    </figure>\n" +
    "\n" +
    "    <p>Работа сдана в архив в 2014 году.</p>\n" +
    "</article>\n" +
    "<a ui-sref=\"index\">Вернуться к списку проектов</a>");
}]);

angular.module("js/templates/projects/whoshoe.ua.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/templates/projects/whoshoe.ua.html",
    "<breadcrumbs item-is-archive=\"true\" name=\"Інтернет-магазин взуття «Чий туфля?»\"></breadcrumbs>\n" +
    "<article>\n" +
    "    <blockquote><strong>Задача:</strong> створити торгівельний інтернет-майданчик для магазина взуття.</blockquote>\n" +
    "    <p>В студії розробили торгівельну марку, логотип і сайт магазина дешевого взуття. Назва «Чий туфля?», що її одразу ж було погоджено замовником, визначила жартівливий стиль взаємодії інтерфейса з користувачем.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/003.png\" alt=\"Логотип\" width=\"225\" height=\"95\"></p>\n" +
    "        <figcaption>В студії розробили торгівельну марку та логотип</figcaption>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/002.png\" alt=\"Синиця на чоботі\" width=\"141\" height=\"115\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/006.png\" alt=\"Рядок меню\" width=\"188\" height=\"49\"></p>\n" +
    "        <figcaption>Рядок меню оформлено за&nbsp;допомогою швейної машини</figcaption>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/007.png\" alt=\"Гроші під черевиком\" width=\"158\" height=\"113\"></p>\n" +
    "        <figcaption>Економне взуття дозволяє володареві смітити грошима</figcaption>\n" +
    "    </figure>\n" +
    "    <p>Сторінка 404 підозрює у&nbsp;надто допитливих відвідувачах чорних геологів, а сторінка серверної помилки проклинає мінливість сущого.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/008.png\" alt=\"Зрозуміло. Нафту шукаєте?\" width=\"310\" height=\"285\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/030.png\" alt=\"Чорт забери той день, коли я сів за кермо цього пилососа!\" width=\"715\" height=\"273\"></p>\n" +
    "    </figure>\n" +
    "    <p>У&nbsp;каталозі незкінченний список товарів. Зліва інтуїтивно зрозумілі фільтри, блок із&nbsp;якими пливе слідом за прокруткою вікна.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/010.png\" alt=\"Блок із фільтрами\" width=\"281\" height=\"370\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/011.png\" alt=\"Неточний розмір\" width=\"300\" height=\"336\"></p>\n" +
    "        <figcaption>Для тих, хто готовий купити черевики на&nbsp;розмір менші, аби&nbsp;тільки блестіли, ми приготували опцію «неточний розмір»</figcaption>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/014.png\" alt=\"Блок, що плаває\" width=\"671\" height=\"626\"></p>\n" +
    "        <figcaption>Блок із фільтрами пливе слідом за прокруткою вікна</figcaption>\n" +
    "    </figure>\n" +
    "    <p>Іноді взуття ховається, аби трохи перепочити.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/009.png\" alt=\"Взуття сховалося\" width=\"567\" height=\"116\"></p>\n" +
    "    </figure>\n" +
    "    <p>Сайт правильно відображається як на маленькому екрані смартфона, так і на дизайнерському моніторі. Неважливе ховається. До речі, усі повзунки та перетаскування адаптовано під жести тачскріна.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/013.png\" alt=\"На великому моніторі\" width=\"1974\" height=\"781\"></p>\n" +
    "    <figure>\n" +
    "    </figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/028.png\" alt=\"На великому моніторі\" width=\"1241\" height=\"824\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/012.png\" alt=\"На смартфоні\" width=\"473\" height=\"734\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/029.png\" alt=\"На смартфоні\" width=\"640\" height=\"667\"></p>\n" +
    "        <figcaption>Банери на головній шикуються в гарну сітку в залежності від роздільної здатності дисплея</figcaption>\n" +
    "    </figure>\n" +
    "    <p>В катці товару покупець обирає розмір взуття за допомогою повзунка, в якому вказано приблизний розмір ноги в сантиметрах. Про всяк випадок ми додали повну таблицю розмірів у попапі помічника.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/016.png\" alt=\"Картка товару\" width=\"822\" height=\"856\"></p>\n" +
    "        <figcaption>Під карткою товару виводимо список взуття того ж типу, близького за ціною.</figcaption>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/015.png\" alt=\"Галерея світлин\" width=\"1256\" height=\"847\"></p>\n" +
    "        <figcaption>Якісні світлини в галереї дозволяють роздивитися взуття крупним планом.</figcaption>\n" +
    "    </figure>\n" +
    "    <p>В магазині на дрібний опт (при покупці від двох або від п’ятьох пар) діють знижки.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/017.png\" alt=\"Від двох пар\" width=\"640\" height=\"397\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/018.png\" alt=\"Від п’ятьох пар\" width=\"295\" height=\"381\"></p>\n" +
    "        <figcaption>Що більше замовлення, тим більші знижки.</figcaption>\n" +
    "    </figure>\n" +
    "    <p>В кошику пропонуємо покупцеві передивитись склад замовлення та оплатити його на тій самій сторінці.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/019.png\" alt=\"Кошик\" width=\"534\" height=\"328\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/020.png\" alt=\"Форма замовлення\" width=\"736\" height=\"594\"></p>\n" +
    "    </figure>\n" +
    "    <p>На формі замовлення є ввічливі та прозорі підказки. Покупець одразу дізнається, як магазин використовуватиме його персональні дані.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/021.png\" alt=\"Номер телефона\" width=\"612\" height=\"55\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/022.png\" alt=\"Персональні дані\" width=\"751\" height=\"67\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/023.png\" alt=\"Способи доставки\" width=\"650\" height=\"112\"></p>\n" +
    "    </figure>\n" +
    "    <p>До способів доставки та оплати надано короткі пояснення.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/025.png\" alt=\"Способи доставки\" width=\"536\" height=\"116\"></p>\n" +
    "    </figure>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/027.png\" alt=\"Способи оплати\" width=\"539\" height=\"78\"></p>\n" +
    "        <figcaption>Доставка кур’єрською службою тарифікується окремо.</figcaption>\n" +
    "    </figure>\n" +
    "    <p>Мы зареєструємо користувачів, які погодяться на створення профілю. Ми навіть згенеруємо пароль, якщо вони не бажають його вигадувати.</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/024.png\" alt=\"Вигадайте пароль\" width=\"764\" height=\"81\"></p>\n" +
    "        <figcaption>Пароль буде згенеровано з кількох англійських слів, що легко запам’ятати. Це набагато надійніше та простіше за незрозумілі комбінації з цифрами та розділовими знаками.</figcaption>\n" +
    "    </figure>\n" +
    "    <p>Для входу служить віджет в правому верхньому кутку. Для сміливих маємо кнопку «показати пароль»</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/004.png\" alt=\"Вхід\" width=\"225\" height=\"166\"></p>\n" +
    "        <p>Також варіант для сміливих:</p>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/005.png\" alt=\"Показати пароль\" width=\"221\" height=\"89\"></p>\n" +
    "    </figure>\n" +
    "    <p>Вуаля!</p>\n" +
    "    <figure>\n" +
    "        <p><img src=\"/assets/images/bucket/whoshoe/026.png\" alt=\"Дякуємо!\" width=\"580\" height=\"110\"></p>\n" +
    "    </figure>\n" +
    "    <p>Роботу здано до архіву в 2014 році.</p>\n" +
    "</article>\n" +
    "<a ui-sref=\"index\">Повернутися до списку проектів</a>");
}]);
