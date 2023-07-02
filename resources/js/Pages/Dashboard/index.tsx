import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
    return (
        <>
            <div className='flex flex-row'>
              <h1>Dashboard</h1>
            </div>
        </>
    );
}
