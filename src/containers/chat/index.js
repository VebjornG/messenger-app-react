import React, { useContext } from 'react'
import { Redirect } from "react-router-dom"
import { AuthContext } from "../../components/auth"
import firebaseConfig from "../../components/firebaseconfig"
import Signin from "../signin"
import Home from "../home"
import Layout from "../../components/layout"
import { Text, Button, Title } from "./styles/chat"


function Chat(){
    const { currentUser } = useContext(AuthContext)
    if (!currentUser) {
        return <Redirect to="/signin"/>
    }

    const signOut = () => {
        firebaseConfig.auth().signOut()
            .then(() => {
                alert("Signed out")
                return <Redirect to="/"/>
            })
            .catch((error) => {
                alert(error)
            })
    }

    return(
    <Layout>
        <Text>If you can see this you're logged in</Text>
        <Button onClick={signOut}>Sign out</Button>
    </Layout>
    )

 }

export default Chat