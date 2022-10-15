// const postsEL = document.getElementById('posts');

// const getData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();

//      const ID = res.filter((el) => el.userid < 2);

//      postsEL.innerHTML = ID.json("");
// };
// getData();

// const listOfUsers = [
//     {name: "Tima", age:2},
//     {name: "Alina", age:1},
//     {name: "Alisher", age:2},
//     {name: "Eldiar", age:1},
//     {name: "nueislam", age:2},
//     {name: "Samat", age:1},
//     {name: "Beka", age:2},
//     {name: "Muhamed", age:1},
// ];

// const ger = listOfUsers.filter((el) => el.age  < 2)
// console.log(ger)

const postsEL = document.getElementById('posts')

const Data = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();


    const posts = data.map(
        (el) =>`
        <div class="post">
       <h1>${data[1].userId}</h1>
        <h2>${el.id}</h1>
        <h3>${el.title}</h2>
        <p>${el.body}</p>
        </div> 
        `);



        postsEL.innerHTML = posts.join("")
};

Data();





     


