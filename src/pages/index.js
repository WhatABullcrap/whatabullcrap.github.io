import * as React from "react"
import Layout from "../components/layout"
import HeroSection from '../components/herosection'
import styled from "styled-components"
import Helm from "../components/helm"
import Recent from "../components/recentEpisodes"
import colors from '../data/colors'


const flexCenter = `display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

const Main = styled.main`
  width: 100%;
  height: fit-content;
  ${flexCenter}
  background: linear-gradient(180deg, ${colors.orange}, ${colors.red});
`

const IndexPage = () => {
  return (
    <Layout>
      <Helm title="HomePage"/>
      <HeroSection />
      <Main>
        <Recent />
      </Main>
    </Layout>
  )
}

export default IndexPage
