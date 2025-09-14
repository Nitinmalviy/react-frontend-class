// import { useState } from "react";
import { useState } from "react";
import car from "./../assets/images/car.svg"
import { Camera } from "lucide-react";

function Shop() {

    // let [data, setData] = useState({ id: 23, username: "hello123", email: "helo@gmail.com", profileUrl: "https://media.istockphoto.com/id/2064919139/vector/user-account-line-editable-icons-set.jpg?s=612x612&w=0&k=20&c=F4K07kUrJVyyI4aPQN8iUBUfqAqWJEVbG4_U6On4H8E=" })


    let [product, setProducts] = useState([{ id: 1, name: "Puma x200 Lower", price: 2999 }, { id: 1, name: "Puma x200 Lower", price: 2999 }])

    return <>
        <div>
            {/* {data.id}
            {data.username}
            {data.email}

            <img height={60} width={60} src={data.profileUrl} alt="user-profile" /> */}
            {/* <img height={60} width={60} src={car} alt="car-profile" />

            <Camera style={{ color: "orange" }} size={48} /> */}
        </div>
    </>
}

export default Shop;