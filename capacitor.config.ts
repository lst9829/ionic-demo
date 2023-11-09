import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard'

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-demo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
};

export default config;
