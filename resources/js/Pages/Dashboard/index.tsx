import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import AppLayout from '@/Layouts/AppLayout';
import Welcome from '../Welcome'; 
export default function Dashboard({ auth, page }: PageProps) {
    return (
        <AppLayout page={page}>
              {/* <h1>Dashboard</h1> */}
              
              <Welcome auth={{user : {email : '',  email_verified_at : '',id : 1212, name : 'Mohib'}}}
                laravelVersion='20'
                phpVersion='8'
              />
        </AppLayout>
    );
}
