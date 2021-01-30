import React, { useEffect, useState, createContext } from "react"
import firebaseConfig, { db } from "./firebaseconfig"

// This component determines whether or not a user has been authenticated

export const AuthContext = createContext()                  // Use Context to share currentUser status between our components instead of 
                                                            // drilling the prop down through the layers
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)
    const [name, setName] = useState('')
    const [isOnline, setIsOnline] = useState(null)
    const [users, setUsers] = useState([])

    useEffect(() => {
        firebaseConfig.auth().onAuthStateChanged((user) => {   // If the authentication state changes (that is, when the user 
            setCurrentUser(user)
            if (user !== null) {
                setName(user.displayName)                      // Because of updateProfile in signup.js Firebase knows what displayName is
                //setUsers(user)
            } 
            //setName(user.displayName)
            //setUserId(currentUser.uid)
            //console.log(user.getDisplayName)
            //console.log(currentUser.uid)
            console.log(user)                                  // signs in and out) currentUser is set and Loading is false. 
            setLoading(false)
            setIsOnline(true)                                  // The initial state is true, so before this is done AuthProvider returns
        })                                                     // the text "Loading..."
    }, [])

    useEffect(() => {
        db.collection('users')
            //.where("uid", "==", currentUser.uid)
            .onSnapshot(function(querySnapshot) {        // Listens for changes in the userdata in Firestore and adds it to users
            const _users = []
            querySnapshot.forEach(function(doc) {
                _users.push(doc.data())
                setUsers(_users)
            })
            console.log(users)
        })
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <AuthContext.Provider value={{ currentUser, name, isOnline, users }}>
            {children}
        </AuthContext.Provider>
    )
}