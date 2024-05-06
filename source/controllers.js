import { loadList, loadItem } from "./model.js";

export async function mainPage(res) {
  let result =
    "<!doctype html>" +
    "<html>" +
    "   <head>" +
    '       <meta charset="UTF-8">' +
    "       <title>Список запланированных дел</title>" +
    "   </head>" +
    "   <body>" +
    "       <h1>Запланированные дела</h1>";
  const list = await loadList();
  for (let listItem of list) {
    result +=
      `<h2><a href="/${listItem._id}/">${listItem.title}</a></h2>` +
      `<p>${listItem.desc}</p>` +
      "<p>&nbsp;</p>";
  }
  result += "</body>" + "</html>";

  res.end(result);
}

export async function detailPage(res, id) {
  const listItem = await loadItem(id);
  res.end(
    "<!doctype html>" +
      "<html>" +
      "<head>" +
      '<meta charset="UTF-8">' +
      `<title>${listItem.title} :: Список запланированных дел</title>` +
      "</head>" +
      "<body>" +
      `<h1>${listItem.title}</h1>` +
      `<p>${listItem.desc}</p>` +
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
