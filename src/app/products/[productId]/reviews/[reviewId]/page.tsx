import { notFound } from "next/navigation";

export default async function ReviewDetails({
    params,
  }: {
    params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  // There must be a restriction for the reviewId, if it's more than 1000, then it should return a not-found page
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return <h1>Review {reviewId} for product {productId}</h1>;
}
