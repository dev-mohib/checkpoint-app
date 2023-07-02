import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth, canLogin }: PageProps<{ canLogin : any }>) {
    return (
        <div>
            <h1>Landing Page</h1>
        </div>
    );
}
