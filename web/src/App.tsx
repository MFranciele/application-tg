import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { TableUsers } from './components/table/table';

function App() {

  return (
    <>
      <div>
        <Header/>
        <main>
          <TableUsers/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
