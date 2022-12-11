import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useState, useEffect, useContext } from "react"
import { auth } from "../firebase/firebase";

interface AuthUser{
    uid: string | null | undefined,
    displayName: string | null | undefined,
    photoURL: string | null | undefined,
};

export type AuthUserContext = [AuthUser, React.Dispatch<React.SetStateAction<AuthUser>>] | null | {};

export const AuthContext = createContext<AuthUserContext>(null);

export const AuthContextProvider = ({children}:{
  children: ReactNode,
}) => {
    const [currentUser, setCurrentUser] = useState({});
    
    useEffect(() => {

      const unsub = onAuthStateChanged(auth, (user) =>{
        const temp: AuthUser = {
          uid: user?.uid,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
        }


        setCurrentUser(temp);
        console.log(temp);
      });
    
      return () => {
        unsub();
      }
    }, [])
    
    return  (
        <AuthContext.Provider value = {currentUser}>
            {children}
        </AuthContext.Provider>
    );

}

