import React, { useContext } from 'react'
import { Redirect } from "react-router-dom"
import { 
        Header, 
        Container, 
        Logo, 
        Ul, 
        Li, 
        Div, 
        StyledNavLink, 
        StyledLink } from '../header/styles/header'

import firebaseConfig from "../firebaseconfig"
import { AuthContext } from "../../components/auth"


const HeaderComponent = () => {
    const { currentUser, name } = useContext(AuthContext)     // Get user from Firebase
    const signOut = () => {

        if (currentUser) {
            firebaseConfig.auth().signOut()
                .then(() => {
                    //alert("Signed out")
                    return <Redirect to="/"/>
                })
                .catch((error) => {
                    alert(error)
                }) 
        }
    }

  return(
    <Header>
        <Container>
            <Logo><StyledLink to="/">Messenger</StyledLink></Logo>
            { !currentUser ?
                (<Ul>
                    <Li><StyledNavLink to={"/signin"}>Sign in</StyledNavLink></Li>
                    <Li><StyledNavLink to={"/signup"}>Sign up</StyledNavLink></Li>
                </Ul>) : (null)
            }
        </Container>

        <Div>
            {currentUser ? `Logged in as ${name}` : ``}
        </Div>

        <Ul>
            <Li><StyledLink 
                    to={"/"} 
                    onClick={signOut}
                >
                    Logout
                </StyledLink>
            </Li>
        </Ul>
    </Header>
   )

 }

export default HeaderComponent