import React, { useContext } from 'react'
import Layout from '../../components/layout'

import { Container, 
         Title, 
         Form, 
         Button, 
         Input, 
         Text, 
         StyledLink } from "./styles/signin"

import { Redirect } from "react-router-dom"
import { AuthContext } from "../../components/auth"
import firebaseConfig from "../../components/firebaseconfig"
import Card from "../../components/card"
//import Chat from '../chat'

const Signin = () => {

    const handleSubmit = (e) => {
        e.preventDefault()  //

        const { email, password } = e.target.elements   // the (deconstructed) value of the email and password the user wrote
        try {
            firebaseConfig
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)  // Signs in user and stores it in Firebase
        }catch (error) {
            alert(error)
        }
    }

    const { currentUser } = useContext(AuthContext)     // Get user from Firebase

    if (currentUser) {
        return(
            <Redirect to="/"/>
        ) 
    }
    
  return(
    <Layout>
        <Container>
            <Card>
                <Title>Sign in</Title>
                <Form onSubmit={handleSubmit}>
                    {/*<label for="email">Email: </label>*/}
                    <Input type="email" name="email" placeholder="Email" />
                    {/*<label for="passowrd">Password: </label>*/}
                    <Input type="password" name="password" placeholder="Password" />

                    <Button type="submit">Sign in</Button>

                    <Text>Not signed up? <StyledLink to="/signup">Sign up here!</StyledLink></Text>
                </Form>
            </Card>
        </Container>
    </Layout>
   )

 }

export default Signin