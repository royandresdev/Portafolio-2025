import { MyRouterProvider } from "./router/router"
import ApplicationProvider from "./state/Application/ApplicationProvider"

function App() {
  return (
    <ApplicationProvider>
      <MyRouterProvider />
    </ApplicationProvider>
  )
}

export default App
