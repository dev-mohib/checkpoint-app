import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Menu from './partials/menu'
import { Content } from '@/Components/next/home/content';
import { SidebarWrapper } from '@/Components/next/sidebar/sidebar'
import { NavbarWrapper } from '@/Components/next/navbar/navbar'
export default function Welcome({ auth, canLogin }: PageProps<{ canLogin : any }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className='flex flex-row'>
              <SidebarWrapper />
              <div>
              <NavbarWrapper />
              <Content />
              </div>
            </div>
            {/* <Content /> */}
        </>
    );
}
