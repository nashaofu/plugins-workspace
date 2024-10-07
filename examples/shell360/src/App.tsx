import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { invoke } from '@tauri-apps/api/core'
import './App.css'
import { open, save } from '@tauri-apps/plugin-dialog'
import { readTextFile, writeTextFile } from '@tauri-apps/plugin-fs'

function App() {
  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <button
        onClick={async () => {
          const path = await save({
            defaultPath: 'shell360.json5'
          })

          if (!path) {
            return false
          }

          console.log('write path', path)

          await writeTextFile(
            path,
            `import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { invoke } from '@tauri-apps/api/core'
import './App.css'
import { open, save } from '@tauri-apps/plugin-dialog'
import { readTextFile, writeTextFile } from '@tauri-apps/plugin-fs'

function App() {
  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <button
        onClick={async () => {
          const path = await save({
            defaultPath: 'shell360.txt'
          })

          if (!path) {
            return false
          }

          console.log('write path', path)

          await writeTextFile(path, 'asdasdas', {
            create: true
            // createNew: true
          })

          let data = await readTextFile(path)
          console.log("write data", data)
        }}
      >
        write
      </button>
      <button
        onClick={async () => {
          const path = await open({
            defaultPath: 'shell360.txt'
          })

          if (!path) {
            return false
          }

          console.log('read path', path)

          let data = await readTextFile(path)
          console.log("read data", data)
        }}
      >
        read
      </button>
    </div>
  )
}

export default App
`,
            {
              create: true
              // createNew: true
            }
          )

          let data = await readTextFile(path)
          console.log('write data', data)
        }}
      >
        write
      </button>
      <button
        onClick={async () => {
          const path = await open({
            defaultPath: 'shell360.json5'
          })

          if (!path) {
            return false
          }

          console.log('read path', path)

          let data = await readTextFile(path)
          console.log('read data', data)
        }}
      >
        read
      </button>
    </div>
  )
}

export default App
