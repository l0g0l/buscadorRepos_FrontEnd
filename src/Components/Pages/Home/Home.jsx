import React, { useState } from 'react';
import NavMenu from '../../Layout/Header/NavMenu';
import Form from '../../_All/Form/Form';

import './home.scss';

const Home = () => {
  // creo el state aquí, que es el padre de NavMenu y de Form y paso a esos componentes props con toda la info

  const [repos, setRepos] = useState([]);
  const [find, setFind] = useState(true);
 

  return (
    // con este ternario lo que hago es que solo renderice el navMenu cuando se haya hecho la búsqueda y encuentre un repo. Si existe repo, renderiza navMenu, sino null
    // A navMenu le paso props con [0] le indoco que doy por hecho que va a haber un repo y por tanto le indico que del primero que salga, la propiedad owner al completo
    // a form le paso por props solo un estado, que luego el utilizará para almacenar los datos del axios
    <main className="container-form" role="main">
      <div className="formhome">
        {(repos[0]) ? <NavMenu ownerinfo={repos[0].owner} /> : null}
        <Form repos={repos} setrepos={setRepos} find={find} setfind={setFind}/>
      </div>
      <div>
        {find ? null: <h3>Usuario no encontrado, inténtelo de nuevo</h3>}
      </div>
    </main> 
  )
}

export default Home
