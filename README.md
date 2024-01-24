# modal-wh-jrdnps

The Modal control for [React](https://reactjs.org).

# Installation and usage

The easiest way to use  modal-wh-jrdnps is to install it from npm.

```
npm i modal-wh-jrdnps
```

Then use it in your app:

```js
import React, { useState } from 'react';
import Modal from "modal-wh-jrdnps";
import "modal-wh-jrdnps/style.css";



export default function App() {
  const [openModal, setOpenModal] = useState(false);

  function toggle() {
    setOpenModal((status) => !status);
  }

  return (
    <div className="App">
      <button type="button" onClick={()=>toggle()}></button>
      <Modal isOpen={openModal} toggle={toggle}>
          <div>Your modal body hir</div>
        </Modal>
    </div>
  );
}
```

## Props

| Name                             | Type                 | Default                        | Description                                                                                                                                |
| -------------------------------- | -------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `isOpen`                         | `bool`               | **REQUIRED**                   | Show the modal?                               |
| `toggle`                         | `func`               | **REQUIRED**                   | Used for close modal                          |
| `children`                       | `node`               | **REQUIRED**                   | The modal content                             |
| `styleContainer`                 | `any`                |  `null`                        | Style applied to the modal container          |
| `styleContent`                   | `any`                |  `null`                        | Style applied to the modal content            |
| `renderClose`                    | `node`               |  `null`                        | You can render your own close button          |
| `closeBtnLabel`                  | `string`             |  `close modal`                 | You can provide your own transcription label  |


## Customisation
```css
.jrdnps-modal-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 1;
    padding: 20px;
    box-sizing: border-box;
    background-color: #000;
    background-color: rgba(0,0,0,0.75);
    text-align: center;
}

.jrdnps-modal-container:before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.05em;
}

.jrdnps-modal-content {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 2;
    max-width: 500px;
    box-sizing: border-box;
    width: 90%;
    background: #fff;
    padding: 15px 30px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -o-border-radius: 8px;
    -ms-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: 0 0 10px #000;
    -moz-box-shadow: 0 0 10px #000;
    -o-box-shadow: 0 0 10px #000;
    -ms-box-shadow: 0 0 10px #000;
    box-shadow: 0 0 10px #000;
    text-align: left;
}

.jrdnps-modal-wrapper {
  position: relative;
  width: fit-content;
  height: fit-content;
}

.jrdnps-modal-close-btn {
  position: relative;
  left: 90%;
  top: 10px;
}

.jrdnps-close-btn {
  position: absolute;
  top: -12.5px;
  right: -12.5px;
  display: block;
  width: 30px;
  height: 30px;
  text-indent: -9999px;
  border: none;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA3hJREFUaAXlm8+K00Acx7MiCIJH/yw+gA9g25O49SL4AO3Bp1jw5NvktC+wF88qevK4BU97EmzxUBCEolK/n5gp3W6TTJPfpNPNF37MNsl85/vN/DaTmU6PknC4K+pniqeKJ3k8UnkvDxXJzzy+q/yaxxeVHxW/FNHjgRSeKt4rFoplzaAuHHDBGR2eS9G54reirsmienDCTRt7xwsp+KAoEmt9nLaGitZxrBbPFNaGfPloGw2t4JVamSt8xYW6Dg1oCYo3Yv+rCGViV160oMkcd8SYKnYV1Nb1aEOjCe6L5ZOiLfF120EjWhuBu3YIZt1NQmujnk5F4MgOpURzLfAwOBSTmzp3fpDxuI/pabxpqOoz2r2HLAb0GMbZKlNV5/Hg9XJypguryA7lPF5KMdTZQzHjqxNPhWhzIuAruOl1eNqKEx1tSh5rfbxdw7mOxCq4qS68ZTjKS1YVvilu559vWvFHhh4rZrdyZ69Vmpgdj8fJbDZLJpNJ0uv1cnr/gjrUhQMuI+ANjyuwftQ0bbL6Erp0mM/ny8Fg4M3LtdRxgMtKl3jwmIHVxYXChFy94/Rmpa/pTbNUhstKV+4Rr8lLQ9KlUvJKLyG8yvQ2s9SBy1Jb7jV5a0yapfF6apaZLjLLcWtd4sNrmJUMHyM+1xibTjH82Zh01TNlhsrOhdKTe00uAzZQmN6+KW+sDa/JD2PSVQ873m29yf+1Q9VDzfEYlHi1G5LKBBWZbtEsHbFwb1oYDwr1ZiF/2bnCSg1OBE/pfr9/bWx26UxJL3ONPISOLKUvQza0LZUxSKyjpdTGa/vDEr25rddbMM0Q3O6Lx3rqFvU+x6UrRKQY7tyrZecmD9FODy8uLizTmilwNj0kraNcAJhOp5aGVwsAGD5VmJBrWWbJSgWT9zrzWepQF47RaGSiKfeGx6Szi3gzmX/HHbihwBser4B9UJYpFBNX4R6vTn3VQnez0SymnrHQMsRYGTr1dSk34ljRqS/EMd2pLQ8YBp3a1PLfcqCpo8gtHkZFHKkTX6fs3MY0blKnth66rKCnU0VRGu37ONrQaA4eZDFtWAu2fXj9zjFkxTBOo8F7t926gTp/83Kyzzcy2kZD6xiqxTYnHLRFm3vHiRSwNSjkz3hoIzo8lCKWUlg/YtGs7tObunDAZfpDLbfEI15zsEIY3U/x/gHHc/G1zltnAgAAAABJRU5ErkJggg==);
}

.jrdnps-close-btn:hover {
  cursor: pointer;
}
```
