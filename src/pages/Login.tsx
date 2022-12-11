import "../style.scss"
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export function Login(): any{
    const [err, setErr] = useState(false); 
    const navigate = useNavigate();
    const handleSubmit = (e: any) =>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            signInWithEmailAndPassword(auth, email, password);
            navigate('/');      
        } catch (error) {
            setErr(true);
        }
    }


    return(
        <>
            <div className="formContainer">
                <div className="formWrapper">
                    <span className="siteName">GenChat</span>
                    <span className="title">Login</span>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="JohnDoe@example.com"/>
                        <input type="password" placeholder="password"/>
                        <button>Log in</button>
                        {err && <span>Something went wrong</span>}
                    </form>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login;