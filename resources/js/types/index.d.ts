import { Config as ZiggyConfig } from 'ziggy-js'
export interface User {
    id: number;
    name: string;
    email: string;
    username: string
    created_at: string
    updated_at: string
    contact_number: string
    date_of_birth?: string
    address: string;
    gender?: 'male' | 'female' | 'other'
    type: 'admin' | 'student' | 'organization' | 'instructor';
    role: 'admin' | 'student' | 'organization' | 'instructor';
    status: string
    email_verified_at: string;
}

export interface Auth {
    user : User
}
export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
        role: 'admin' | 'student' | 'organization' | 'instructor';
    };
    canAccess : boolean,
    ziggy? : ZiggyConfig & { query : any}
    activeMenu: string
    title: string,
    // organizations? : OrganizationType[]
    // instructors?: InstructorType[]
    // students?: StudentType[]
    // checkpoints?: CheckpointType[]

    errors: Error & any
};
export interface Link{
    active: boolean,
    label: string,
    url: string
}
export interface Pagination{
    current_page : number  
    first_page_url : string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: string
    to: number
    total: number
}

export interface OrganizationPagination extends Pagination{
    data : Organization[]
}

export interface InstructorPagination extends Pagination{
    data: Instructor[]
}

export interface StudentPagination extends Pagination{
    data: Student[]
} 

export interface CheckpointPagination extends Pagination{
    data : Checkpoint[]
}

export interface Organization{
    id: number
    logo: string
    name: string
    registration_doc: string
    status: string
    users: User
    instructors?: Instructor[]
    students?: Student[]
    checkpoints?: Checkpoint[]
    [key: string]: any
}

export interface Instructor {
    id : number
    access_start_date: string
    access_end_date: string
    qualification: string
    photo_id_front: string
    photo_id_back : string
    students?: Student[]
    checkpoints?: Checkpoint[]
    users: User
    organization?: Organization[]
}

export interface Student{
    id: number
    user_id: number
    organization_id: number;
    parent_name: string
    parent_relationship: string
    photo_id_front: string
    photo_id_back: string
    users: User
    checkpoints?: Checkpoint[]
    [key: string]: any
}

export interface Checkpoint {
    id: number
    name: string
    description: string
    organization_id: number;
    instructor_id: string
    student_id: string
    validity_period?: string
    instructor_input?: string
    badge?: string
    achieved_gradpoints: string
    total_gradepoints: string
    is_approved?: boolean
    has_submitted?: boolean
    instructor_recommendation?: string
    organizations? : Organization
    students? : Student
    instructors?: Instructor
    certificate?: string
    [key: string]: any
}

