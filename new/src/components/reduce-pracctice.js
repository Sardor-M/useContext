const guests = ["Steve", "Joe", "Kim"];

const guestList = guests.reduce(
    (prev, curr) => {
        return prev + " ," + curr;
    },
    "I invite you Frank"
);

console.log(guestList);











//const salaries =[ 
 //   {name:"Joe" , salary:100},
//  {name: "Steve", salary: 230},
//    {name: "Kim", salary:450}
//];

// someArray.reduce((prev, curr) => do something with curr and pev, )

//const total = salaries.reduce((prev, curr) => {
//    return prev + curr.salary;
//}, 0);

//console.log("total", total);