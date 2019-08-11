/* eslint-disable no-console */
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

fetch(`${process.env.GRAPHQL_SERVER_URL}:${process.env.GRAPHQL_SERVER_PORT}${process.env.GRAPHQL_SERVER_ENDPOINT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        variables: {},
        query: `
        {
            __schema {
            types {
                kind
                name
                possibleTypes {
                name
                }
            }
            }
        }
        `,
    }),
})
.then(result => result.json())
.then(result => {
    let filePath = path.resolve(__dirname, process.env.PWD, process.env.GRAPHQL_UNIONS_AND_INTERFACES_FILE_PATH, process.env.GRAPHQL_UNIONS_AND_INTERFACES_FILE);
    
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
        type => type.possibleTypes !== null,
    );
    result.data.__schema.types = filteredData;

    fs.writeFile(filePath, JSON.stringify(result.data), err => {
        if (err) {
            console.error('Error writing fragmentTypes file', err);
        } else {
            console.log('Fragment types successfully extracted!');
        }
    });
});