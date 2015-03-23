angular.module('app-templates', ['js/templates/breadcrumbs.html', 'js/templates/index.html', 'js/templates/projects/whoshoe.html']);

angular.module("js/templates/breadcrumbs.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/templates/breadcrumbs.html",
    "<ul class=\"breadcrumbs\">\n" +
    "    <li><a href=\"/\">Проекты студии</a></li>\n" +
    "    <li>\n" +
    "        <span ng-if=\"archive\" archive=\"\">{{name}}</span>\n" +
    "        <span ng-if=\"!archive\">{{name}}</span>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("js/templates/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/templates/index.html",
    "<article>\n" +
    "    <p>Веб-студия «Перебор»* делает сайты, интернет-магазины, промо-странички, интранет-приложения, мобильные приложения и&nbsp;вот&nbsp;это вот всё (подробно о&nbsp;проектах по&nbsp;ссылкам):</p>\n" +
    "    <ul>\n" +
    "        <li>«<a href=\"http://pereborstudio.com\">Перебор</a>»&nbsp;— сайт веб&#8209;студии (комбо! сапожник в сапогах! см. «<a href=\"http://lurkmore.to/Рекурсия\">рекурсия</a>»)</a></li>\n" +
    "        <li><span archive>«<a href=\"/projects/whoshoe\">Чей туфля?</a>»</span>&nbsp;— интернет&#8209;магазин обуви</li>\n" +
    "        <li><span archive>«<a href=\"http://food-mg.com\">Фуд Маркет Груп</a>»</span>&nbsp;— сайт&#8209;витрина продуктовой компании</li>\n" +
    "        <li>«<a href=\"http://feedthedevs.herokuapp.com\">Накорми разработчиков</a>»&nbsp;— приложение, позволяющее оценивать предложенные разработчиками изменения в проектах на Гитхабе (идея и прототип <a href=\"http://stepansuvorov.com\">Степана Суворова</a>)</li>\n" +
    "        <li>«<a href=\"http://justprivat.com.ua\">Юстприват</a>»&nbsp;— информационный сайт юридической фирмы</li>\n" +
    "        <li>«<a href=\"http://remont-far.in.ua\">Ремонт фар</a>»&nbsp;— целевая страница автомастерской</li>\n" +
    "        <li>«<a href=\"http://xmasbeard.com\">Xmas Beard</a>»&nbsp;— рождественская игра под Андроид (<a href=\"https://play.google.com/store/apps/details?id=com.hiploaded.christmasbeard\">скачать на Плеймаркете</a>). Мы нарисовали интерфейс и логотип игры</li>\n" +
    "    </ul>\n" +
    "    <h4>А ещё у нас есть зайчик: <img src=\"/assets/images/logo_100x100_transp_dark.png\"></h4>\n" +
    "\n" +
    "    <p>Свяжитесь с&nbsp;нами:</p>\n" +
    "    <p>Аня Переверзева, дизайнер, верстальщик, сео&#8209;оптимизатор&nbsp;— <a href=\"mailto:ania&#64;pereborstudio.com\">ania&#64;pereborstudio.com</a></p>\n" +
    "    <p>Серёжа Переверзев, верстальщик, кодер, администратор&nbsp;— <a href=\"mailto:serg&#64;pereborstudio.com\">serg&#64;pereborstudio.com</a></p>    </p>\n" +
    "    <div class=\"hr\"></div>\n" +
    "    <p class = \"ref\">* Принципиально разрешимые задачи всегда разрешимы путём, как&nbsp;минимум, полного перебора. Студия «Перебор» сделает для&nbsp;вас подходящий инструмент, пусть даже для&nbsp;этого придётся перебрать и&nbsp;отбросить множество вариантов.</p>\n" +
    "</article>");
}]);

angular.module("js/templates/projects/whoshoe.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/templates/projects/whoshoe.html",
    "<breadcrumbs archive name=\"'Интернет-магазин обуви «Чей туфля?»'\"></breadcrumbs>\n" +
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
    "</article>\n" +
    "<a href=\"/\">Вернуться к списку проектов</a>");
}]);
