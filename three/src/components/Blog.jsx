import React, { useState } from 'react'
import Card from './ui/Card'
import { useLocation } from 'react-router-dom'

export default function Blog() {

    const location = useLocation();
    let username = location.state.username;
    let email = location.state.email;


    const [blogData, setBlogData] = useState([
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Awards",
            title: "We came first in Awwwards ceremony 2021",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam tempore officiis. Lorem, ipsum dolor.",
            buttonText: "Learn More"
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Design",
            title: "Our UI/UX team won Best Design Award 2022",
            description: "We focused on user-first approach and created seamless digital experiences loved by thousands of users worldwide.",
            buttonText: "Learn More"
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Innovation",
            title: "Innovation Summit: Product of the Year 2023",
            description: "Our product was recognized for bringing innovation that transformed businesses and improved customer engagement.",
            buttonText: "Learn More"
        },
        {
            id: 4,
            imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Teamwork",
            title: "Celebrating Our Talented Team Members",
            description: "Behind every achievement is a team of passionate individuals working together to make a difference.",
            buttonText: "Learn More"
        },
        {
            id: 5,
            imageUrl: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Growth",
            title: "Reached 1M+ Active Users This Year",
            description: "Thanks to our loyal customers, we have achieved a massive milestone and are scaling faster than ever.",
            buttonText: "Learn More"
        },
        {
            id: 6,
            imageUrl: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Event",
            title: "Annual Meetup & Networking Session",
            description: "An evening full of insights, networking, and exciting new opportunities for industry professionals.",
            buttonText: "Learn More"
        },
        {
            id: 7,
            imageUrl: "https://images.unsplash.com/photo-1515165562835-c3b8e0e2a2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Technology",
            title: "AI Powered Solutions Launched",
            description: "We successfully launched AI-powered tools to enhance business productivity and automation across multiple industries.",
            buttonText: "Learn More"
        },
        {
            id: 8,
            imageUrl: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Culture",
            title: "Celebrating Diversity at Workplace",
            description: "We encourage an inclusive work environment where everyone feels valued, respected, and heard.",
            buttonText: "Learn More"
        },
        {
            id: 9,
            imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Training",
            title: "Upskilling Program for Employees",
            description: "Our new training initiative focuses on professional development, leadership skills, and technical expertise.",
            buttonText: "Learn More"
        },
        {
            id: 10,
            imageUrl: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Startup",
            title: "Our Journey from Startup to Success",
            description: "From a small idea to a thriving company, we share the lessons learned along the way and the road ahead.",
            buttonText: "Learn More"
        },
        {
            id: 11,
            imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Product",
            title: "Introducing Our Next Big Product",
            description: "A revolutionary product that simplifies workflows, saves time, and boosts team collaboration like never before.",
            buttonText: "Learn More"
        },
        {
            id: 12,
            imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Strategy",
            title: "Company Vision 2025 Announced",
            description: "We unveiled our roadmap for the next two years, focusing on growth, sustainability, and global expansion.",
            buttonText: "Learn More"
        }
    ]
    )


    return (
        <>
            <h1 class="text-center font-sans text-4xl font-bold">Well come {username} {email} Our Blogs</h1>
            <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
                {
                    blogData.map((data) => { return < Card data={data} /> })
                }
            </div>

        </>
    )
}
