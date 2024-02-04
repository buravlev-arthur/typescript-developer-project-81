# Генератор HTML-форм

[![Actions Status](https://github.com/buravlev-arthur/typescript-developer-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/buravlev-arthur/typescript-developer-project-81/actions)
[![Actions Status](https://github.com/buravlev-arthur/typescript-developer-project-81/actions/workflows/linting-and-testing.yml/badge.svg)](https://github.com/buravlev-arthur/typescript-developer-project-81/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/7145c3ee14b9ef168410/maintainability)](https://codeclimate.com/github/buravlev-arthur/typescript-developer-project-81/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7145c3ee14b9ef168410/test_coverage)](https://codeclimate.com/github/buravlev-arthur/typescript-developer-project-81/test_coverage)

## Примеры использования

Генерация формы с элементами input и textarea:

```typescript
const template = { name: 'rob', job: 'hexlet' };
const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
  f.input('name');
  f.input('job', { as: 'textarea' });
});

// <form action="#" method="post"><input name="name" type="text" value="rob"><textarea name="job" cols="20" rows="40">hexlet</textarea></form>
```

Добавление атрибутов:

```typescript
const template = { name: 'rob' };
const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
  f.input('name', { class: 'user-input' });
});

// <form action="#" method="post"><input name="name" type="text" value="rob" class="user-input"></form> 
```

Переопределение значений атрибутов по умолчанию:

```typescript
const template = { job: 'hexlet' };
const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
  f.input('job', { as: 'textarea', cols: 50, rows: 60 });
});

// <form action="#" method="post"><textarea name="job" cols="50" rows="60">hexlet</textarea></form>
```