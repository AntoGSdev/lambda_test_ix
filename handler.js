'use strict';

module.exports.roman = async (event, context) => {


  //let inputValue2 = event.pathParameters.number;
  let inputValue = event.number;
  const result = [];
  let resultString ;
  // console.log(inputValue);
  // console.log(inputValue2);
  console.log(event);
  console.log(inputValue);

  while (inputValue > 0){
    console.log(inputValue);
    if((inputValue / 1000) >= 1) {
      //console.log("M: " + inputValue);
      //console.log("Miles");
      result.push('M');
      inputValue = inputValue - 1000;
    } else if ((inputValue / 500) >= 1) {
      if(inputValue >= 900 && inputValue <= 1000){
        result.push('I');
        result.push('M');
        inputValue = inputValue - 900;
      }else{
        // console.log("D: " + inputValue);
        result.push('D');
        inputValue = inputValue - 500;
      }
    } else if ((inputValue / 100) >= 1) {
      if (inputValue >= 400 && inputValue <= 500){
        result.push('I');
        result.push('D');
        inputValue = inputValue - 400;
      }else{
        result.push('C');
        inputValue = inputValue - 100;
      }
    } else if ((inputValue / 50) >= 1) {
      if(inputValue >= 90 && inputValue <= 100) {
        result.push('X');
        result.push('C');
        inputValue = inputValue - 90;
      }else {
        result.push('L');
        inputValue = inputValue - 50;
      }
    } else if ((inputValue / 10) >= 1){
      if(inputValue >= 40 && inputValue <= 50){
        result.push('X');
        result.push('L');
        inputValue = inputValue - 40;
      } else {
        result.push('X');
        inputValue = inputValue - 10;
      }

    } else if ((inputValue / 5) >= 1) {
      result.push('V');
      inputValue = inputValue - 5;
    } else {
      result.push('I');
      inputValue = inputValue - 1;
    }
  }

  resultString = result.join('');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!' + resultString,
      input: event,
    }),
  };


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
