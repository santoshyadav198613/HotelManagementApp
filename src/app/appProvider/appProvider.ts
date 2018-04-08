import { InjectionToken } from  '@angular/core';

import { IAppProvider } from './IappProvider';

export const APP_PROVIDER = new InjectionToken<IAppProvider>('AppProvider');

export const App_Values : IAppProvider = {
   apiEndpoint : 'https://jsonplaceholder.typicode.com/',
   apiKey : 'gdsfhg564fhkj',
   apiPwd : 'thisispassword'
}
