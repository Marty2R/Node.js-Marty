// Ecrire une fonction qui prend un tableau de nombre en paramètre et qui retourne le plus grand nombre du tableau :

const array = [134, 47, 8, 62, 7, 28];

function small (myArray) {

    let small = 1000;

    for (let i = 0; i < myArray.length; i++) {

        myArray[i] < small ? small = myArray[i] : console.log(small);
        
    }

    console.log(small);
    return small;
    
} small (array);

