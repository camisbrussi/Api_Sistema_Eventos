"use strict";Object.defineProperty(exports, "__esModule", {value: true});exports.date = date; 

function date (event_date) {
    
    const data = new Date(event_date);
    const  milissegundos_por_dia = 1000 * 60 * 60 * 24;
    const data_final = new Date(data.getTime() - 2 * milissegundos_por_dia);

 
    if (data_final > new Date())
        return true;
    else
        return false;

};