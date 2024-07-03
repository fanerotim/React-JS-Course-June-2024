import './App.css'
import Header from './components/header/Header'
import Button from './components/button/Button'
import Heading from './components/heading/Heading'
import PropsBtn from './components/propsBtn/propsBtn'

const sport = {
  type: 'running',
  event: '5000m',
  location: 'veliko turnovo'
}

function App() {
  return (
    <>
      <Header/>
      <Heading heading={'My first React Playground'}/>
      <Button/>
      <h2 style={{color: 'red', textAlign: 'center'}}>--- This is a separator between sections ---</h2>
      {/* This PropsBtn was created just to further test props and how they work */}
      <PropsBtn fn={() => alert('I was clicked')}>
        Button that tests props
      </PropsBtn>
    </>
  )
}

export default App
