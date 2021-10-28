## TEXT EDİTOR WİTH EDİTOR JS_

Editor js ile parcel kullanılarak text editor yapılmıştır. Bu sayede sizlerde metinlerinizi düzenleyebilirsiniz.

## Features

- Resim,video ekliyebilirsiniz.
- listler oluşturabilirsiniz.
- Listelerin checklist özelliğini kullabilirsiniz
- Yazılarınızın yerini değiştirebilirsiniz
- İtalik,bold gibi özellikleri yazılarınıza verebilirsiniz


## Tech

DÜZGÜN ÇALIŞABİLMESİ İÇİN;

- [EDİTOR.JS] - HTML enhanced for web apps!
- [JAVASCRİPT] - awesome web-based text editor
- [PARCEL] - Markdown parser done right. Fast and easy to extend.
- [NODE JS] - great UI boilerplate for modern web apps
- [GİT] - fast node.js network app framework [@tjholowaychuk]



## Installation



ilk önce  parcel kurunuz.

```sh

npm init -y

```


```sh

npm i parcel
```
Package.json kısmında bu komutları yazınız.
"scripts": {
    "start": "parcel serve index.html",
    "build": "parcel build"
  },
## NPM

Uygulama için kurulacak paketler

| NPM | 
| ------ | 
| @editorjs/editorjs" | 
| @editorjs/header | 
| @editorjs/list |
| @editorjs/checklist | 
|@editorjs/embed | 
| @editorjs/simple-image |
| @parcel/transformer-sass |


## Development

İlk önce paketleri import edelim 



```sh
import EditorJS from '@editorjs/editorjs';

const Header = require('@editorjs/header');

import List from '@editorjs/list';

const Embed = require('@editorjs/embed');
const Checklist = require('@editorjs/checklist');
const SimpleImage = require('@editorjs/simple-image');
```

2. adımda nesneyi çağıralım :

```sh
const editor = new EditorJS({

  }
```

3. adımda text editorun ayarlarını yapalım :

```sh
const editor = new EditorJS({
 holderId:"editorjs",
 tools:{
   header:{
    class:Header,
    inlineToolbar:["link"]
   },
   list: {
    class: List,
    inlineToolbar:["link","bold"],
  },
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        coub: true
      }
    }
  },
 
  image: SimpleImage,
  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },

 }
```
4. adımda bir event ekliyelım  :


```sh

let savebtn = document.querySelector(".button")

savebtn.addEventListener("click",()=>{
  editor.save().then((result) => {
    console.log("article data" + result)
  }).catch((err) => {
    console.log("failed:" + err)
  });
})
```
