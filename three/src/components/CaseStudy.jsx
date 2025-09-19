
export default function CaseStudy() {

    // const [CaseStudies, setCaseStudies] = useState([
    //     {
    //         id: 1,
    //         title: "AI Software Development",
    //         description: "Building scalable AI solutions to solve real-world problems.",
    //         imageUrl: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f0",
    //         content: "This case study focuses on developing intelligent AI-powered software that automates complex tasks and improves decision-making processes. The project involved creating a machine learning model capable of predicting user behavior with 90% accuracy. Our team used Python, TensorFlow, and FastAPI to build the backend, while React powered the frontend. The challenge was managing massive datasets, so we integrated scalable cloud infrastructure using AWS S3 and Lambda. Data preprocessing played a crucial role, including normalization and cleaning to ensure high-quality input for the model. As a result, the client saw a 35% increase in efficiency, significantly reducing manual work and improving customer experience. This project demonstrates the potential of AI to streamline workflows and deliver business value."
    //     },
    //     {
    //         id: 2,
    //         title: "E-Commerce Web App",
    //         description: "A full-stack web solution for online retail businesses.",
    //         imageUrl: "https://images.unsplash.com/photo-1515165562835-c4c6b7130c8a",
    //         content: "The e-commerce case study highlights the development of a scalable and secure online store that handles thousands of daily transactions. We built a robust backend using Node.js and Express, connected to a PostgreSQL database for structured data storage. The frontend was built with React and Tailwind CSS, providing a responsive and user-friendly interface. Key features included product filtering, secure payments via Stripe, and an admin dashboard for inventory management. During the project, we focused on optimizing page load speeds and integrating caching mechanisms with Redis to reduce server load. The result was a seamless shopping experience that improved user retention and boosted the client’s revenue by 40% within the first quarter."
    //     },
    //     {
    //         id: 3,
    //         title: "Healthcare Appointment System",
    //         description: "Digital solution to streamline doctor-patient appointment scheduling.",
    //         imageUrl: "https://images.unsplash.com/photo-1588776814546-8b2b29b545f2",
    //         content: "This case study details the creation of a healthcare appointment management platform designed to reduce patient wait times and improve hospital efficiency. Our solution included a real-time booking system, doctor availability tracking, and automated reminders via email and SMS. We leveraged Django and SQLite for the backend, ensuring secure data handling and compliance with HIPAA regulations. The UI was carefully crafted to be intuitive for both patients and hospital staff. During testing, we reduced appointment overlaps by 70% and saw a 50% reduction in no-shows. This project illustrates how technology can improve patient care and hospital workflow simultaneously."
    //     },
    //     {
    //         id: 4,
    //         title: "EdTech Learning Platform",
    //         description: "Interactive online learning experience for students worldwide.",
    //         imageUrl: "https://images.unsplash.com/photo-1581091870627-3b6b4c219b92",
    //         content: "The EdTech platform case study describes the design and development of a web-based solution that enables students to access video lectures, quizzes, and personalized learning paths. Built with Next.js and MongoDB, the platform supported thousands of concurrent users. We implemented gamification features like badges and leaderboards to keep students engaged. The platform also included real-time chat for teacher-student interaction. By leveraging server-side rendering, we improved SEO and page speed, resulting in a 60% increase in organic traffic. This solution empowered students to learn at their own pace, providing a flexible and scalable education model."
    //     },
    //     {
    //         id: 5,
    //         title: "FinTech Payment Gateway",
    //         description: "Secure and reliable payment processing system for businesses.",
    //         imageUrl: "https://images.unsplash.com/photo-1556742502-ec7e75a58007",
    //         content: "This case study explores the development of a payment gateway that ensures secure transactions for small and medium-sized businesses. The solution used Node.js for the backend and React for the merchant dashboard. Security was our top priority, so we implemented tokenization, encryption, and PCI DSS compliance. The gateway supported multiple payment methods, including UPI, cards, and net banking. The biggest challenge was ensuring zero downtime during deployment, which we solved using a blue-green deployment strategy. The system processed over $1M in transactions during its first month, demonstrating its scalability and reliability."
    //     },
    //     {
    //         id: 6,
    //         title: "Logistics Management System",
    //         description: "Smart logistics platform for tracking shipments and routes.",
    //         imageUrl: "https://images.unsplash.com/photo-1565612302825-05a4b84b9d81",
    //         content: "In this case study, we developed a logistics management solution that optimizes delivery routes and provides real-time shipment tracking. Using Google Maps API and geolocation services, we built a system that reduced delivery times by 25%. The backend was built using Express.js, with data stored in MongoDB for flexible route management. The system also included a dashboard for logistics managers to monitor driver performance and shipment statuses. We integrated push notifications for live updates, improving customer satisfaction significantly. This project showcases how data-driven logistics can save costs and improve efficiency."
    //     },
    //     {
    //         id: 7,
    //         title: "Travel Booking Platform",
    //         description: "Complete travel solution for hotels, flights, and packages.",
    //         imageUrl: "https://images.unsplash.com/photo-1502920917128-1aa500764b43",
    //         content: "Our travel booking platform case study covers the creation of a system that allows users to search, compare, and book flights, hotels, and holiday packages. Built using React and Django REST framework, the platform provided a smooth user experience with advanced filters and secure payment integration. The platform featured personalized recommendations based on user history, and we implemented caching with Redis to optimize search response time. The system scaled to handle peak-season traffic, supporting thousands of simultaneous bookings without downtime. As a result, the client experienced a 35% increase in bookings and higher customer satisfaction ratings."
    //     },
    //     {
    //         id: 8,
    //         title: "Restaurant Ordering App",
    //         description: "Contactless ordering and food delivery system.",
    //         imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    //         content: "This case study highlights the creation of a restaurant ordering application that enables customers to place orders directly from their smartphones. Built with React Native for cross-platform support, the app included menu browsing, live order tracking, and digital payments. The backend, powered by Node.js, handled real-time updates through WebSockets. We focused on designing an intuitive UI with minimal steps from selection to checkout. The implementation reduced in-store wait times by 50% and increased order accuracy, as everything was handled digitally. This project demonstrates how restaurants can embrace technology to improve efficiency and enhance the customer experience."
    //     },
    //     {
    //         id: 9,
    //         title: "Real Estate Listing Platform",
    //         description: "Online property marketplace for buyers, sellers, and agents.",
    //         imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    //         content: "In this case study, we developed a real estate platform that allows users to browse, filter, and shortlist properties with ease. The project included an advanced search feature with filters for price, location, and property type. We used Elasticsearch to enable fast and relevant property searches. The backend was implemented with Django and PostgreSQL, while the frontend used React for a smooth browsing experience. We integrated a map view for property locations using Mapbox API. The platform resulted in a 45% increase in lead generation for the client and improved the property discovery process for users."
    //     }])

    return (
        <div className='bg-amber-50 w-screen'>

            <h1 className="text-center text-4xl ">case Study</h1>
            {/* <div className='grid grid-cols-3'>
                {[1, 2, 3, 4].map((item, index) => {
                    return <div key={index} className='h-[270px] w-[220px] rounded shadow-2xl bg-white'>{item}</div>
                })}
            </div> */}
        </div>
    )
}
