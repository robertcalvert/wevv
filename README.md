# Wevv

**A fluent, type-safe HTML builder for TypeScript.**

Wevv lets you compose HTML by weaving elements together with a clean, chainable API. No template strings, no DSL, just TypeScript.

```ts
import { w } from "wevv";

const page = w.html
  .lang("en")
  .append(
    w.head.append(w.title.append("Hello, Wevv")),
    w.body
      .append(
        w.h1.append("Welcome"),
        w.p.append("Weaved, not templated.")
      )
  )
  .render();

// => <!DOCTYPE html><html lang="en"><head><title>Hello, Wevv</title></head>...
```

## Motivation

At work, I use a proprietary, in-house scripting language whose approach to markup I've grown to love. HTML generation lives right alongside the application logic, so there's no second syntax to learn and no context switching. Markup is also a first-class part of the language, it can be defined as reusable resources, stored and referenced wherever needed. You get the flexibility of templates without having to introduce a separate templating language. It's all one language.

When I started using to TypeScript for my personal projects, I found myself missing that workflow. Libraries offering JSX-like builders exist for TypeScript and JavaScript, but none quite matched how I like to work.

So Wevv is my attempt to bring that workflow to TypeScript. Markup that's just code, living alongside your logic, while remaining flexible and reusable. Nothing new to learn, just TypeScript.

If that happens to suit your workflow too, welcome aboard.

## Why Wevv?

- **Type-safe:** Attributes and structure are checked at compile time. Typos in tag or attribute names are caught before your code runs.
- **Fluent chains:** Your markup reads like a sentence.
- **Escaped by default:** Text content is HTML-escaped automatically.
- **Zero dependencies:** One tiny library, bundles anywhere.
- **SSR-first:** Outputs plain strings that stream or cache trivially. No virtual DOM, no hydration, no client runtime.

## Installation

```bash
npm install wevv
```

Works with any TypeScript project on Node 20+. No configuration, no plugins, no build step required.

## Express integration

```ts
import express from "express";
import { w, ElementChild } from "wevv";

const app = express();

function layout(title: string, body: ElementChild) {
  return w.html.append(
    w.head.append(w.title.append(title)),
    body
  ).render();
}

app.get("/", (req, res) => {
  res.send(layout("Home", w.body.append(w.h1.append("Hello, Wevv"))));
});

app.listen(3000);
```

Because output is a plain string, it composes cleanly with caching layers, response streaming, and any middleware.

## FAQ

**Why not template literals?**

Template strings blur the line between code and markup and make escaping opt-in rather than default. Wevv inverts that, structure lives in TypeScript, and safety is the baseline.

**Is it fast?**

String building with no virtual DOM overhead is quick enough for typical SSR workloads, and `render()` output can be cached and reused freely.

## State of the Project

Wevv is a scratch-your-own-itch project, built and maintained in my spare time. It's provided as-is, with no guarantee of support or ongoing maintenance. While the version is 0.x, the API may change without notice. Issues and PRs are welcome, and I'll get to them as time allows. If you need something dependable, forks are warmly encouraged.

## License

[MIT](LICENSE)
