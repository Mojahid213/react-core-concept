import {useEffect,useState} from 'react'
import './App.css';

function App() {
  const friends = [
    {name:'Nazmul',address:'Randunimura'},
    {name:'Jaber',address:'Hajigonj'},
    {name:'Shukur',address:'Dkaka'},
    {name:"Rakib",address:'Dhaka'}
  ];
  const products= [
    {name:"photoshop",price:'$99.99'},
    {name:"Illustrator",price:'$54.99'},
    {name:"PDF Reader",price:'$5.99'},
    {name:"keyboard",price:'$150'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
      {
        products.map(pd => <Product product={pd}></Product>)
      }
       {
         friends.map(fr => <Person name={fr.name} address={fr.address}></Person>)
       }
      </header>
    </div>
  );
}

function Counter(){
  const [Count, setCount] = useState(0);
  // const handleIncrease=()=>{
  //  setCount(Count+1);
  // }
  return(
    <div>
      <h2>count:{Count}</h2>
      <button onClick={()=>setCount(Count-1)}>Decrease:</button>
      <button onClick={() =>setCount(Count+1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [Users, setUsers] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
 return (
   <div>
     <h2>Total Users:{Users.length}</h2>
     <ul>
       {
         Users.map(n => <li>{n.name}</li>)
       }
     </ul>
   </div>
 )
}

function Person(mydata){
  const personStyle = {
    border:'5px solid black',
    margin:'5px',
    padding:'5px',
    backgroundColor:'purple',
  }
  return (
    <div style={personStyle}>
      <h2>Name: {mydata.name}</h2>
      <h3>Address: {mydata.address}</h3>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'salmon',
    height:'250px',
    width:'300px',
    margin:'5px'
  }
  const {name,price} = props.product;
  console.log(props);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

export default App;
