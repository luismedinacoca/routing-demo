"use client";
import { usePathname } from "next/navigation";  // 👈🏽

export default function NotFound() {
  const pathname = usePathname(); // 👈🏽
  console.log("pathname: ", pathname); // 👈🏽
  /*
  console.log('pathname.split("/")[0]', pathname.split("/")[0]); // 👈🏽
  console.log('pathname.split("/")[1]', pathname.split("/")[1]); // 👈🏽
  console.log('pathname.split("/")[2]', pathname.split("/")[2]); // 👈🏽
  console.log('pathname.split("/")[3]', pathname.split("/")[3]); // 👈🏽
  console.log('pathname.split("/")[4]', pathname.split("/")[4]); // 👈🏽
  */
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  if(parseInt(reviewId) > 1000) {
    return (
      <div>
        <h2>Review Not Found</h2>
        <p>Review {reviewId} for product {productId} not found</p>
      </div>
    )
  }
}
