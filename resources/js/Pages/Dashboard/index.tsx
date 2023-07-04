import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import AppLayout from '@/Layouts/AppLayout';
import Welcome from '../Welcome'; 
import CardSection from './partials/cards';
export default function Dashboard({ auth, page }: PageProps) {
    return (
        <AppLayout page={page}>
          <Head title='Dashboard'/>
          <CardSection />              
             
        </AppLayout>
    );
}
