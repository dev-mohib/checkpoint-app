import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import AppLayout from '@/Layouts/AppLayout';


const featuresData = [
    {title : "Organization Management", description : " Register your school as an organization and gain complete control over the management of instructors, students, and checkpoints (reports). Each organization has its own secure and isolated environment, ensuring data privacy and access control."},
    {title : "User Roles and Privileges", description : "Our system provides distinct user roles for instructors and students, each with their own privileges. Instructors can create, read, and update checkpoints, as well as manage the students assigned to them. Students, on the other hand, can access only the checkpoints assigned to them, facilitating personalized learning experiences."},
    {title : "Seamless Collaboration", description : "With our software, instructors can easily connect with multiple students through checkpoints. This enables effective communication, assignment tracking, and progress monitoring, fostering a collaborative and engaging learning environment."},
    {title : "Data Security and Privacy", description : "We prioritize the security and privacy of your data. Our platform implements robust security measures, ensuring that each organization's data remains confidential and protected from unauthorized access."},
    {title : "Track Student Checkpoints", description : "Create unlimited checkpoint and assign to the students, Mark the results by instructors, check the progess of the student."},
    {title : "Experience the Difference", description : "Sign up today and join hundreds of educational institutions benefiting from [Product Name]'s advanced features and intuitive interface. "},
    
]



const testimonialsData = [
    {text : "Needless to say we are extremely satisfied with the results. I don't always clop, but when I do, it's because of software.", name : "Gracia E."},
    {text : "Thanks for the great service. I don't always clop, but when I do, it's because of software. I was amazed at the quality of software. I wish I would have thought of it first.", name : "Berthe R."},
    {text : "Service has got everything I need. Man, this thing is getting better and better as I learn more about it.", name : "Ruby Q."},
]


export default function Welcome({ auth, canLogin }: PageProps<{ canLogin : any }>) {
    return (
        <>
            <Head title='Dashboard'/>
            <Menu />
            <div className="hero py-32 bg-base-100">
            <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
                <img src="https://picsum.photos/seed/picsum/500/300" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">My Checkpoint App</h1>
                <p className="py-6">A Comprehensive School Organizations Management Software</p>
                <button className="btn btn-primary">Get Started</button>
                <div className="input-group">
            </div>
            </div>
          </div>
        </div>

        <div className="grid place-items-center w-full bg-base-200">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">Features</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    featuresData.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl">
                                <div className="card-body mt-4 items-center text-center">
                                    <h2 className="card-title">{i.title}</h2>
                                    <p>{i.description}</p>
                                </div>
                                </div>
                        )
                    })
                }
                
            </div>
            </div>
        </div>


        <div className="grid place-items-center w-full bg-base-100">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">Testimonials</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    testimonialsData.map((t, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img className="mask w-16 h-16 mask-circle" src="https://picsum.photos/100/100" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>{t.text}</p>
                                    <p className="text-slate-500">-{t.name}</p>
                                </div>
                                </div>
                        )
                    })
                }
                
            </div>
            </div>
        </div>
        <Footer />
        </>
    );
}



const Menu = () => {

    return (
        <div className="navbar bg-base-200 fixed  z-50">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">MyCheckpoint</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={route('login')}>Login</Link></li>
      <li><Link href={route('dashboard')}>Dashboard</Link></li>
    </ul>
  </div>
</div>
    )
}

function Footer() {
    return(
        <div>
        <div className="bg-base-300 flex justify-center">
        <footer className="footer p-10 max-w-5xl  text-base-content">
  <div>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>MyCheckpoint.<br/>Providing reliable solutions</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Blog</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press Release</a>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</footer>
        </div>
        <div className="p-4 flex justify-center bg-neutral text-neutral-content">
        <div className="max-w-5xl ">
          <p>Copyright © 2023 - All right reserved</p>
        </div> 
        </div>
        </div>
    )
}
