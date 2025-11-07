import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ArmaData } from '../api/consulta';
import { getPost } from '../utils/getPost';
import { useState, useEffect } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [armas, setArmas] = useState<ArmaData[]>([]);

  useEffect(() => {
    getPost().then(data => setArmas(Array.isArray(data) ? data: []));
  }, []);


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

          {armas.map((arma, index) => (
            <div className="post-info" key={arma._id || index}>
              <h2>{arma.nombre}</h2>
              <p><strong>Tipo:</strong> {arma.tipo}</p>
              <p><strong>Daño:</strong> {arma.danio}</p>
              <p><strong>Especial:</strong> {arma.especial} </p>
              <p><strong>Encantamiento:</strong> {arma.encantamiento} </p>
              <p><strong>Durabilidad:</strong> {arma.durabilidad} </p>
              <p><strong>Descripción:</strong> {arma.descripcion} </p>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
