import { Button } from '@my-project/ui-library';

function App() {
  return (
    <div>
      <h1>Public Website</h1>
      <Button onClick={() => alert('Button clicked!')}>
        Shared Button
      </Button>
    </div>
  )
}

export default App
