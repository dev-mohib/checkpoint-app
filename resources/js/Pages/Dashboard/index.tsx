import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { SidebarWrapper } from '@/Components/next/sidebar/sidebar';
import { NavbarWrapper } from '@/Components/next/navbar/navbar';
import { Content } from '@/Components/next/home/content';

export default function Dashboard({ auth }: PageProps) {
    return (
        <>
            <Head title="Dashboard" />
            <Head title="Welcome" />
            <div className='flex flex-row'>
              <SidebarWrapper />
              <div>
              <NavbarWrapper />
              <Content />
              </div>
            </div>
        </>
    );
}
