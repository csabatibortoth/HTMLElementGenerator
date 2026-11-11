# HTMLElementGenerator

It's a dependency-free ES module to generate HTML5 elements. It can generate the following elements:

* div
* span
* p
* h1, h2, h3, h4, h5, h6
* img

## Prerequisites:
A browser with ES module support. No libraries are needed.

Module scripts are not loaded from `file://` URLs, so serve the page over HTTP (for example `npx serve` in the project root, then open `/example/`).

## Usage: 

```html
<script type="module" src="script/example.js"></script>
```

```js
import { HTMLElementGenerator } from './src/HTMLElementGenerator.js';

const element = HTMLElementGenerator({
    elementType: TYPE,
    parent: ID_OF_PARENT_ELEMENT, //if not provided it generates on body
    id: ID_OF_GENERATED_ELEMENT,
    class: CLASS_OF_GENERATED_ELEMENT,
    text: TEXT_OF_THE_ELEMENT, //if HTML element has the attribute
    src: IMAGE_SOURCE, //img only
    alt: IMAGE_ALT_TEXT, //img only
    data: ANY_VALUE, //passed to the event handlers
    onclick: (data) => {},
    onchange: (data) => {},
});
```

It returns the generated element, or `null` if the generation failed.
## Authors

* **Csaba Tóth** - *Initial work* - [csabatibortoth](https://github.com/csabatibortoth)
* **Page:** - https://csaba.toth.today/projects/htmlelementgenerator/

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Releases

### 0.3.0
 #### Changed:
 1. Rewritten as a dependency-free ES module, JQuery is no longer needed
 2. The global `HTMLElementGenerator` function is replaced by an import
 3. Elements are generated on body when no parent is provided
 4. The generated element is returned

### 0.2.1
 #### Added: 
 1. IMG generation

### 0.2.0
 #### Added:
 1. onClick event for elements
 2. onChange event for elements

### 0.1.2
 #### Fix:
  1. Fixed element generation.

### 0.1.1
 #### Fix:
  1. Fixed element generation when no parent added.

### 0.1.0
 #### Added:
  1. Core element generation
