import { useLocation } from "react-router-dom";
import Card from "./ui/Card";

export default function CaseStudy() {
    const location = useLocation();

    let username = location.state.username;
    let email = location.state.email;



    return (
        <div className='bg-amber-50 '>
            <h1 class="text-center font-sans text-4xl font-bold">Well come {username} {email} Case Study</h1>
            <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
                <Card />
            </div>
        </div>
    )
}
