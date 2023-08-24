import { Toaster } from 'react-hot-toast';
import { containerStyle, toastOptions } from './services/toastOptions';

import './App.css';
import Button from './components/Button';

function App() {
  return (
    <>
      <Toaster containerStyle={containerStyle} toastOptions={toastOptions} />

      <div className="card" style={{ marginTop: 100 }}>
        <h1 style={{ marginBottom: 60 }}>Button and color demo</h1>

        <Button>Regular button</Button>
        <Button disabled={true}>Disabled button</Button>
        <Button variant="accented">Accented button</Button>
        <Button variant="transparent">Transparent button</Button>
      </div>
    </>
  );
}

export default App;
