# Audio Project polly

## Setup
- fork and clone repository 
```bash
git clone <repo name>
cd <repo name>
```
- install dependencies
```bash
npm install
```
- open in vscode
```bash
code .
```
- rename the file `.env.example` to `.env`
- edit the `.env` file and replace the `AWS_KEY` with your key and the `AWS_SECRET_KEY` with your secret key and save the file

- open the vscode terminal
- run the dev server
```bash
npm run dev
```
- open http://localhost:3333/ in the web browser


### TODO
- change the server.js file at line 47

current line 47:
```JavaScript
  res.send(`<audio controls src=${JSON.stringify(audioUrl)}></audio>`);
```

read up about `res.json()` [here](https://flaviocopes.com/express-send-json-response/)

then make the output of line 47 to actually output:
```json
{ "audio_url": "https://polly-url-as-a-string-here/" }
```