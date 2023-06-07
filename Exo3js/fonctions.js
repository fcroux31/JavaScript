// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1() {
    console.log(17);
}
// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();
// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2() {
    return 17;
}
// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
// Elle permet de reutiliser la valeur 17 plusieurs fois.//
// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n) {
    console.log(n*2);
}
// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n) {
    return n*2;
}
// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));
// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);
console.log(a);
// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(n,z) {
    console.log(n+z);
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77);
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(n,z) {
    return n+z;
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77));
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a = f6(a,f6(42,77));
console.log(a);
// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(i,j) {
    if (i > j) {
        return (i);
    }
    else {
        return (j);
    }
}
console.log(f7(1,2));
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
function f8(k,l,m) {
    if (k >= l && k >= m) {
        return (k);
    }
    else if (l >= k && l >= m) {
        return (l);
    }
    else {
        return (m);
    }
}
console.log(f8(1,4,4));
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8bis(k,l,m) {
    if ((f7(k,l)) > m) {
        return f7(k,l);
    }
    else {
        return m;
    }
}
console.log(f8bis(2,3,6));
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(y,w) {
    for (let i = 0 ; i < y ; i++) {
        console.log(w);
    }
}
f9(5,"test");