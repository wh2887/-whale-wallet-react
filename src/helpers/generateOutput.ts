const generateOutput = (text:string,output = '') => {
  if ('123456789'.indexOf(text)>=0){
    output += text
    return output
  }
};
export {generateOutput};
