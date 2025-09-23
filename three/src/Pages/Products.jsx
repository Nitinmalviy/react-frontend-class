import React, { useEffect, useState } from 'react'

export default function Products() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    async function getProducts() {
        try {

            setIsLoading(true)
            const response = await fetch("https://dummyjson.com/products", { method: "GET" });

            if (response.status == "200") {
                const data = await response.json();
                setProducts(data.products)
            }

        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false)
        }
    }

    console.log("Products.......", products);

    useEffect(() => {
        async function fetchData() {
            await getProducts();
        }
        fetchData();
    }, [])

    if (isLoading) {
        return (
            <div className="w-screen h-screen grid place-content-center bg-white">
                <div className="flex flex-col items-center gap-4">
                    {/* Spinner */}
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>

                    {/* Loading Text */}
                    <h1 className="text-lg font-semibold text-gray-700">Loading...</h1>
                </div>
            </div>
        );
    }


    return (
        <div className='w-screen  h-auto grid grid-cols-4 gap-2 m-auto'>
            {products.map((item, index) => {
                return (
                    <div className='w-[260px] h-[330px] shadow-2xl border-2 rounded-md '>
                        <img src={item.thumbnail} alt=".." />
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                        <p>{item.stock}</p>
                    </div>)
            })}
        </div >
    )
}
