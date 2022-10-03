import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './index.css';
import App from './App';

axios.interceptors.request.use(
    (req:any) => {
        req.headers.token = localStorage.getItem('Token');
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (res) => {
        toast.success(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });
        return res
    },
    (err) => {
        if(err.response.data.noToken){
            toast.error(err.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            }); 
        }
        else{
            toast.error(err.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        return Promise.reject(err);
    }
);

ReactDOM.render(<App/>, document.getElementById('root'));
