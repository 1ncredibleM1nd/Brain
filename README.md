# Старт проекта

Нужено установить либо n, либо fnm менеджер для nodejs.

```shell
fnm use
npm i
```

# Запустить в дев-режиме

```shell
npm run start
```


# Собрать билд

```shell
npm run build - собрать билд с прод средой
npm run build -- --mode development - собрать билд с дев - средой
npm run build -- --mode demo - собрать билд с демо - средой
```

# Структура проекта

```
/src
  /assets - картинка, иконки, звуки, видео, шрифты, etc.
  /components - комопненты для страниц
  /hooks - хуки для полезных действий
  /layouts - лейауты для объединения комопнентов (возможно удалим)
  /pages - страницы SPA со встроенными компонентами для дальнейшей разработки
  /services - папка для работы с API
  /stores - всё что относится к состоянию приложения
  /styles - глобальные стили
  /ui - в будущем будет наш ui-kit
  /utils - утилиты для простых задач
  App.tsx - корень приложения
  index.tsx - инициализация реакта
  setupTests.js - пока не используем
.browserlistrc - список поддерживаемых браузеров
.editorconfig - настройки для IDE
.eslintignore - игнорирование файлов eslint
.eslintrc.js - настройки eslint
.gitignore - игнорирование папок git
.node-version - информация о версии Node.js
.prerrier - настройки стилизации кода
.env.development - дев среда
.env.demo - демо среда
.env.production - прод среда
.node-version - нужен для менедержа nodejs (fnm, n). что бы автоматом установить нужную версию
tsconfig.json - настройки типизации проекта

```
