import './bootstrap';
import '../css/app.css';
import 'filepond/dist/filepond.min.css'

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = "Checkpoint"//= window.document.getElementsByTagName('title')[0]?.innerText || 'Checkpoint';

const theme = localStorage.getItem('data-theme')??'light'
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<div id='data-theme-div' data-theme={theme}>
                <App {...props} />
            </div>
            );
    },
    progress: {
        color: '#4B5563',
    },
});
