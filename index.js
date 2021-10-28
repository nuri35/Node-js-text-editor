import EditorJS from '@editorjs/editorjs';

import Header from '@editorjs/editorjs';

import List from '@editorjs/editorjs';
import Embed from '@editorjs/editorjs';
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
  editor.saver().then((result) => {
    console.log("article data" + result)
  }).catch((err) => {
    console.log("failed:" + err)
  });
})