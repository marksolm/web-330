/**
Title:  http-client.js
Author: Soliman Abdelmalak
Date: 05/08/2021
Description: HttpClient class
*/

// Create a HttpClient class.
export class HttpClient {
    //create an async function named get with two parameters: url and params. 
    async get(url, params = ""){
     //new URL object.
      url = new URL(url);
     // assigning the url.search to a new URLSearchParams Object.
     url.search = new URLSearchParams(params); 
        const res = await fetch(url.toString(), {
         method: "GET",
        })
        return res.json();
    }
}