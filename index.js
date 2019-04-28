import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './src/App';
import getPosts from './src/posts';
import express from 'express';
import fs from 'fs';

const index = fs.readFileSync(__dirname+'/index.html','utf8');

const app = express();
app.get('**',(req,res)=>{
    getPosts().then(posts =>{
    const html = renderToString(<App posts={posts}/>);
    const finalHtml= index.replace('<!---:: APP :: --->',html);
    res.send(finalHtml);
});
});

app.listen(3006);