import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {IonButton} from '@ionic/react';
import { ArmaData } from '../api/getData';
import { getPost } from '../utils/getPost';
import { useState } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [armas, setArmas] = useState<ArmaData[]>([]);

  const Consultar = async () => {
    const data = await getPost();
    setArmas(Array.isArray(data) ? data : []);
  }

  return (
  <IonPage>
  <IonHeader>
    <IonToolbar className='toolbar'>
      <IonTitle className='header'>Minecraft</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent fullscreen>

    <div className='container'>
      <IonHeader id="Title">MODS DE ARMAS REGISTRADAS</IonHeader>

      {
        armas.map((arma) => (
          <div className="post-info" key={arma.nombre}>
            <div className='post-title'>
              <img src="../../Img/mc.png"className='icon'/>
              <h2>{arma.nombre}</h2>
            </div>

            <p> <strong>Tipo:</strong> {arma.tipo}</p>
            <p> <strong>Daño:</strong> {arma.danio}</p>
            <p> <strong>Especial:</strong> {arma.especial} </p>
            <p> <strong>Encantamiento:</strong> {arma.encantamiento} </p>
            <p> <strong>Durabilidad:</strong> {arma.durabilidad} </p>
            <p> <strong>Descripción:</strong> {arma.descripcion} </p>
          </div>
        )) 
      }

      <IonButton 
        className='IonButton'
        onClick={() => Consultar()}>
        Consultar
      </IonButton>
    </div>
  </IonContent>
  </IonPage>
  )
};

export default Tab2;
