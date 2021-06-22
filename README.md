# node_validator
* Generate schema
* Replace input
* Check schema with input
### Generate schema
Upload response from request into this [link](https://www.liquid-technologies.com/online-json-to-schema-converter) and copy schema into `_schema.json`
### Replace input
Replace input with response body you get from request and paste into `_input.json`
### Check schema with input
on `windows`
```ps1
node .\index.js
```
on `linux/osx`
```sh
node index.js
```