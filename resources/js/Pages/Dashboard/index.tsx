import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminDashboard from './admin';
import InstructorDashboard from './instructor';
import OrganizationDashboard from './organization';
import StudentDashboard from './student';
export default function Dashboard() {

    return (
        <AppLayout
          AdminComponent={<AdminDashboard />}
          OrganizationComponent={<OrganizationDashboard />}
          InstructorComponent={<InstructorDashboard />}
          StudentComponent={ <StudentDashboard />}
        >
          <Head title='Dashboard'/>
        </AppLayout>
    );
}
