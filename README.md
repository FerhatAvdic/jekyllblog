## What is this site made of?

This site is made using Jekyll, a simple, blog-aware, static site generator for personal, project, or organization sites.

The content is editable through Markdown files (files with .md extension).

>_A MARKDOWN file is a text file created using one of several possible dialects of the Markdown language. It uses plain text formatting but contains inline text symbols that specify how to format the text (e.g., double asterisk before and after the text to make it bold, or other markups for italics, indentation, headers, etc.)._

## How can i manage blog posts on my site?

* To manage posts open the _posts folder and add, edit, or delete files using the options on github.
When you're done with the changes, you will be asked to commit them. Do so by clicking the green commit button.
The changes will be pushed and applied on netlify server.

* Jekyll is convention-based so the post names appear in the following format: __YYYY:MM:DD-post-title-in-lowercase__
The generator also uses something called _front matter_ which looks like the code from below in your markdown files.
You should use this as a template for your future posts so this data is automatically added to them. See post examples in the _posts folder.
Add this front matter to the top of each post:

```
---
layout: post
title:  "Markdown is awesome"
date:   2019-04-14
author: Mugabi Mwanje
---
```

* To see how to format text using this language, refer to the guides on https://www.markdownguide.org
It includes a cheatsheet, basic and extended syntax. 
You can make use of free online tools like https://stackedit.io to write your markdown files using their editor, then copy the text to your file in the github repository.
To style the content in ways you can't do with markdown alone, you can always use HTML and inline CSS.
For example, center and resize an image:

```
<p align="center">
  <img src="https://anyserver.com/image.png" width="750px" height="300px"/>
</p>
```

## Can i change the content in the About or Now sections?

Yes, in the same way you can edit blog posts.

## How can i change the links on my homepage?

Open the _navigation.yml_ file located in the folder_ _data_. You will see a list of items including their titles, urls, and an option to open the link in new tab saying _newtab:true_. Change the titles as you like, and add or remove the _newtab:true_ option at will below any item. Do not change the text indentation or format of this file.