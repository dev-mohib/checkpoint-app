import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="">
               <h1>This is dashboard</h1>
            </div>
        </>
    );
}
