import React from 'react'

const Jscourse = () => {
    const foodItems = [
        {
          id: 1,
          name: 'Burger',
          price: 5.99
        },
        {
          id: 2,
          name: 'Pizza',
          price: 8.99
        },
        {
          id: 3,
          name: 'Pasta',
          price: 7.49
        },
        {
          id: 4,
          name: 'Salad',
          price: 4.99
        },
        {
          id: 5,
          name: 'Sushi',
          price: 12.99
        },
        {
          id: 6,
          name: 'Tacos',
          price: 3.99
        },
        {
          id: 7,
          name: 'Steak',
          price: 15.99
        },
        {
          id: 8,
          name: 'Sandwich',
          price: 6.49
        },
        {
          id: 9,
          name: 'Soup',
          price: 4.49
        },
        {
          id: 10,
          name: 'Ice Cream',
          price: 3.49
        }
      ];
      
      const {name, price} = foodItems[2];   // destructuring
      console.log(name, price);

      const {id, ...otherinfo} = foodItems[2]; // here ... is rest operator
      console.log(id, otherinfo);

      const newdata = {...foodItems[2], review: "Amazing"};  // here ... is spread operator
      console.log(newdata);

      console.log(`${foodItems[0].id}. I love the taste of ${foodItems[1].name}`);      // using template literals

      const x=11;    // using ternary operations instead of if else blocks
      const newstring = x>10?"A large number":"A small number";
      console.log(newstring);

      const arrowfunc = str=>str.split("");   // arrow function
      console.log(arrowfunc("Aniket"));

      console.log(true && 0); // this operator checks for fist value, it its true then it return second value otherwise it returns second value // but still if second value is false then it will return second value
      console.log(0 || false); // it will return first true value, if first value is false it returns second true value and if both are false it returns second false
      console.log(1 ?? 0); // it is similar to || just if both values are false it returns first false

      const fastfood = [{name: 'pizza', price: 100},{name: 'burger', price: 100},{name: 'momos', price: 100},{name: 'noodles', price: 100}];
      console.log(fastfood[0]?.names && 20);

      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];     // array map function
      const doublenums = numbers.map(n=>n*2);
      console.log(doublenums);
      const evennums = numbers.filter(num=>num%2===0).map(n=>n*2);      // arrat filter function
      console.log(evennums);

      const sumnums = numbers.reduce((acc, a)=>acc+a, 0);  // reduce function takes two parameters: a function and a starting value.
      console.log(sumnums);        // the function in reduce function takes two parameters: accumulater(result from previous iteration) and current array value

      // const sortedarray = numbers.sort((a, b)=> b-a); // (a-b) sort in ascending order and (b-a) sort in descending order // the issue is that it change the original array so we use slice as in next line
      const sortedarray = numbers.slice().sort((a, b)=>b-a);
      console.log(sortedarray, numbers);

    //   fetch('https://jsonplaceholder.typicode.com/todos')       // promise
    //   .then(res=>res.json())
    //   .then(data=>console.log(data));

      const fetchfunc = async () => {        // using async await is better practice for fetching data
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');   
        const data = await res.json(); // try removing await from here  // this will return a promise
        console.log(data);
      }
      fetchfunc();


  return (
    <div>
      Welcome to JavaScript Course
      {
        foodItems.map((a)=>{
            return(
                <div key={a.id}> 
                    <p>{a.id}</p>
                    <p>{a.name}</p>
                    <p>{a.price}</p> <br />
                </div>
            )
        })
      }
    </div>
  )
}

export default Jscourse
