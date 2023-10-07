let counter: number; 

let counter2 = 2; 

const setCounter = (max=100) => {
    // typescript deduis que max sera du type number
}; 

const increment = (counter: number) => {
    return counter++; 
    // typescript déduis que la fonction renvera un type number
}

// la fonction ci dessus est équivalente à celle du bas pour typescript
const increment2 = (counter: number) : number => {
    return counter++; 
}; 

let items = [1,2,3,null]; 

let items2 = [1,2,null,'Jhon']; 

document.addEventListener('click', (e) => {
    console.log(e.button);
}); 

/*
En résumé, vous devriez généralement utiliser 
l'inférence de types autant que possible pour 
tirer parti des avantages de TypeScript en 
matière de flexibilité et de réduction de 
la duplication de code. Cependant, il peut 
être nécessaire d'utiliser des annotations 
de types dans des situations où TypeScript 
ne peut pas déduire correctement le type 
ou lorsque vous souhaitez rendre votre 
code plus explicite pour les autres 
développeurs ou pour des raisons de 
sécurité. L'utilisation appropriée 
des deux approches dépendra 
de la situation spécifique.
*/