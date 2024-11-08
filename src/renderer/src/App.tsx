import electronLogo from './assets/electron.svg'

// F12 - open devtool

function App(): JSX.Element {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-black">
        <img alt="logo" className="logo" src={electronLogo} />
        <div className="creator">
          <p>Powered by electron-vite</p>
        </div>
      </div>
    </>
  )
}

export default App
