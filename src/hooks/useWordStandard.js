export const useWordStandard = (word) => {
    let lowerCaseWord = word.toLowerCase();
    let noSpacesWord = lowerCaseWord.replace(" ", "");
    let splitedArray = noSpacesWord.split("");
    let noAccentArray = splitedArray.map((char) => {
      if (char == "í") {
        char = "1";
      }
      switch (char) {
        case "á" : 
          char = "a";
        break;
        case "é":
          char = "e";
        case "i":
          char = "1";
        break;
        case "ó":
          char = "o";
        break;
        case "ú":
          char = "u";
        case "c":
          char = "s";
        break;
      }
      return char;
    })
    let fixedWord = noAccentArray.join("");
    return {fixedWord};
}