import React from 'react';
import {render} from 'react-dom';
import  App from './App';
import getPosts from './posts';

getPosts().then(posts=>{
    render(<App posts={posts}/>,document.querySelector('#root'));
});
