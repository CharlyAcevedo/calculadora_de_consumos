import Header from "./components/Header"
import MenuContainer from "./components/MenuContainer"
import OrderContainer from "./components/OrderContainer"
import useOrder from "./hooks/useOrder"


function App() {

  const {order, tip, setTip, addItem, removeItems, resetOrder} = useOrder()

  return (
    <>
      <Header />
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <MenuContainer addItem={addItem}/>
        <OrderContainer 
          order={order} 
          removeItems={removeItems}
          tip={tip}
          setTip={setTip}
          resetOrder={resetOrder}
        />
      </main>
    </>
  )
}

export default App
