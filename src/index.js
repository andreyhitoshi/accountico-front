import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'

import Segundo from './components/basicos/Primeiro'

const tag = <strong>Olá React!</strong>

ReactDom.render(
    <div>
       <Primeiro>Ola</Primeiro>
    </div>,
    document.getElementById('root')
)