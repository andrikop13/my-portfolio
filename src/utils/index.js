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

  calculateRemainingTime: (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    // Return remaining duration
    return adjExpirationTime - currentTime;
  },

  fileToBase64: async (file) => {
    let result_base64 = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    });

    return result_base64;
  },
};
