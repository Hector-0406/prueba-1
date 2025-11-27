import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Prueba1',
  webDir: 'dist',
  server: {
    // 1. Permite el tráfico HTTP (no seguro) en Android.
    cleartext: true, 
    // 2. Opcional, pero recomendado: Asegura que la webview pueda cargar tu host.
    allowNavigation: [
      'https://n3dv4dhj-5000.usw3.devtunnels.ms/'
    ]
  }
};

export default config;
