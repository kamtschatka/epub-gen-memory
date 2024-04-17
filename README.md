# epub-gen-memory --- a library to make EPUBs from HTML

Generate EPUB books from HTML with a simple API in Node.js or the browser.

__This is a fork of [cpiber/epub-gen-memory](https://github.com/cpiber/epub-gen-memory) with some additional fixes (or features) used by https://epubkit.app__:

- Support passing local file path to `cover` option (instead of just URL) #72a9cc340bed8e3db09c57252d68d87f1eef3c90
- Remove the extra new line in the generated ncx chapter title #d3feb58277957ae16bb811d7ad88c549ee8220a1

## Install

```
npm i @epubkit/epub-gen-memory
```

# License

MIT License