require('dotenv').config();
const cors = require("cors");
const express = require('express');
const port = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());

const { Polly } = require("@aws-sdk/client-polly");
const { getSynthesizeSpeechUrl } = require("@aws-sdk/polly-request-presigner");

const client = new Polly({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

const speechParams = {
  OutputFormat: "mp3",
  Text: "Hello From Polly",
  TextType: "text",
  VoiceId: "Matthew",
};

const speakText = async () => {
  speechParams.Text = "I Am a Fish, and hello cesar";
  try {
    let url = await getSynthesizeSpeechUrl({
      client,
      params: speechParams,
    });
    console.log(url);
    return url;
  } catch (err) {
    console.log("Error", err);
  }
};


app.get('/', async (req, res) => {
  const audioUrl = await speakText();
  res.send(`<audio controls src=${JSON.stringify(audioUrl)}></audio>`); // TODO: Change this line
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});