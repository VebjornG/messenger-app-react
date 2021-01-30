import { TextareaAutosize } from '@material-ui/core'
import React, { useContext } from 'react'
import { Redirect } from "react-router-dom"
import { AuthContext } from "../../components/auth"
import Layout from '../../components/layout'
import { 
        Section, 
        DivUsers, 
        DivName,
        DivPic,
        Image,
        DivChatArea,
        DivChatHeader,
        DivMessageSections,
        TextMessage,
        DivChatControls, 
        Button,
        Textarea,
        Div} from "./styles/home"

//import { Button } from '@material-ui/core';



function Home() {
    const { currentUser, name, isOnline, users } = useContext(AuthContext)

    console.log(users)
    return(
    <Layout>
        {currentUser ? (
            <Section>
                <DivUsers>
                        {   users.length > 0 ?
                            users.filter(name => name !== currentUser.displayName).map(user => {
                                return (
                                <DivName key={user.uid}>
                                    <DivPic>
                                    <Image src="https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"/>
                                    </DivPic>
                                    <Div>
                                        <span style={{ fontWeight: 500 }}>{user.displayName}</span>
                                        {isOnline ? <span>online</span> : <span>offline</span>}
                                        {/*<span>online</span>*/}
                                    </Div>
                                </DivName>)
                        }) : null
                        }
                </DivUsers>

                <DivChatArea>
                    <DivChatHeader>{name}</DivChatHeader>
                        <DivMessageSections>
                            <div style={{ textAlign: "left"}}>
                                <TextMessage>Hello {name}</TextMessage>
                            </div>
                        </DivMessageSections>
                        <DivChatControls>
                            <Textarea placeholder="Remember, be nice!"/>
                            <Button>Send</Button>
                        </DivChatControls>
                </DivChatArea>
            </Section>
        ) : (
           /*<Container>
               <Card>
                    <Text><span style={{ color: "#1b5ff9"}}>New user?</span> Please sign up.
                        <Link to="/signup">
                            <Button>Sign up</Button>
                        </Link>
                    </Text>

                    <Text>
                        <span style={{ color: "#1b5ff9" }}>Already a user?</span> Please sign in.
                        <Link to="/signin">
                            <Button>Sign in</Button>
                        </Link>
                    </Text>
                </Card>
           </Container>*/
           <Redirect to="/signin"/>
        )}
    </Layout>
    )

 }

export default Home