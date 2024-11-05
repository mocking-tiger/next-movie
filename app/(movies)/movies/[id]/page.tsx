"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function MovieDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  return (
    <h1>
      Movie ({params.id}/{searchParams.get("region")})
    </h1>
  );
}
