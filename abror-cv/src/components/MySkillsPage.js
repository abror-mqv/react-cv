import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
@media screen and (max-width: 720px){
    width: 70%;

}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const Boxes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 10%;
    @media screen and (max-width: 720px){   
        display: flex;
        z-index: 99999;
        gap: 30px;
        height: -webkit-fill-available;
        flex-wrap: wrap;
        margin-top: 120px;
        justify-content: center;
    }
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Boxes>
                    <Main>
                        <Title>
                            <Design width={40} height={40} /> Астронавт
                        </Title>
                        <Description>
                            Не зная карате <br /> не станешь мастером кунг-фу
                        </Description>
                        <Description>
                            <strong>Умею в:</strong>
                            <ul>
                                <li>
                                    Ui/Ux - Figma; Strapi, linux, python; django: templates, drf; bs4; reportlab; sqlite3,
                                </li>
                                <br />
                                <li>
                                    Алгоритмы, БД (SQL, Mongo), ООП
                                </li>
                            </ul>
                        </Description>
                        <Description>
                            <strong>Игрался с:</strong>
                            <ul>
                                <li>
                                    Flutter, Java Core, C++, Олимпиадными задачками
                                </li>
                            </ul>
                        </Description>

                    </Main>
                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> Frontend Разработчик
                        </Title>
                        <Description>
                            По техническому стеку:
                        </Description>
                        <Description>
                            <strong>База:</strong>
                            <p>
                                Html, sass/scss, Js, React, Next.Js, Redux, Redux toolkit, Styled-Components, Node.js, npm, Git,
                            </p>
                        </Description>
                        <Description>
                            <strong>Работал с:</strong>
                            <p>
                                MUi, Framer-motion, vite, i18next, swiper.js, formik, ts-particles, TailWindCss, yarn, module-css
                            </p>
                        </Description>

                    </Main>
                </Boxes>


                <BigTitle text="SKILLS" top="80%" right="30%" />

            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
