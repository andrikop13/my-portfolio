module.exports = {
  imgToBase64: async (image_src) => {
    const data = await fetch(image_src);
    const blob = await data.blob();

    const b64img = new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
    });

    const rData = await b64img.then((d) => {
      return d;
    });
    return rData;
  },
};
