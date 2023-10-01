//The price of one book
const price = 800;

//Discounts list of how many book you buy that have different titles
let discount = {  '1': 0, 
                  '2': 0.05, 
                  '3': 0.10 , 
                  '4': 0.20, 
                  '5': 0.25
};


//Calculates how many books
const cost = (books) => {
  //Total
  let total = 0;
  const setBooks = [];

  while (books.length > 0) {
     const subBookSet = [];
     for (let i = 0; i < books.length; i++) {
          const book = books[i];
          if (!subBookSet.includes(book)) {
              subBookSet.push(book);
              books.splice(i,1);
              i--;
           }
       }
       setBooks.push(subBookSet);
    };

    for(let j = 0; j < setBooks.length; j++) {
        for (let k = j + 1; k < setBooks.length; k++) {
            if (setBooks[j].length === 5 && setBooks[k].length === 3) {
                setBooks[k].push(setBooks[j].pop());
            }
        }
    };

    setBooks.forEach(subBookSet => {
        total += subBookSet.length * (price - (price * discount[subBookSet.length]));
    });

    return total;
};

console.log(cost(['Book', 'Book', 'Slop', 'Blud']));










