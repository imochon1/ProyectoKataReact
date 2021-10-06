export const validateEmail = (email) => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegEx.test(email);
};

export const decodedJWT = (jwtParams) => {
  // eslint-disable-next-line no-unused-vars
  const [header, payload, signature] = jwtParams.split(".");

  const payloadFortmatted = payload.replace("-", "+").replace("_", "/");

  // eslint-disable-next-line no-unused-vars
  const payloadData = JSON.parse(atob(payloadFortmatted));

  return payloadData;
  //console.log("payloadData", payloadData);
};
