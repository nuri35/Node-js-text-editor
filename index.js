import EditorJS from '@editorjs/editorjs';

const Header = require('@editorjs/header');

import List from '@editorjs/list';

const Embed = require('@editorjs/embed');
const Checklist = require('@editorjs/checklist');
const SimpleImage = require('@editorjs/simple-image');



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
});


let savebtn = document.querySelector(".button")

savebtn.addEventListener("click",()=>{
  editor.save().then((result) => {
    console.log("article data" + result)
  }).catch((err) => {
    console.log("failed:" + err)
  });
})