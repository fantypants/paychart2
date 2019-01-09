// IMPORT PACKAGES
import React from 'react';
// import { Provider } from 'react-redux';
// IMPORT STORE
// import { createAppStore } from '../components/state/stores/AppStore';

// IMPORT COMPONENTS

import AppRouter from './components/routers/AppRouter';

export const App = () => (
    <div className="whole">
		<AppRouter />
	</div>    
);