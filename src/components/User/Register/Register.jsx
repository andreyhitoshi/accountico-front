import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logoImage from "../../images/accounticoLogo.jpg"
import './Register.css'

const PagesRegister = () => {
  const handleSubmit = values => {
    axios.post('http://localhost:8080/v1/api/user', values)
         .then(resp => {
           const { data } = resp
             if (data) {}
    })
  }

  return (
    <div className='register-container'>
        <div className="content">
            <section>
                <a href="/">
                    <img src={logoImage} alt="Accountico"/>
                </a>

                <h1>Cadastro</h1>
                <p>Entre na plataforme e tenha uma melhor gestão financeira!</p>

                <Link className='back-link' to='/login'>
                    <FiArrowLeft size={16} color='#6376BD'/>
                    Voltar para o login
                </Link>
            </section>

            <form action={handleSubmit}>
              <input
                placeholder='Nome'
              />
              <input
                placeholder='Sobrenome'
              />
              <input
                type='email'
                placeholder='E-mail'
              />
              <input
                placeholder='Senha'
              />
            </form>
        </div>
    </div>
  )
}
export default PagesRegister;
