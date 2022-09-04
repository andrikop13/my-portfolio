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
        return +res.status !== 204 ? res.json() : {};
      })
      .then((data) => {
        if (data?.status === "error" || data?.status === "fail")
          throw new Error(data.message);
        resolve({ data, errorExists: false });
      })
      .catch((err) =>
        resolve({ data: null, errorExists: true, errorDetails: err })
      );
  });
};

export default httpRequest;
