import { Provider } from 'react-redux'
import Form from './components/Form'
import Header from './components/Header'
import TaskList from './components/TaskList'
import { store } from './redux/store'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <Provider store={store}>
      <Toaster/>
      <div className='h-screen w-screen flex flex-col gap-10'>
          <Header />
          <Form/>
          <TaskList/>
      </div>
    </Provider>

  )
}

export default App
