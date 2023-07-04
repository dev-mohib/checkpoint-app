import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = "Checkpoint"//= window.document.getElementsByTagName('title')[0]?.innerText || 'Checkpoint';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<div data-theme="luxury">
                <App {...props} />
            </div>
            );
    },
    progress: {
        color: '#4B5563',
    },
});
