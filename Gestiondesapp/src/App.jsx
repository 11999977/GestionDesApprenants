 import { Fragment, useState } from 'react'
//  import reactLogo from './assets/react.svg'
//  import viteLogo from '/vite.svg'
 import IMG from '../public/Images/309605840_434183978815243_3101332804792749556_n.jpg'
 import './App.css'

function App() {
  return  <>
      <form className='container'>
        <div id='navbar'>
            <h1 className="logo">Gest_APP</h1>
            <input type="search" placeholder="Tapez votre recherche" className= "searchbar"></input>
        </div>
        <div className='sidebar'>
          <div className='fisrt-component'>
            <div className='fi-1'><span id='icone-2'><img src="IMG" alt="" /></span>
                <p>Profile</p>
            </div>
          </div>
          <div className='second-component'>
            <div className='fi-2'><span id='icone-1'></span>
                <div className= "profile"></div>
                <p>Admistrateur</p>
            </div>
          </div>
          <div className='third-component'>
            <div className='fi-2'><span id='icone-1'></span>
                <p>Invitation</p>
            </div>
          </div>
        </div>
        <div className='student'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student1'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student2'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student3'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student4'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student5'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student6'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student7'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student8'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student9'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student10'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student11'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student12'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student13'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student14'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student15'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student16'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student17'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student18'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student19'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student20'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
        <div className='student21'>
          <div className='prof1'>A</div>
          <p>MANGUIMISSOU BOUKOUSSOU Aron Dahel</p>
          <div>boukoussoudahel@gmail.com </div>
          <p>066.82.61.66</p>
          <div className='par-btn'>
            <button className='btn-crud'>Modifier</button>
            <button className='btn-crud'>Supprimer</button>
          </div>
        </div>
      </form>
        
  </>
}



export default App
