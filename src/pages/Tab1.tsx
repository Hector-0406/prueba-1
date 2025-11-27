import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {IonInput, IonButton, IonTextarea} from '@ionic/react';
import { useIonToast } from '@ionic/react';
import { useState } from 'react';
import { createPost } from '../utils/addPost';
import './Tab1.css';

const Tab1: React.FC = () => {
  /* Mensaje de Tostada */
  const [present] = useIonToast();

  const Toast = (message: string) => {
    present({
      message,
      duration: 1500,
      position: 'bottom'
    });
  };

  /* Variables  */
  const [nombre, setNombre] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [danio, setDanio] = useState<string>("");
  const [especial, setEspecial] = useState<string>("");
  const [encanto, setEncanto] = useState<string>("");
  const [durabilidad, setDurabilidad] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");

  /* Evento para el boton de guardar */
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const Guardar = async () => {
      setIsSaving(true);
      try {
          await createPost(
          nombre,
          tipo,
          danio,
          especial,
          encanto,
          durabilidad,
          descripcion
        );
        Toast("✅ Mod Registrado");
      }catch(error){
        console.error('Error guardando arma:', error);
        Toast("⚠️ Error al guardar Mod");
      }finally{
        setIsSaving(false);
      }
  }

  return (
  <IonPage>
    {/* Header */}
    <IonHeader>
      <IonToolbar className='toolbar'>
        <IonTitle className='header'>Minecraft</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    <IonContent fullscreen>
      <IonHeader id="Titulo">CREAR ARMA PERSONALIZADA</IonHeader>

      <div className="info-block">
        <h5>¡Bienvenido, Herrero!</h5>
        <p>
          Aquí puedes Crear tus propias Armas (espadas, arcos, hachas) para usarlas en tus Mods o Addons de Minecraft. 
          <br />
          <br />
          Define cada atributo y ¡prepárate para la batalla!
        </p>
      </div>

      <div className="form-container">
        <IonInput 
          className='IonInput'
          id="nombre_arma" 
          type="text"  
          label='Nombre de arma'
          placeholder="Nombre"
          labelPlacement='floating'
          fill="outline"
          onIonChange={(e) => setNombre(e.detail.value!)} />

        <IonInput 
          className='IonInput'
          id="tipo_arma" 
          type="text" 
          label='Tipo de arma'
          placeholder="Espada"
          labelPlacement='floating'
          fill="outline"
          onIonChange={(e) => setTipo(e.detail.value!)} />

        <IonInput 
          className='IonInput'
          id="daño_arma" 
          type="text"
          label='Daño'
          placeholder="10"
          labelPlacement='floating'
          fill="outline"
          onIonChange={(e) => setDanio(e.detail.value!)} />

        <IonInput 
          className='IonInput'
          id="especial_arma" 
          type="text" 
          label='Especial'
          placeholder="Fuego"
          labelPlacement='floating'
          fill="outline"
          onIonChange={(e) => setEspecial(e.detail.value!)} />

        <IonInput 
          className='IonInput'
          id="" 
          type="text" 
          label='Encantamiento'
          placeholder="Daño de fuego"
          labelPlacement='floating'
          fill="outline"
          onIonChange={(e) => setEncanto(e.detail.value!)} />

        <IonInput 
          className='IonInput'
          id="duarabildad" 
          type="text" 
          label='Durablidad'
          placeholder="Material"
          labelPlacement='floating'
          fill="outline"
          onIonChange={(e) => setDurabilidad(e.detail.value!)} />

        <IonTextarea
          className='descripcion-multi'
          id="descripcion_arma"
          label='Decripción'
          placeholder="Daño de fuego a los enemigos"
          labelPlacement='floating'
          fill="outline"
          onIonChange={(e) => setDescripcion(e.detail.value!)}
          rows={4}
          autoGrow={true}/>

        <IonButton 
          className='IonButton' 
          onClick={Guardar}
          disabled={isSaving}>
          Guardar
        </IonButton>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
