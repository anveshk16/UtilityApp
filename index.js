const readLineSync = require('readline-sync');
const crypto = require('crypto');

switch (readLineSync.question("Choose which utility you want to use:\n1)URL Encoder\n2)URL Decoder\n3)Base64 Encoding\n4)Base64 Decoding\n5)String Hashing\n6)Epoch Converter\n7)Binary/Decimal/Hex/Octal Convertors\n8)RGB Convertor\n9)Unit Convertor\n")) {
  case "1": const URL = readLineSync.question("Enter the url to be encoded: ");
    console.log(encodeURIComponent(URL));
    break;
  case "2": const decodeURL = readLineSync.question("Enter the encoded URL to be decoded: ");
    console.log(decodeURIComponent(decodeURL));
    break;
  case "3": const string = readLineSync.question("Enter the string to be encoded to Base64 Encoding: ");
    console.log(Buffer.from(string).toString('base64'));
    break;
  case "4": const stringEncode = readLineSync.question("Enter Base64 encoded string to be decoded: ");
    console.log(Buffer.from(stringEncode, 'base64').toString('ascii'));
    break;
  case "5": const stringChoice = readLineSync.question("Enter the string to be hashed: ");
    let algo = 'md5';
    switch (parseInt(readLineSync.question("Choose which Hashing algorithm to use:\n1)md5\n2)sha-1\n3)sha-256\n4)sha-512\n"))) {
      case 1: algo = 'md5';
        console.log(crypto.createHash(algo).update(stringChoice).digest('hex'));
        break;
      case 2: algo = 'sha1';
        console.log(crypto.createHash(algo).update(stringChoice).digest('hex'));
        break;
      case 3: algo = 'sha-256';
        console.log(crypto.createHash(algo).update(stringChoice).digest('hex'));
        break;
      case 4: algo = 'sha-512';
        console.log(crypto.createHash(algo).update(stringChoice).digest('hex'));
        break;
      default: console.log("Invalid choice");
    }
    break;
  case "6":
    let dataObj = { year: 0, month: 0, date: 0, hours: 0, minutes: 0, seconds: 0 };
    switch (readLineSync.question("Choose which conversion to use:\na) To Human-date\nb) To Epoch\n")) {
      case "a": let utcSeconds = readLineSync.question("Enter the time in epoch, to convert to Human date: ");
        let d = new Date(parseInt(utcSeconds));
        dataObj.year = d.getFullYear(); dataObj.month = d.getMonth() + 1; dataObj.date = d.getDate(); dataObj.hours = d.getHours(); dataObj.minutes = d.getMinutes(); dataObj.seconds = d.getSeconds();

        console.log(dataObj);
        break;
      case "b": dataObj.year = parseInt(readLineSync.question("Enter the year: "));
        dataObj.month = parseInt(readLineSync.question("Enter the month: "));
        dataObj.date = parseInt(readLineSync.question("Enter the date: "));
        dataObj.hours = parseInt(readLineSync.question("Enter hours: "));
        dataObj.minutes = parseInt(readLineSync.question("Enter minutes: "));
        dataObj.seconds = parseInt(readLineSync.question("Enter seconds: "));

        let convertDate = new Date(dataObj.year, dataObj.month, dataObj.date, dataObj.hours, dataObj.minutes, dataObj.seconds);
        console.log(Date.parse(convertDate));
        break;

      default: console.log("Invalid choice!");
    }
    break;
  case "7": switch (readLineSync.question("Choose which conversion:\na)Binary To Decimal\nb)Binary to Hex\nc)Binary To Octal\nd)Decimal To Binary\ne)Decimal To Hex\nf)Decimal To Octal\ng)Hex to Decimal\nh)Hex To Binary\ni)Hex to Octal\nj)Octal To Binary\nk)Octal To Decimal\nl)Octal to Hex\n")) {
    case "a": console.log(parseInt(readLineSync.question("Enter binary number: "), 2));
      break;

    case "b": console.log(parseInt(readLineSync.question("Enter binary number: "), 2).toString(16));
      break;

    case "c": console.log(parseInt(readLineSync.question("Enter binary number: "), 2).toString(8));
      break;

    case "d": console.log(parseInt(readLineSync.question("Enter decimal number: "), 10).toString(2));
      break;

    case "e": console.log(parseInt(readLineSync.question("Enter decimal number: "), 10).toString(16));
      break;

    case "f": console.log(parseInt(readLineSync.question("Enter decimal number: "), 10).toString(8));
      break;

    case "g": console.log(parseInt(readLineSync.question("Enter Hexadecimal number: "), 16).toString(10));
      break;

    case "h": console.log(parseInt(readLineSync.question("Enter Hexadecimal number: "), 16).toString(2));
      break;

    case "i": console.log(parseInt(readLineSync.question("Enter Hexadecimal number: "), 16).toString(2));
      break;

    case "j": console.log(praseInt(readLineSync.question("Enter Octadecimal number: "), 8).toString(2));
      break;

    case "k": console.log(parseInt(readLineSync.question("Enter Octadecimal number: "), 8).toString(2));
      break;

    case "l": console.log(parseInt(readLineSync.question("Enter Octadecimal number: "), 8).toString(16));
      break;

    default: console.log("Invalid choice!");

  }
    break;
  case "8": let RGBcomponent = { red: "", blue: "", green: "" };
    switch (readLineSync.question("Enter which RGB Convertor to use:\na)RGB to HEX\nb)HEX to RGB\n")) {
      case "a": RGBcomponent.red = readLineSync.question("Enter which R: ");
        RGBcomponent.blue = readLineSync.question("Enter which B: ");
        RGBcomponent.green = readLineSync.question("Enter which G: ");
        const convertColor = (color) => {
          let hexadecimal = parseInt(color, 10).toString(16);
          if (hexadecimal.length == 1) {
            return "0" + hexadecimal;
          }
          return hexadecimal;
        }
        console.log("#" + convertColor(RGBcomponent.red) + convertColor(RGBcomponent.blue) + convertColor(RGBcomponent.green));

        break;

      case "b": let rgbColor = readLineSync.question("Enter RGB Value of the color: ");
        RGBcomponent.red = parseInt(rgbColor[1] + rgbColor[2], 16);
        RGBcomponent.blue = parseInt(rgbColor[3] + rgbColor[4], 16);
        RGBcomponent.green = parseInt(rgbColor[5] + rgbColor[6], 16);
        console.log(RGBcomponent);

        break;
        
      default: console.log("Invalid Choice!");

    }
    break;
  case "9": switch (readLineSync.question("Enter which Unit Convertor to use:\na)Meter to Centimeter\nb)Meter to Kilometer\nc)Meter to Millimeter\nd)Kilometer to Meter\ne)Kilometer to Centimeter\nf)Kiliometer to Millimeter\n")) {
    case "a": let meterToCm = parseInt(readLineSync.question("Enter value in Meter: ")) * 100;
      console.log(`Value in cm: ${meterToCm}`);
      break;

    case "b": let meterToKM = parseInt(readLineSync.question("Enter value in Meter: ")) / 1000;
      console.log(`Value in Kilometer: ${meterToKM}`);
      break;

    case "c": let meterToMM = parseInt(readLineSync.question("Enter value in Meter: ")) * 1000;
      console.log(`Value in Millimeter: ${meterToMM}`);
      break;

    case "d": let KMtoM = parseInt(readLineSync.question("Enter value in KiloMeter: ")) * 1000;
      console.log(`Value in Meter: ${KMtoM}`);
      break;

    case "e": let KMtoCM = parseInt(readLineSync.question("Enter value in KiloMeter: ")) * 10000;
      console.log(`Value in Centimeter: ${KMtoCM}`);
      break;

    case "f": let KMtomm = parseInt(readLineSync.question("Enter value in KiloMeter: ")) * 1000000;
      console.log(`Value in Millimeter: ${KMtomm}`);
      break;

    default: console.log("Invalid choice!");

  }
    break;
    
  default: console.log("Invalid choice entered!");

}
