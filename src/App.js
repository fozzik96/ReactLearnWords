import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import Paragraph from './components/Paragraph';
import Header from './components/Header';
import Card from './components/Card';
import LastBlock from './components/LastBlock';
import BeginBlock from './components/BeginBlock';

const wordsList = [
  {
    eng: 'between',
    rus: 'между'
  },
  {
    eng:'high',
    rus:'высокий'
  },
  {
    eng:'really',
    rus:'действительно'
  },
  {
    eng:'down',
    rus:'вниз'
  },
  {
    eng:'most',
    rus:'большинство'
  },
];


const App = () => { 
  return ( 
    <>
      <HeaderBlock >
         <Header>
           It's time to learn the new words
         </Header>
         <Paragraph>
           Use the cards for memorising the new words
         </Paragraph>
      </HeaderBlock>
      <div>
    {
      wordsList.map(({eng,rus}, index) => <Card key={index} eng={eng} rus={rus}/>)
    }

      </div>
      <HeaderBlock hideBackground >
      <Header>
           Another line
         </Header>
         <Paragraph>
           Great again
         </Paragraph>
         </HeaderBlock>
         <LastBlock>
          <Paragraph>

         </Paragraph>
         </LastBlock>
    </>
    );
}

export default App;
