import { Button } from '@my-project/ui-library';

function App() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <Button onClick={() => alert('Admin button clicked!')}>
        Shared Button
      </Button>
    </div>
  )
}

export default App
