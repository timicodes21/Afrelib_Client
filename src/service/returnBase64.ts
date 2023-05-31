export const getBase64 = (file: any) => {
  // console.log(file);
  return new Promise(resolve => {
    //let fileInfo;
    let baseURL = "";
    // Make new FileReader
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    reader.onload = () => {
      baseURL = reader.result as string;

      resolve(baseURL);
    };
  });
};
