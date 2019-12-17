import React from 'react'
import App from './App';
import { registerRootComponent } from 'expo';

const MainComponent = () => (
    <App />
)


registerRootComponent(MainComponent);