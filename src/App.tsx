import { useState } from 'react';
import './App.css';
import { AnotherInput } from './components/AnotherInput';
import { AnotherPerson } from './components/AnotherPerson';
import { AnotherPersonList } from './components/AnotherPersonList';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Counter } from './components/state/Counter';
import { CounterStrict } from './components/state/CounterStrict';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Userr } from './components/context/Userr';
import { UserAssersion } from './components/state/UserAssersion';
import { DemoRef } from './components/ref/DemoRef';
import { MutableRef } from './components/ref/MutableRef';
import CounterClass from './components/class/CounterClass';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { ListGenerics } from './components/generics/ListGenerics';
import { RandomNumber } from './components/restrictions/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/CustomButton';
import { AnotherCustomButton } from './components/html/AnotherCustomButton';
import { CustomInput } from './components/html/CustomInput';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';
import { CounterHoc } from './components/hoc/CounterHoc';
import { HocSample } from './components/hoc/HocSample';

function App() {
  const personName = {
    first: "Pankaj",
    last: "Gadhiya"
  }

  const nameList = [
    {
      first: "Pink",
      last: "Gadhiya"
    },
    {
      first: "Yellow",
      last: "Gadhiya"
    },
    {
      first: "Orange",
      last: "Gadhiya"
    },
    {
      first: "Cyan",
      last: "Gadhiya"
    }
  ]
  return (
    <div className="App">
      <Greet
        name="Pankajkumar N Gadhiya"
        messagecount={10}
        isLoggedIn={false} />
      <br />
      <br />
      <br />
      <hr />

      {/* Contains Object PROPS */}
      <Person name={personName} />
      <br />
      <br />
      <br />
      <hr />

      {/* Contain Array PROPS */}
      <PersonList names={nameList} />
      <br />
      <br />
      <br />
      <hr />

      {/* Contains advaced PROPS */}
      <Status status={'loading'} />
      <br />
      <br />
      <br />
      <hr />

      {/* Children PROPS */}
      <Heading>Placeholder text</Heading>
      <br />
      <br />
      <br />
      <hr />

      {/* Another childeren PROPS */}
      <Oscar>
        <Heading>Oscar goes to Pankaj N Gadhiya</Heading>
      </Oscar>
      <br />
      <br />
      <br />
      <hr />

      {/* Conditional props if props dont have value */}
      <Greet
        name="Pankajkumar"
        isLoggedIn={true} />
      <br />
      <br />
      <br />
      <hr />

      {/* Event props */}
      <Button
        handleClick={() => { console.log('Click handele') }}
        handleWithEventClick={(event) => { console.log('Click handele', event) }}
        handleWithParamClick={(event, id) => { console.log('Click handele', event, id) }} />
      <br />
      <br />
      <br />
      <hr />

      {/* Input  */}
      <Input value={''} handleChange={event => console.log(event)} />
      <br />
      <br />
      <br />
      <hr />

      {/* Props Destructure  */}
      <AnotherInput value={''} handleChange={event => console.log(event)} />
      <br />
      <br />
      <br />
      <hr />

      {/* Style implementation  */}
      <Container styles={{ border: '1px solid black', padding: '1rem', backgroundColor: "yellow" }} />
      <br />
      <br />
      <br />
      <hr />

      {/* Props Types Sepratation */}
      <AnotherPerson name={personName} />
      <br />
      <br />
      <br />
      <hr />

      {/* Global propstype handling  */}
      {/* Contain Array PROPS */}
      <AnotherPersonList names={nameList} />
      <br />
      <br />
      <br />
      <hr />

      {/* use state management */}
      <LoggedIn />
      <br />
      <br />
      <br />
      <hr />

      {/* diffrent way state management  */}
      <User />
      <br />
      <br />
      <br />
      <hr />

      {/* Use state using Assersation */}
      <UserAssersion />
      <br />
      <br />
      <br />
      <hr />

      {/* usereducer */}
      <Counter />
      <br />
      <br />
      <br />
      <hr />

      {/* usereducer Strict mode */}
      <CounterStrict />
      <br />
      <br />
      <br />
      <hr />

      {/* useContext  */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <br />
      <br />
      <br />
      <hr />

      {/* Usercontext provider concept  */}
      <UserContextProvider>
        <Userr />
      </UserContextProvider>
      <br />
      <br />
      <br />
      <hr />

      {/* Input useRef */}
      <DemoRef />
      <br />
      <br />
      <br />
      <hr />

      {/* Mutable Refs */}
      <MutableRef />
      <br />
      <br />
      <br />
      <hr />

      {/* Class component learning */}
      {/* <CounterClass/> */}
      <br />
      <br />
      <br />
      <hr />

      {/* Props passing with diffrent way */}
      <Private isLoggedIn={true} component={Profile} />
      <br />
      <br />
      <br />
      <hr />

      {/* Generics Props  */}
      <ListGenerics
        items={['Batman', 'Superman', 'Wonder', 'Women']}
        onClick={(item) => console.log(item)} />
      <br />
      <br />
      <br />
      <hr />
      <ListGenerics
        items={[1, 2, 3, 4, 5, 6]}
        onClick={(item) => console.log(item)} />
      <br />
      <br />
      <br />
      <hr />
      <ListGenerics
        items={[
          {
            first: "Pink",
            last: "Gadhiya"
          },
          {
            first: "Yellow",
            last: "Gadhiya"
          },
          {
            first: "Orange",
            last: "Gadhiya"
          },
          {
            first: "Cyan",
            last: "Gadhiya"
          }
        ]}
        onClick={(item) => console.log(item)} />
      <br />
      <br />
      <br />
      <hr />

      {/* Restricted Props  */}
      <RandomNumber value={10} isNegetive />
      <br />
      <br />
      <br />
      <hr />

      {/* Template literals  */}
      <Toast position='center' />
      <br />
      <br />
      <br />
      <hr />

      {/* Wrapping HTML Elements  */}
      <CustomButton variant='primary' onClick={() => console.log('clicked')}>
        Primary Button
      </CustomButton>
      <br />
      <br />
      <br />
      <hr />
      <AnotherCustomButton variant='primary' onClick={() => console.log('clicked')}>
        Primary Button
      </AnotherCustomButton>
      <br />
      <br />
      <br />
      <hr />
      <CustomInput placeholder='test'
        type='tel' ></CustomInput>
      <br />
      <br />
      <br />
      <hr />

      {/*  Extracting Component PROPS  */}
      <CustomComponent isLoggedIn name='pankaj' />
      <br />
      <br />
      <br />
      <hr />

      {/* Polymorphic Component */}
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
      <br />
      <br />
      <br />
      <hr />

      {/* HOC Components */}
      {/* <HocSample >
        
        </HocSample> */}
        <br />
        <br />
        <br />
        <hr />

    </div>
  );
}

export default App;
