function generatePassword(){
    //Getting user inputs
    const getChecked = document.getElementById("isSpecial").checked
    const getLength = document.getElementById("passLength").value

    //Final Result Holder
    let myGreatPassword = '';

    //Base Data for Calculation
    const baseArr = [
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?']
      ]

    
    const myArr = [0,1,2,3];
    let neededArr = [];

    if (getLength >= 4) {
        for (let i = 0; i < getLength; i++) {
            neededArr.push(myArr[i % myArr.length]);
        }
        console.log("Needed Array : ", neededArr);
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    let randomizedArray = shuffleArray(neededArr);
    console.log("Randomized Array : ", randomizedArray)
    let randomIterator = randomizedArray.length;
    console.log("randomIterator : ", randomIterator)

    if(getChecked == false){
        for(i=0;i<randomIterator;i++){
            if(randomizedArray[i]==3){
                randomizedArray[i] = Math.floor(Math.random() * 2) + 1;
            }
        }
        console.log("Modified Array : ",randomizedArray)
    }

    for(let i=0; i < randomIterator; i++){
        var x = randomizedArray[i]
        let randomUpper = Math.floor(Math.random() * baseArr[0].length);
        let randomLower = Math.floor(Math.random() * baseArr[1].length);
        let randomNumber = Math.floor(Math.random() * baseArr[2].length);
        let randomSpecial = Math.floor(Math.random() * baseArr[3].length);
        if(x==0){
            myGreatPassword = myGreatPassword + baseArr[0][randomUpper];
        }
        if(x==1){
            myGreatPassword = myGreatPassword + baseArr[1][randomLower];
        }
        if(x==2){
            myGreatPassword = myGreatPassword + baseArr[2][randomNumber];
        }
        if(x==3){
            myGreatPassword = myGreatPassword + baseArr[3][randomSpecial];
        }
    }
    console.log(myGreatPassword);

    let outputText = document.getElementById("generatedPassword")
    outputText.innerHTML = myGreatPassword;

     // Show/hide copy button based on password content
            const copyBtn = document.getElementById("copyBtn");
            if(myGreatPassword.length > 0) {
               copyBtn.style.display = "inline-block";
            } else {
               copyBtn.style.display = "none";
            }
}


// {
//     var x = randomizedArray[i]
//     if(i==0){
//         myGreatPassword.push(baseArr[randomUpper])
//     }
//     if(i==1){
//         myGreatPassword.push(baseArr[randomLower])
//     }
//     if(i==2){
//         myGreatPassword.push(baseArr[randomNumber])
//     }
//     if(i==3){
//         myGreatPassword.push(baseArr[randomSpecial])
//     }
// }

