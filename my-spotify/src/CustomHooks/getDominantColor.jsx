const getDominantColor = (image) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  let r = 0,
    g = 0,
    b = 0;
  const length = data.length / 4;

  for (let i = 0; i < data.length; i += 4) {
    r += data[i]; // Red
    g += data[i + 1]; // Green
    b += data[i + 2]; // Blue
  }

  r = Math.floor(r / length);
  g = Math.floor(g / length);
  b = Math.floor(b / length);

  return `rgb(${r}, ${g}, ${b})`;
};

export default getDominantColor;
