import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import poop from '../images/svg/poo-solid.svg'

// styles
const Poop = ({size, color}) => {
  return(
  <svg width={`${size}`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="poo" class="svg-inline--fa fa-poo fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={`${color}`} d="M451.4 369.1C468.7 356 480 335.4 480 312c0-39.8-32.2-72-72-72h-14.1c13.4-11.7 22.1-28.8 22.1-48 0-35.3-28.7-64-64-64h-5.9c3.6-10.1 5.9-20.7 5.9-32 0-53-43-96-96-96-5.2 0-10.2.7-15.1 1.5C250.3 14.6 256 30.6 256 48c0 44.2-35.8 80-80 80h-16c-35.3 0-64 28.7-64 64 0 19.2 8.7 36.3 22.1 48H104c-39.8 0-72 32.2-72 72 0 23.4 11.3 44 28.6 57.1C26.3 374.6 0 404.1 0 440c0 39.8 32.2 72 72 72h368c39.8 0 72-32.2 72-72 0-35.9-26.3-65.4-60.6-70.9zM192 256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm159.5 139C341 422.9 293 448 256 448s-85-25.1-95.5-53c-2-5.3 2-11 7.8-11h175.4c5.8 0 9.8 5.7 7.8 11zM320 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>
  )
}

const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #dddddd;
  padding: 10vw;
  &:after{
    content: '404';
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 30vw;
    opacity: .2;
    color: purple;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
`
const Card = styled.section`
  width: 60%;
  min-height: 30vw;
  height: fit-content;
  padding: 4rem;
  background: #000ff;
  color: purple;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`
const CardTitle = styled.h1`
  font-size: 8rem;
  color: currentColor;
  text-decoration: uppercase;
`
const CardContent = styled.section`
  text-align: center;
`
const CardText = styled.p`
  color: currentColor;
  font-size: 3rem`



// markup
const NotFoundPage = () => {
  return (
    <Container>
      <div style={{width: '50%', zIndex: '10'}}>
        <p style={{fontSize: '12rem', fontWeight: 'bold'}}>
          4<Poop size="9rem" color='purple' />4
        </p>
      </div>
      <Card>
        <CardTitle>
          Error 4<Poop size="6rem"/>4
        </CardTitle>
        <CardContent>
          <CardText> Website Missing </CardText>
          <br />
          <Link  style={{
            fontSize: '2rem'
          }} to='/'>Return to home page</Link>
        </CardContent>
      </Card>
    </Container>
  )
}

export default NotFoundPage
