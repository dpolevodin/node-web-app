export function mainPage(res) {
  let result =
    "<!doctype html>" +
    "<html>" +
    "   <head>" +
    '       <meta charset="UTF-8">' +
    "       <title>Список запланированных дел</title>" +
    "   </head>" +
    "   <body>" +
    "       <h1>Запланированные дела</h1>" +
    "   </body>" +
    "</html>";

  res.end(result);
}

export function detailPage(res, id) {
  res.end(
    "<!doctype html>" +
      "<html>" +
      "<head>" +
      '<meta charset="UTF-8">' +
      "<title>Дело :: Список запланированных дел</title>" +
      "</head>" +
      "<body>" +
      "<h1>Дело</h1>" +
      "</body>" +
      "</html>"
  );
}

export function errorPage(res) {
  res.statusCode = 404;
  res.end(
    "<!doctype html>" +
      "<html>" +
      "<head>" +
      '<meta charset="UTF-8">' +
      "<title>Ошибка</title>" +
      "</head>" +
      "<body>" +
      "<h1>Ошибка!</h1>" +
      "<p>Запрошенная страница не существует</p>" +
      "</body>" +
      "</html>"
  );
}
