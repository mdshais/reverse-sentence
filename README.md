# reverse-sentence

An amazing tool to reverse sentences on the go.
Reverses the words of a sentence.

## Install
```sh
npm install @npmusername/reverse-sentence
```

## API
```js
require("reverse-sentence") => Function
reverse(sentence) => String
```
## Example
```js
const reverseSentence = require("reverse-sentence");
const sentence = "Hello Mohammad!";
const reversed = reverseSentence(sentence);
console.log(reversed) // Mohammad! Hello
```
## License
MIT