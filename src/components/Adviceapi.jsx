// 
import React, { useEffect, useState } from 'react'

const Adviceapi = () => {
    const [advice, setadvice]= useState("");
    const [count, setcount] = useState(0);

    const advicefunc = async ()=>{
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setadvice(data.slip.advice);
        setcount((c) => c+1);

    }
    useEffect(() => {
     advicefunc()
    }, [])
    
  return (
    <div>
      <h1>I am giving u a free advice ...</h1>
      <button onClick={advicefunc}>Click Me</button>
      <p>{advice}</p>
      <Message count = {count}/>
      
    </div>
  )
}
export default Adviceapi

// const Message = (props)=>{
//     return(
//         <p>You have read {props.count} pieces of advice.</p>
//     )
// }




// // Online C++ compiler to run C++ program online
// #include <iostream>
// #include <bits/stdc++.h>
// using namespace std;

// int main() {
//     int n; cin>>n;
//     int x=3, y=2; // x is no. of 2 seater planes
//     map<int, int> m;
//     for(int i=0; i<n; i++){
//         int t; cin>>t;
//         m[t]++;
//     }
    
//     map<int, int>::reverse_iterator it;
//      for (it = m.rbegin(); it != m.rend(); it++) {
//         // cout<<it->first<< it->second<< endl;
//         if(it->second>=2){
//             x--;
//             m[it->first]-=2;
//         }
//     }
    
//     for (it = m.rbegin(); it != m.rend(); it++) {
//         // cout<<it->first<< it->second<< endl;
//         if(it->second>0){
            
//         }
//     }
    
    
//     for(auto a : m)
//         cout<<a.first<<" "<<a.second<<endl;;

//     return 0;
// }