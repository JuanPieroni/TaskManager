import './App.css'
import { Header } from '../../my-first-app/components/Header'
import { Title } from '../../my-first-app/components/Title'
import { Card } from '../../my-first-app/components/Card'
import { Button } from '../../my-first-app/Button'
 

function App() {
    const style = {
        color: 'red',
        fontSize: 18,
    } 

    const sendMess = ()  => {
        window.alert("Mensaje enviado")
    }

    const add = () => {
        console.log("Add");
    }

    return (
        <>
          {/*   <Header>
                <h1 style={style}>BOCA LA CONCHA DE TU MADRE</h1>
                <div>
                    <button>BOTON PASADO POR CHILDREN</button>
                </div>
            </Header> */}
            {/* <div>
                <h1 style={style}>BOCA LA CONCHA DE TU MADRE</h1>
                <h2 className="h2Style"> QUE OJETE TIENEN</h2>
                <a href="https://www.google.com" target="_blank">
                    LINK A GOOGLE
                </a>
            </div> */}
            <Title classes={'my-title'} />
            <Card   cartHeader={"React Course"} cardText="ESTE CURSO ES UNA VERGA" background='coral'/>
            <Card cartHeader={"Javascript Course"} cardText="ESTE CURSO ES UNA VERGA" background='#333'>
               
          
               <Button classes={"btn-primary"} handleEvent={sendMess}/>
               <Button classes={"btn-primary"} handleEvent={add}/>
            </Card>

        </>
    )
}

export default App
