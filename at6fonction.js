//Function
// Exercice 1 : Documentation

// 1 -- Qu'est-ce qu'une fonction en JavaScript ?
//En JavaScript, une fonction est un bloc de code conçu pour exécuter une tâche spécifique. 

// Exercice 2 : Les fonctions
// 2--
function addition (a,b) {
  
  return a + b
}
console.log(addition(4,6))

// 3--
function esPair (nombre) {
  if (n % 2 == 0){
    return true;
  }
  return false;
}
console.log(esPair(5));

// 4--
function calculerMoyenne (tableau , accumulateur){
  for(i=0; i < tableau.length; i++) {
    accumulateur += tableau[i];
  }
  return parseInt(accumulateur / tableau.length);
}
console.table(calculerMoyenne([4,5,8,9],0));


