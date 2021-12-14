import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './router/AppRouter'

import './FideRunnerApp.scss';
export const FideRunnerApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
