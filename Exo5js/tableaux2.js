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
let tab5 = [1242,24,342,4244,45, 3802];

function f5(n) {
        let max1 = 0;
        let max2 = 0;
        for ( let i = 0 ; i < n.length ; i++) {
                if (n[i] > max1) {
                        max2 = max1;
                        max1 = n[i];
                }
                else if (n[i] > max2) {
                        max2 = n[i];
                }
        }
        return max2; 
}
console.log(f5(tab5));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
let tab6 = [551,22,36,551,520];

function f6(n,m) {
        let nbr = 0;
        for ( let i = 0 ; i < n.length ; i++) {
                if (n[i] == m) {
                        nbr++;
                }
        }
        return nbr;
}
console.log(f6(tab6, 551));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

let tab7 = [165, 51 , 512 ,232 ,56];

function f7 (n,m) {
        let nbr = 0;
        for ( let i = 0 ; i < n.length ; i ++) {
                if (n[i] == m) {
                        console.log("true");
                }
                else if (n[i] != m) {
                        console.log("false");
                }
                        
        }
}
f7(tab7, 165);
// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let tab8 = [];
for (let i = 0 ; i < 7777 ; i++) {
        tab8.push(i);
}
console.log(tab8);
// Créer un tableau qui contient [10,20,30,...,77770].
let tab9 = [];
for (let i = 10 ; i < 77771 ; i++) {
        if (i%10 == 0) {
                tab9.push(i);
        }
        
}
console.log(tab9);
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tab10 = [];
for (let i = 5 ; i < 38886 ; i++) {
        if (i%5 ==0) {
                tab10.push(i);
        }
}
console.log(tab10);
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
let tab11 = [21, 41, 51, 48, 26, 27, 28, 52, 26 , 35 ,25];
function f11(n) {
        for ( let i = n.length ; n[i-1] < 50 ; i--) {
                        n.pop();
        }
}
f11(tab11);
console.log(tab11);

let tab12 = [1,45,88,54,23,-100,12];
f11(tab12);
console.log(tab12); // doit afficher [1,45,88,54]

// EXO BONUS

let tabbonus = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function fbonus(n) {
        for ( let i = 0 ; i < 1 ; i++) {
                console.log(tabbonus.indexOf(13));
        }
}
fbonus(tabbonus);

// EXO BONUS MAISON

function benito(n,m) {
        let longueur = 0
        for ( let i = n.length/2 ; i < 15; i++) {
                if (m < n.length/2) {
                        longueur == n.length-14;
                }
                else if (m > n.length/2) {
                        longueur == n.length+14;
                }
        }
}
benito(tabbonus);
console.log(benito(tabbonus, 6));