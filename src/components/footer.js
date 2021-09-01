import * as React from "react"
import styled from 'styled-components'
import colors from '../data/colors'
import Links from '../data/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'



const formValues = `
	color: ${colors.white};
	font-family: Rubik;
	background-color: ${colors.black};
	width: 100%;
	border: none;
	padding: .8rem;
	border-radius: .4rem;
`

const Foot = styled.footer`
	position: static;
	padding: 2rem;
	background: linear-gradient(0deg, ${colors.darkOrange}, ${colors.red});
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	max-width: 1024px;
	#subm{
		width: 30%;
		margin: .4rem auto;
		margin-bottom: 3rem;
		color: ${colors.black};
		background-color: ${colors.yellow};
		font-weight: bold;
		font-size: 1rem;
		padding: .7rem;
	}
`
const FormTitle = styled.h4`
	color: ${colors.yellow};
	font-size: 1.5rem; 
	font-weight: bold;
	margin: 0 auto;
`

const Label = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	margin: .5rem;
`
const LabelText = styled.span`
	color: ${colors.white};
	font-weight: bold;
	font-size: 1.5rem;
`

const Input = styled.input`
	${formValues}
`

const Textarea = styled.textarea`
	${formValues}
	resize: none;
`

const Content = styled.div`
	font-size: 20px;
	color: ${colors.yellow};
	text-align: center;
	font-weight: bold;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const LinkList = styled.ul`
	list-style: none;
`
const LinkListElement = styled.li`
	margin: .7rem 0;
`
const EnoddSection = styled.section`
	width: fit-content;
`
const DarrenerSection = styled.section`
	width: fit-content;
`
const AuthorsSocialsWrapper = styled.div`
	margin-top: 2rem;
	display: flex;
	gap: 4rem;
	width: fit-content;
	*{
		.image{
			width: 15rem;
			border-radius: 10rem;
		}
	}
	@media(max-width: 600px){
		gap: 2rem;
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
	}
	`
const SectionTitle = styled.h3`
	font-size: 1.5rem;
	font-weight: bold;
	margin: .6em 0;
`
const HyperLink = styled.a`
	text-decoration: none;
	display: flex; 
	align-items: center;
	font-size: 1.2rem;
	.icon {
		font-size: 1.6rem;
		margin-right: 1rem;
	}
`

const Footer = () =>{

	
    return(
      <Foot>
		<ContactForm action="https://formsubmit.co/wabdirectcontact@gmail.com" method="POST">
		<FormTitle>
			Contact Us:
		</FormTitle>
		<Label for="nick">
                <LabelText>Nick</LabelText>
                <Input type="text" name="nick" id="nick"/>
            </Label>
            <Label for="email">
                <LabelText>Email</LabelText>
                <Input type="text" name="email" id="email" />
            </Label>
            <Label for="comment">
                <LabelText>Wiadomość</LabelText>
            <Textarea name="comment" cols="50"></Textarea>
            </Label>
            <Input type='submit' name="subm" id="subm" value="Send"/>
		</ContactForm>
        <Content>
			Follow us on our SocialMedia:
			<AuthorsSocialsWrapper>
					<EnoddSection>
						<SectionTitle>Ennod's socials</SectionTitle>
						<LinkList>
							<LinkListElement>
								<HyperLink href={`${Links.EnoddGram}`}>
									<FontAwesomeIcon icon={faInstagram} className="icon"/>
									Ennod's Instagram
								</HyperLink>
							</LinkListElement>
							<LinkListElement>
								<HyperLink href={`${Links.TwitterEnodd}`}>
									<FontAwesomeIcon icon={faTwitter} className="icon"/>
									Ennod's Twitter
								</HyperLink>
							</LinkListElement>
						</LinkList>
					</EnoddSection>
					<DarrenerSection>
					<SectionTitle>Darrener's socials</SectionTitle>
					<LinkList>
							<LinkListElement>
								<HyperLink href={`${Links.DarrenGram}`}>
									<FontAwesomeIcon icon={faInstagram} className="icon"/>
									Darrener's Instagram
								</HyperLink>
							</LinkListElement>
							<LinkListElement>
								<HyperLink href={`${Links.TwitterDarren}`}>
									<FontAwesomeIcon icon={faTwitter} className="icon"/>
									Darrener's Instagram
								</HyperLink>
							</LinkListElement>
						</LinkList>
					</DarrenerSection>
				</AuthorsSocialsWrapper>
		</Content>
      </Foot>
    )
  }

export default Footer