import React from 'react';
import Header from './Header';
import Head from 'next/head';
import {Container} from 'semantic-ui-react'
export default props=>{
  return(
    <Container>
    <Head>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    </Head>
  <Header />
      {props.children}
      <h1>I am a footer</h1>
    </Container>
  )
};
