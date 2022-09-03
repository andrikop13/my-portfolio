const httpRequest = (url, method, body = null, headers = null) => {
  let options = body
    ? {
        method,
        body,
      }
    : { method };

  if (headers) options.headers = headers;

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could execute request succesfully!");
        }
        return res.json();
      })
      .then((data) => {
        resolve({ data, errorExists: false });
      })
      .catch((err) =>
        resolve({ data: null, errorExists: true, errorDetails: err })
      );
  });
};

export default httpRequest;
