import React, { useContext, useState } from 'react'
import img from "../img/generic.png"
import { collection, query, where, getDoc, getDocs, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { AuthContext } from '../context/AuthContext';
const SearchBar = () => {

  const [username, setUsername] = useState('');
  const [user, setUser] = useState<any | null>(null);
  const [err, setErr] = useState(false);
  

  const currentUser = JSON.parse(JSON.stringify(useContext(AuthContext)));
  // get all the friends
  
  const handleSearch = async () =>{
    // console.log(username);
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
    
  }

  const handleKey = (e: any) =>{
    if(e.code === "Enter"){
      // console.log(username);
      handleSearch();
    }
  }

  const handleSelect = async () =>{
    //check if chat exists, if not create one
    const combinedId = 
      currentUser.uid > user.uid 
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", ));  
      if(res){
        await setDoc(doc(db, "chats", combinedId), {messages: []});

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      setErr(true);
    }
  }

  return (
    <>
    <div>
        <input type="text" name="text" placeholder='Search' id='search'onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}/>
    </div>
    {err && <span>Something went wrong</span>}
    {user && <div className='userTabContainer' onClick={handleSelect}>
    <div className='imageContainer'>
      <img src={user.photoURL} alt='no img'/>
    </div>
      <span>{user.displayName}</span>
  </div>}
  </>
  )
}

export default SearchBar