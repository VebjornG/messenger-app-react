import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import firebaseConfig, { db } from "../../components/firebaseconfig"
import Layout from '../../components/layout'
import Card from '../../components/card'
//import app from "firebase/app"
//import "firebase/firestore"

import { Container, 
         Form, 
         Title, 
         Input, 
         Button, 
         Text, 
         StyledLink } from "./styles/signup"

//import { AuthContext } from "../../components/auth"




const Signup = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [name, setName] = useState('')
    //const db = firestore();
    //const { currentUser } = useContext(AuthContext)
    //const [password, setPassword] = useState('')
    //const [email, setEmail] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault()  // Prevent the default, which is submitting the form

        const { email, password } = e.target.elements   // the (deconstructed) value of the email and password the user wrote

        try {
            //debugger
            //e.preventDefault()
            //const { email, password } = e.target.elements   // the (deconstructed) value of the email and password the user wrote
            firebaseConfig
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)  // Creates user and stores it in Firebase
                .then(result => {
                    result.user.updateProfile({     // Set Username for later use
                        displayName: name
                    })
                    .then(() => {
                        // Updated successfully if here
                        const loggedInUser = {
                            displayName: result.user.displayName,
                            email: result.user.email,
                            uid: result.user.uid,
                            isOnline: true
                        }
                        db.collection('users').add({
                            displayName: result.user.displayName,
                            email: result.user.email,
                            uid: result.user.uid,
                            createdAt: new Date()
                        })
                        .then(() => {
                            //successful
                            localStorage.setItem('user', JSON.stringify({loggedInUser}))
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    })
                });
            setName(name)          // Sets name
            console.log(localStorage.loggedInUser)
            //console.log(name)
            setCurrentUser(true)   // Sets currentUser to true
            //setEmail(email.value)
            //setPassword(password.value)
        }catch (error) {
            alert(error)
        }
    }

    //const isInvalid = email === '' ||  password === ''

    if (currentUser) {
        return(
            <Redirect to="/"/>
        ) 
    }

  return(
    <Layout>
        <Container>
            <Card>
                <Title>Sign up</Title>
                <Form onSubmit={HandleSubmit}>
                    {/*<label for="username">ame: </label>*/}
                    <Input type="name" 
                           name="name" 
                           placeholder="Username" 
                           onChange={(e) => setName(e.target.value)}
                    />
                    {/*<label for="email">Email: </label>*/}
                    <Input type="email" name="email" placeholder="Email" />
                    {/*<label for="passowrd">Password: </label>*/}
                    <Input type="password" name="password" placeholder="Password" />

                    <Button type="submit">Submit</Button>

                    <Text>Already signed up? <StyledLink to="/signin">Sign in here!</StyledLink></Text>
                </Form>
            </Card>
        </Container>
    </Layout>
   )

 }

export default Signup