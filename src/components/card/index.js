import React from "react"
import { Container } from "./styles/card"

function Card({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Card