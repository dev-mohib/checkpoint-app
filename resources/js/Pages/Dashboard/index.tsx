import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import SideNav from './partials/sidenav';
import NavBar from './partials/navbar'
export default function Dashboard({ auth }: PageProps) {
    return (
        <>
            <Head title="Dashboard" />
            <NavBar />
            <SideNav />
        </>
    );
}
