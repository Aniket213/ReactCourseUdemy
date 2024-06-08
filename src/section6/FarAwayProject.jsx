import React, { useState } from 'react'

const FarAwayProject = () => {
    const style = {
        parent: {
            backgroundColor:'lightblue',
            width:'100vw',
            height:'auto ',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            gap:'50px'
        },
        additem: {
            border:'5px solid white',
            borderRadius:'10px',
            padding:'20px',
        },
        allitems: {
            border:'5px solid white',
            borderRadius:'10px',
            padding:'20px',
        },
        eachitem: {
            border:'2px solid white',
            borderRadius:'10px',
            padding:'5px',
        }
    };

    // ==========================================================
    const [items, setitems] = useState([]);
    const [item, setitem] = useState({
        itemname: null,
        itemquantity: 1,
        itemtaken: null,
    });
    
    const calculatechecked = ()=>{
        return items.reduce((count, item) => {
            if (item.itemtaken) {
                return count + 1;
            }
            return count;
        }, 0);
    }

    // ============== sorting functions
    const handleSortByTaken = () => {
        const sorteditems = [...items].sort((a, b)=>a.itemtaken - b.itemtaken);
        setitems(sorteditems);
    };

    const handleSortByQuantity = () => {
        const sorteditems = [...items].sort((a, b)=>a.itemquantity - b.itemquantity);
        setitems(sorteditems);
    };

  return (
    <div style={style.parent}>
      <div style={style.additem}>
        <h2>Add an item</h2>
        <form>
            <label htmlFor="number"></label>
            <select id="number" name="number" value={item.itemquantity} onChange={(e) => setitem(prevItem => ({ ...prevItem, itemquantity: parseInt(e.target.value) }))}>
                {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                        {index + 1}
                    </option>
                ))}
            </select>
            <label htmlFor="itemName">Name:</label>
            <input type="text" id="itemName" name="itemName" value={item.itemname} onChange={(e) => setitem(prevItem => ({ ...prevItem, itemname: e.target.value }))} />
            <button onClick={(e) => {e.preventDefault();setitems(prevItems => [...prevItems, item]);}}>Submit</button>
        </form>
      </div>

      <div style={style.allitems}>
        <h2>All Items</h2>
        {
            items.map((a,index)=>{
                return(
                    <div style={style.eachitem} key={index}>
                        <input type="checkbox" 
                             checked={a.itemtaken} 
                             onChange={() => {
                                const updatedItems = [...items]; // Copy the array
                                updatedItems[index].itemtaken = !updatedItems[index].itemtaken; // Toggle the itemtaken value
                                setitems(updatedItems); // Update the state
                            }} 
                        />
                        <p>Quantity: {a.itemquantity}</p>
                        <p>Name: {a.itemtaken ? <span style={{textDecoration: 'line-through'}}>{a.itemname}</span> : <span>{a.itemname}</span> } </p>
                        <p style={{cursor: 'pointer'}}><span className="material-symbols-outlined" onClick={(prevItems)=>{setitems(prevItems => prevItems.filter((_, i) => i !== index))}}>delete</span></p>
                    </div>
                )
            })
        }
      </div>
      <div>
        You have {items.length} items in your list and you have already packed {calculatechecked()} ({((calculatechecked()/items.length)*100).toFixed(1)}%) items
      </div>
      <div>
        <button onClick={()=>{setitems([])}}>Clear</button>
        <button onClick={handleSortByTaken}>Sort by Taken</button>
        <button onClick={handleSortByQuantity}>Sort by Quantity</button>
      </div>
    </div>
  )
}

export default FarAwayProject
