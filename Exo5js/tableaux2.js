// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.

let tab1 = [1,2,3,4,5];

function f1(n) {
        console.log(n[n.length-1]);
}
f1(tab1);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

let tab2 = [1,2,3,4,5];

function f2(n) {
        return(n[n.length-1]);
}
f2(tab2);
console.log(f2(tab2));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

let tab3 = [1,2,3,4,5];

function f3(n) {
        let min=n[0];
        for (let i = 0 ; i < n.length; i ++) {
                if(n[i]<min) {
                        min=n[i];
                }
        }
        return min;
}
f3(tab3);
console.log(f3(tab3));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

let tab4 = [1,2,3,4,5];

function f4(n) {
        let max=n[0];
        for (let i = 0 ; i < n.length; i ++) {
                if(n[i]>max) {
                        max=n[i];
                }
        }
        return max;
}
f4(tab4);
console.log(f4(tab4));
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]