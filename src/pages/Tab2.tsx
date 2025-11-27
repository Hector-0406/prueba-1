import { IonContent, IonModal, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {IonInput, IonTextarea} from '@ionic/react';
import {IonButton} from '@ionic/react';
import { ArmaData } from '../api/getData';
import { getPost } from '../utils/getPost';
import { delPost } from '../utils/delPost';
import { updPost } from '../utils/updPost';
import { useState, useRef } from 'react';
import { useIonToast, useIonAlert } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [armas, setArmas] = useState<ArmaData[]>([]);
  const [detalles, setDetalles] = useState<Partial<ArmaData>>({});
  const modal = useRef<HTMLIonModalElement>(null);
  const [present] = useIonToast();
  const [ionAlert] = useIonAlert();

  const Toast = (message:string) => {
    present({
      message,
      duration: 1500,
      position: 'bottom'
    });
  }

  //Consultar Armas
  const Consultar = async () => {
    const data = await getPost();
    setArmas(Array.isArray(data) ? data : []);
  }
  
  //Eliminar Arma
  const Eliminar = async (_id: string) => {
    ionAlert({
      header:"Esta seguro de elimnar el MOD?",
      message:"No podras deshacer esta accion.",
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
          cssClass: 'cancel-button',
          handler: () => {
            Toast("🚫 Eliminación Cancelada");
          } 
        },
        {
          text: 'OK', 
          handler: async () => {
            try {
              await delPost(_id); 
              await Consultar(); 
              Toast("✅ Mod Eliminado"); 
            } catch (error) {
              Toast("⚠️ Error al eliminar el arma.");
            }
          },
        },
      ],
    });
  }

  //Actualizar Arma
  const Actualizar = async () =>{
    if (!detalles?._id) {
      console.error("ID del arma no encontrado para actualizar.");
      return; 
    }
    const {_id, ...valores} = detalles;

    const datos: Partial<ArmaData> = Object.fromEntries(
        Object.entries(valores).filter(([, value]) => value !== undefined)
    );

    await updPost(_id, datos);
    await Consultar();
    Toast("Arma Actualizada");
    modal.current?.dismiss();
  }

  //Mostrar el Modal con los detalles de la arma a actualizar
  const Modal = (arma: ArmaData) => {
      setDetalles(arma); 
      modal.current?.present();
  }

  const cambiar = (key: keyof ArmaData, value: string | number | undefined) => {
    setDetalles(prev => ({...prev, [key]: value }));
  }

  const valor = (key: keyof ArmaData) => {
    return detalles[key] !== undefined ? detalles[key] : '';
  }
  
  return (
  <IonPage>
  <IonHeader>
    <IonToolbar className='toolbar'>
      <IonTitle className='header' slot="start">Minecraft</IonTitle>
      <IonButton 
        className='IonButton'
        slot="end"
        onClick={() => Consultar()}>
        <img src="../../Img/find.png" />
      </IonButton>
    </IonToolbar>
  </IonHeader>
  
  <IonContent fullscreen >
    <IonHeader id="Title">MODS DE ARMAS REGISTRADAS</IonHeader>
  
    { //Creamos la card de consulta
      armas.map((arma) => (
        <div className="post-info" key={arma._id}>

          <div className='post-title'>
            <h2>{arma.nombre}</h2>
            <img src="../../Img/mc.png" className='icon'/>
          </div>

          <p> <strong>Tipo:</strong> {arma.tipo}</p>
          <p> <strong>Daño:</strong> {arma.danio}</p>
          <p> <strong>Especial:</strong> {arma.especial} </p>
          <p> <strong>Encantamiento:</strong> {arma.encantamiento} </p>
          <p> <strong>Durabilidad:</strong> {arma.durabilidad} </p>
          <p> <strong>Descripción:</strong> {arma.descripcion} </p>

          <IonButton 
            className='IonButton-del'
            onClick={() => Eliminar(arma._id)}>
            <img src="../../Img/delete.png" className='icon-button'/>
          </IonButton>

          <IonButton
            onClick={() => Modal(arma)}
            className='IonButton-up'>
            <img src="../../Img/update.png" className='icon-button'/>
          </IonButton>
        </div>
      ))
    }
  
    {/* Modal para Actualizar */}
    <IonModal ref={modal} onWillDismiss={() => {setDetalles({});}}>
      <IonHeader className='modal-header'>
        <IonToolbar className='modal-toolbar'>
          <IonButton className='IonButton-up' slot="start" onClick={() => modal.current?.dismiss()}>
            <img src="../../Img/Cancel.png" alt="" />
          </IonButton>
          <IonTitle>Actualizar</IonTitle>
          <IonButton className='IonButton-up' slot="end" onClick={() => Actualizar()}>
            <img src="../../Img/Check.png" alt="" />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent className='modal-content'>
        <div className="form-container">
          <IonInput 
            className='IonInput'
            id="nombre_arma" 
            type="text"  
            label='Nombre de arma'
            placeholder="Nombre"
            labelPlacement='floating'
            fill="outline" 
            value={valor('nombre')}
            onIonInput={(e) => cambiar('nombre', e.detail.value!)}/>

          <IonInput 
            className='IonInput'
            id="tipo_arma" 
            type="text" 
            label='Tipo de arma'
            placeholder="Espada"
            labelPlacement='floating'
            fill="outline"
            value={valor('tipo')}
            onIonInput={(e) => cambiar('tipo', e.detail.value!)} />

          <IonInput 
            className='IonInput'
            id="daño_arma" 
            type="text"
            label='Daño'
            placeholder="10"
            labelPlacement='floating'
            fill="outline"
            value={valor('danio')}
            onIonInput={(e) => cambiar('danio', e.detail.value!)} />

          <IonInput 
            className='IonInput'
            id="especial_arma" 
            type="text" 
            label='Especial'
            placeholder="Fuego"
            labelPlacement='floating'
            fill="outline"
            value={valor('especial')}
            onIonInput={(e) => cambiar('especial', e.detail.value!)} />

          <IonInput 
            className='IonInput'
            id="" 
            type="text" 
            label='Encantamiento'
            placeholder="Daño de fuego"
            labelPlacement='floating'
            fill="outline"
            value={valor('encantamiento')}
            onIonInput={(e) => cambiar('encantamiento', e.detail.value!)}/>

            <IonInput 
            className='IonInput'
            id="duarabildad" 
            type="text" 
            label='Durablidad'
            placeholder="Material"
            labelPlacement='floating'
            fill="outline"
            value={valor('durabilidad')}
            onIonInput={(e) => cambiar('durabilidad', e.detail.value!)} />

          <IonTextarea
            className='descripcion-multi'
            id="descripcion_arma"
            label='Decripción'
            placeholder="Daño de fuego a los enemigos"
            labelPlacement='floating'
            fill="outline"
            rows={4}
            autoGrow={true}
            value={valor('descripcion')}
            onIonInput={(e) => cambiar('descripcion', e.detail.value!)}/>
        </div>
      </IonContent>
    </IonModal>

  </IonContent>
  </IonPage>
  )
};

export default Tab2;
