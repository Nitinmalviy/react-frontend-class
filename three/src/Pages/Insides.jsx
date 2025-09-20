import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Insides() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log("location --- ", location.pathname);


    return (
        <>
            <section className="flex flex-col bg-amber-50 ">
                <div class="my-5 flex gap-2 mx-20">
                    <button
                        onClick={() => {
                            navigate("/insides/blog");
                        }}
                        class={`${location.pathname == "/insides/blog" ? "text-blue-700" : "bg-blue-700 text-white"} relative cursor-pointer mt-4 rounded-lg border-2 border-blue-700  px-6 py-2 font-medium  transition hover:translate-y-1`}
                    >
                        Blogs
                    </button>
                    <button
                        onClick={() => {
                            navigate("/insides");
                        }}
                        class={`${location.pathname == "/insides" ? "text-blue-700" : "bg-blue-700 text-white"}  mt-4  cursor-pointer rounded-lg border-2 border-blue-700 px-6 py-2 font-medium text-blue-700 transition hover:translate-y-1`}
                    >
                        Case Study
                    </button>
                </div>
                <Outlet />
            </section >
        </>
    );
}
