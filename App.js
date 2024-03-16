import React, {useState} from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.min.css'
import Header from './Composants/Header/Header';
import Card from './Composants/Card/card'

function App() {

  const [monState, setMonState] = useState([
    {tache: 'Promener Zazu', txt:'Une fois à 7h30, une fois à Midi et une fois à 17h'},
    {tache: 'Cours Code', txt:'Cours sur Udemy'},
    {tache: 'Créer une app web', txt:'Apprendre React'},
    {tache: 'Préparer le repas de midi', txt:'Pate Bolognaise'},
    {tache: 'Terminer le livre "Apprendre à Coder"', txt:'1h de lecture'},
    {tache: 'Faire le ménage', txt:'Nettoyer cuisine, chambre et salon'}
  ])

  const [tache, setTache] = useState();
  const [txt, setTxt] = useState();

  function creationCarte(e){
    e.preventDefault();
    const nvTab = [...monState, {tache: tache, txt: txt}]
    setMonState(nvTab);
    setTache('');
    setTxt('');
  }

  function supprCarte(index){
    const tabNettoyage = [...monState];

    setMonState(tabNettoyage.filter(item => tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index])))
  }

  return(
    <div>

      <Header />

      <div className="container px-3">

        <h2 className="title mt-5">
          Rentrez vos tâches à faire
        </h2>

        <form onSubmit={creationCarte}>

          <div className="field">
            <div className="control">
              <label htmlFor="tache" className='label'>Tâches</label>
              <input
              value={tache}
              className='input'
              type="text" 
              id='tache' 
              placeholder='Une tâche à faire'
              onChange={e => setTache(e.target.value)} />
            </div>
          </div>
          
          <div className="field">
            <div className="control">
              <label htmlFor="txt" className='label'>Contenu de la tâche</label>
              <textarea
              value={txt}
              className='textarea'
              type="text" 
              id='txt' 
              placeholder='Une tâche à faire'
              onChange={e => setTxt(e.target.value)}
              >
              </textarea>
            </div>
          </div>

          <div className="control">
            <button type="submit" className="button is-link">Créer un tâche</button>
          </div> 

        </form>
        
        {
          monState.map((todo, index) => (
            <Card
            key={index}
            index={index}
            tache={todo.tache}
            txt={todo.txt}
            supprFunc={supprCarte}
             />
          ))
        }


      </div>


    </div>
  );
}

export default App;
