// - 1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.

function somme (a, b) {

    console.log(a + b);
    return a + b;
    
} somme(2, 2);

// - 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

const array = [134, 47, 8, 62, 7, 28];

function small (myArray) {

    let small = 1000;

    for (let i = 0; i < myArray.length; i++) {

        myArray[i] < small ? small = myArray[i] : console.log(small);
        
    }

    console.log(small);
    return small;
    
} small (array);

// - 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

function voyelles (params) {

    console.log(params.replace(new RegExp("[a|e|i|o|u|y]{1,}"), ""));
    
} voyelles("faeiouyf");

// - 4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

function alphabetique (params) {

    for (let i = 0; i < params.length; i++) {
        
        for (let y = i; y < params.length; y++) {

            if (params[y] < params[i]) {

                let temporaire = params[y];
                params[y] = params[i];
                params[i] = temporaire;
                
            }
            
        }
        
    }

    console.log(params);
    return params;
    
} alphabetique(["Bonjour", "Holà", "Hello", "Haloà"]);

// - 5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".



// - 6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.



// - 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.

function sort (params) {

    for (let i = 0; i < params.length; i++) {
        
        for (let y = 0; y < params.length; y++) {
            
            if (params[y] < params[i]) {

                let temporaire = params[y];
                params[y] = params[i];
                params[i] = temporaire;
                
            }

        }
        
    }

    console.log(params);
    return params;
    
} sort([2,5,3,6,7]);

// - 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.

function voyellesUppercase (params) {

    for (let i = 0; i < params.length; i++) {
        
        if (params.toString().charAt(i).match() == new RegExp("[a|e|i|o|u|y]{1,}")) {

            params.toString().charAt(i).match().toUppercase();
            console.log(params);
            
        }
        
    }

    console.log(params);
    return params;
    
} voyellesUppercase("voyelles");


// - 9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.



// - 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.

