import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import AppLayout from '@/Layouts/AppLayout';
import Welcome from '../Welcome'; 
import CardSection from './partials/cards';
export default function Dashboard({ auth, page, activeMenu, title }: any) {
    return (
        <AppLayout activeMenu={activeMenu} title={title}>
          <Head title='Dashboard'/>
          <CardSection />              
             
        </AppLayout>
    );
}
