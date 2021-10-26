import React from 'react';

export interface AppState {
    // Global Context Interface properties
}

interface Context {
    appState: AppState;
    setAppState: (state: Partial<AppState>) => void
}

export const StateContext = React.createContext<Context>({ appState: {} as any, setAppState: (state: Partial<AppState>) => null });