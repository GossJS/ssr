import express from 'express';
import React from 'react';
import { renderToString as rS } from 'react-dom/server';
import App from '../components/App';

const app = express();
app.use(r => r.res.send(rS(<App />))).listen(4321);
