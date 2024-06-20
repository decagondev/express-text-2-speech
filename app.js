require('dotenv').config();

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
  // Update the Text parameter with the text entered by the user
  speechParams.Text = "I Am a Fish";
  try {
    let url = await getSynthesizeSpeechUrl({
      client,
      params: speechParams,
    });
    console.log(url);
    // Load the URL of the voice recording into the browser
    // document.getElementById("audioSource").src = url;
    // document.getElementById("audioPlayback").load();
    // document.getElementById("result").innerHTML = "Speech ready to play.";
  } catch (err) {
    console.log("Error", err);
    // document.getElementById("result").innerHTML = err;
  }
};

speakText();