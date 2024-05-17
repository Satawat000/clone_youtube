import Nav from "../component/Nav"
import Sidebar from "../component/Sidebar"
import Content from "../component/Content"
function Mainlayout() {
  return (
    <section id="main-layout">
       <Nav></Nav>
       <Sidebar></Sidebar>
       <Content></Content>
    </section>
  )
}

export default Mainlayout