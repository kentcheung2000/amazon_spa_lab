import React from "react";
import ProductDetails from "./ProductDetails"
import ReviewDetails from "./ReviewDetails"

function ProductShowPage(props) {
    return (
        <div>
            <ProductDetails
                title="Apple computer"
                description="The vision behind iMac has never wavered: transform the desktop experience by fitting powerful, easy-to-use technology into an elegant, all-in-one design. The new iMac takes that idea to the next level — giving you even more amazing tools to do just about anything. iMac is packed with the latest processors, faster memory and phenomenal graphics. All coming to life on the brightest, most vibrant Retina display ever on a Mac. It’s the total package — powered up."
                seller={{ full_name: "Kent Cheung" }}
                price={"$99.99"}
                created_at={new Date().toString()}
            />
            <ReviewDetails rating="3"
                body="This is great!"
                created_at={new Date().toString()}
                reviewer={{ full_name: "Winnie chan" }}

            />


        </div>
    );
}


export default ProductShowPage;