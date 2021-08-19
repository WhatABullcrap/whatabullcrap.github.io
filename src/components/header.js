import { Link } from "gatsby"
import React, {useEffect} from "react"
import styled from 'styled-components'
import colors from '../data/colors'
import logo from '../images/svg/wabVectorLogoOriginal.svg'


const Head = styled.nav`
    width: 100%;
		background-color: ${colors.red};
    position: fixed;
    top: 0;
		padding: 2rem;
    display: flex;
    justify-content: center;
    z-index: 10;
    transition: top 0.3s;
	`
const HeaderContent = styled.div`
  width: 100%;
  max-width: 1920px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoBox = styled.div`
  position: relative;
  width: 5rem;
`
const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`
const MenuElement = styled.li`
  list-style: none;
  margin-left: 1rem;
  position: relative;
  height: fit-content;
  width: fit-content;
  a{
    text-decoration: none;
    font-family: Rubik, sans-serif;
    font-size: 1.3rem;
  }
  &:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0%;
    height: 3px;
    background-color: ${colors.white};
    transition: 500ms;
  }
  &:hover{
    &:after{
      width: 100%;
    }
  }
`


const Header = () =>{

  let prevScrollpos  = typeof window !== `undefined` ? window.pageYOffset : ''

  function barHide(){
    console.log(prevScrollpos)
    const currentScrollpos = window.pageYOffset
    const nav = document.querySelector('#navbar')
    if(prevScrollpos > currentScrollpos){
      nav.style.top = "0px"
    } else {
      nav.style.top = "-200px"
    }
    console.log(currentScrollpos)
    prevScrollpos = currentScrollpos
  }

  useEffect(()=>{
    window.addEventListener('scroll', barHide)
    return () => window.removeEventListener('scroll', barHide)
  })
    return(
      <Head id="navbar">
        <HeaderContent>
          <LogoBox>
          <h1>
            <img src={logo} alt="Wab Short Logo" width="110%"/>
          </h1>
          </LogoBox>
            <Menu>
              <MenuElement>
                <Link to="/">Home</Link>
              </MenuElement>
              <MenuElement>
                <Link to="/episodes">Episodes</Link>
              </MenuElement>
              <MenuElement>
                <Link to="/about">About</Link>
              </MenuElement>
            </Menu>
        </HeaderContent>
      </Head>
    )
  }

export default Header;