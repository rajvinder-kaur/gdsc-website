import React from 'react'
import styled from 'styled-components'

function AboutContent() {
  return (
    <Container >
     <Logo className='row col-lg box' >
       
     </Logo>
     <Content>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquam? Dignissimos ex at sequi a iusto obcaecati molestiae tempore, repellat doloremque sint ut delectus excepturi tempora quisquam fuga eum officia commodi architecto? Error laudantium eligendi accusamus officia, harum voluptas officiis a in, unde eveniet provident porro repellendus pariatur eos quasi adipisci corporis, dolor asperiores? Ea facilis deleniti maxime libero voluptate odit voluptatem aliquid sint harum perferendis dignissimos doloremque, numquam officia officiis blanditiis doloribus? Est dignissimos, velit incidunt cum doloremque accusantium ea fugiat illo odio unde magni soluta inventore. Praesentium cumque facere cupiditate alias unde voluptate error, expedita illo minus suscipit rerum distinctio ea odit quisquam hic laborum officia dolores voluptates reiciendis! Dolores, soluta recusandae sequi, sint odio rem, delectus deleniti dignissimos iure similique voluptate at provident fuga corporis eos! Provident nesciunt quae corporis minus rerum itaque voluptates illum ad assumenda ullam! Aut quisquam magni asperiores repudiandae accusamus quos quaerat hic rerum! Sint provident alias accusamus aspernatur ratione dicta laboriosam corporis sit quas consequuntur nihil similique non, id consequatur, porro totam minima. Expedita maxime enim laudantium nulla quam obcaecati ad eveniet magni dicta, aut aliquam saepe fuga minus sunt inventore harum qui vitae error pariatur quisquam veritatis tenetur! Voluptatum, fugit aliquam.
    </p>
     </Content>
    </Container>
  )
}

export default AboutContent
const Container = styled.div`
  width : 100%;
  color:white;
  display:flex;
  flex-direction:row;
  height:100vh;
  @media(max-width: 1024px){
      flex-direction:column;
  }
`
const Logo = styled.div`
  background: linear-gradient(red,pink);
  height:100%;
  width:100%;
`
const Content = styled.div`
Color:white;
text-align:center;
width:50%;
display:flex;
justify-content:center;
align-items:center;
background-color:black;
padding-right:auto;
p{
  margin:3%;
  line-height:2rem;
  font-size:1.4rem;
}
@media(max-width: 1024px){
  width:100%;
  height:200vh;
}

`