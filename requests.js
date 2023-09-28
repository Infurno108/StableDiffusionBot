var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const { key } = require("./config.json");

var raw = JSON.stringify({
  key: key,
  prompt: null,
  negative_prompt: "dog",
  width: "512",
  height: "512",
  samples: "1",
  num_inference_steps: "20",
  seed: null,
  guidance_scale: 7.5,
  safety_checker: "yes",
  multi_lingual: "no",
  panorama: "no",
  self_attention: "no",
  upscale: "no",
  embeddings_model: null,
  webhook: null,
  track_id: null,
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
