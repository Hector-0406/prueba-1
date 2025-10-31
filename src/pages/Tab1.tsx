import './Tab1.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonButton, IonImg, IonCheckbox, IonToggle} from '@ionic/react';
import React, { useState } from 'react';

const Tab1: React.FC = () => {
  {/* Inputs */}
  const [nombre, setNombre] = useState<string>('');
  const [semilla, setSemilla] = useState<number>(0);
  {/* Modo de juego */}
  const [survival, setSurvival] = useState<string>('Supervivencia');
  const [creative, setCreative] = useState<string>('Creativo');
  {/* Dificultad */}
  const [pacific, setPacific] = useState<string>('Pacifico');
  const [easy, setEasy] = useState<string>('Fácil');
  const [normal, setNormal] = useState<string>('Normal');
  const [hard, setHard] = useState<string>('Difícil');
  {/* Tipo de mundo */}
  const [defaultWorld, setDefaultWorld] = useState<string>('Default');
  const [flatWorld, setFlatWorld] = useState<string>('Plano');
  {/* Permitir trampas */}
  const [permitirTrampas, setPermitirTrampas] = useState<boolean>(false);
  
  return (
  <IonPage>
    {/* Titulo del Encabezado */}
    <IonHeader>
      <IonToolbar>
        <IonTitle>Minecraft</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen class="Content">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle  size="large">Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Contenedor de los componentes */}
      <div className="PanelTitulo">
        <IonHeader id="Titulo">CREAR UN MUNDO NUEVO</IonHeader>
      </div>

      <div className="Contenedor">
        <div className="PanelIzquierdo">
          <IonImg src="Img\minecraft.webp" id="Mundo"></IonImg>
          <IonButton className='ButtonsIzq'>Crear</IonButton>
          <IonButton className='ButtonsIzq' >Crear en Realms</IonButton>
          <IonButton className='ButtonsIzq' id="general">General</IonButton>
          <IonButton className='ButtonsIzq'>Avanzado</IonButton>
          <IonButton className='ButtonsIzq'>Multijugador</IonButton>
          <IonButton className='ButtonsIzq'>Trucos</IonButton>
        </div>

        <div className="PanelDerecho">
          <p>Nombre del mundo</p>
          <IonInput
          id="Nombre_Mundo"
          placeholder='Mi mundo'/> 
          <p>Semilla de Mundo</p>
          <IonInput
          id="semilla"
          type="number"
          placeholder='32578403'/>
          <p>Modo de Juego</p>
          <IonButton className="Modo">Supervivencia</IonButton>
          <IonButton className="Modo">Creativo</IonButton> <br/>

          <p>Dificultad</p>
          <IonButton className="Difficult">Pacifico</IonButton>
          <IonButton className="Difficult">Fácil</IonButton>
          <IonButton className="Difficult">Normal</IonButton>
          <IonButton className="Difficult">Difícil</IonButton>
          <p >Tipo de Mundo</p>
          <IonCheckbox >Default</IonCheckbox>
          <IonCheckbox >Plano</IonCheckbox>
          <p>Permitir Trampas</p>
          <IonToggle checked={false}></IonToggle>
        </div>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
