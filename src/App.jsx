

import TituloPrincipal from "./componets/TituloPrincipal/TituloPrincipal"
import ItemCount from "./componets/ItemCount/ItemCount"
import NavBar from "./componets/NavBar/NavBar"
import ItemListContainer from "./componets/ItemListContainer/ItemListContainer"

const App =() => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greting ={"Bienvenidos a GEEK N RESIN"}/>
    <TituloPrincipal titulo ={"La combinacion entre artesania y nerdo"} frase = {"GEEK FTW"} />
    <ItemCount/>
    </>
  )
}

export default App
