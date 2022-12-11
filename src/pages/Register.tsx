import "../style.scss";
import {Link, useNavigate} from "react-router-dom"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, storage, db} from "../firebase/firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export function Register(): any{
    const[err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e: any) =>{
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName+date}`);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                setErr(true);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                    
                    try {
                        await updateProfile(res.user,{
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });   
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                    }
                });
                }
            );

            
        } catch (error) {
            setErr(true);
        }

    }
    return (
        <>
            <div className="formContainer">
                <div className="formWrapper">
                    <span className="siteName">GenChat</span>
                    <span className="title">Register</span>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="visible name"/>
                        <input type="email" placeholder="JohnDoe@example.com"/>
                        <input type="password" placeholder="password"/>
                        <input type="file" style={{display: "none"}} id='file'/>
                        <label htmlFor="file">
                            <i className="fa-regular fa-image"></i>
                        </label>
                        <button>sign up</button>
                        {err && <span>Something went wrong</span>}
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </>
    )
}

export default Register;