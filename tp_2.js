// Toute les request se trouvent ici :
const fs = require('fs');
const http = require("http");
const os = require("os");

// Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.

function read () {

    fs.readFile("test.txt", "utf-8", (err, data) => {

        if (err) {

            console.log(err);
            return

        }

        console.log("Content : " + data);

    });

}; //read();

// Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

function editeFile (params) {

    fs.readFile("test.txt", "utf-8", (err, data) => {

        if (err) {
    
            console.log("err");
            return
    
        }

        let newValue = data.replace(data, params);
    
        fs.writeFile('test.txt', newValue, function(){

            console.log("New content : " + newValue);
            
        });
    
    });
    
} //editeFile("Nouveau contenu du fichier !");

// Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.

// const port = 1337;
// const host = 'localhost';

// const server = http.createServer(function (req, res) {
    
//     const url = req.url;

//     if (url === "/text") {

//         fs.readFile("test.txt", "utf-8", (err, data) => {

//             if (err) {
    
//                 console.log(err);
//                 return
    
//             }
    
//             res.end("Content : " + data);
    
//         });
        
//     }

// });

// server.listen(port, host, function () {

//     console.log('Web server is running on port 1337');

// });

// Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.

function findFileIn (params) {

    let directory_name = params;

    let filenames = fs.readdirSync(directory_name);
      
    console.log("\nFilenames in directory:");
    
    filenames.forEach((file) => {
    
        console.log("File:", file);
    
    });

} //findFileIn("files");

// Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

function createAndWrite (params) {

    fs.writeFile("new file", params, function (err) {

        if (err) throw err;
        console.log('New file saved !');

    });

} // createAndWrite("Ceci est le contenu de mon nouveau fichier texte.");

// Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.

function userInfo () {

    console.log(os.homedir());
    
} //userInfo();

// Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.

