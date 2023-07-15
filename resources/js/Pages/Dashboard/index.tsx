import { Head, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import AppLayout from '@/Layouts/AppLayout';
import CardSection from './partials/cards';
import AdminDashboard from './admin';
import InstructorDashboard from './instructor';
import OrganizationDashboard from './organization';
import StudentDashboard from './student';
export default function Dashboard() {
  const { auth }   = usePage<PageProps>().props;
    return (
        <AppLayout>
          <Head title='Dashboard'/>
          {
            auth.role === 'admin' ?
            <AdminDashboard />
            :auth.role === 'instructor'?
            <InstructorDashboard />
            :auth.role === 'organization'?
            <OrganizationDashboard />
            :auth.role === 'student'?
            <StudentDashboard />
            :null
          }
        </AppLayout>
    );
}
