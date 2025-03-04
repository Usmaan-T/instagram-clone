import React from 'react'
import { auth, firestore } from '../firebase/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { doc, setDoc } from 'firebase/firestore';
import useShowToast from './useShowToast';

const useSignupWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast()
    
    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName){
            showToast("Error", "Please fill in all fields", "error");
            return;
        }
            
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
            if(!newUser && error) {
                showToast("Error", error.message, "error");
                return
            }
            if (newUser) {
                const userDoc = {
                    uid:newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    fullName:inputs.fullName,
                    bio:'',
                    profilePicURL:'',
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:Date.now()
                }
                await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc);
                localStorage.setItem('user-info', JSON.stringify(userDoc))
            }
        
        }   catch(error) {
            showToast("Error", error.message, "error");
        }
    }

    return {
        loading,error,signup
    }
}

export default useSignupWithEmailAndPassword