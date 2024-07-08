"use client";

import { useParams } from "next/navigation";
import { PageLayout } from "@/components/PageLayout/PageLayout";
import { useBeanById } from "@/api/beans";

export default function Page() {
  const params = useParams();

  const { data, error, isLoading } = useBeanById(params.id as string);

  return (
    <PageLayout title={data?.flavorName} isError={error} isLoading={isLoading}>
      <p>{data?.beanId}</p>
      <p>{data?.description}</p>
      <p>{data?.flavorName}</p>
      {data?.groupName.length &&
        data.groupName.map((it, index) => <p key={index}>{it}</p>)}
      {data?.imageUrl && (
        <img
          src={data.imageUrl}
          alt={data.flavorName}
          height={300}
          width={450}
        />
      )}
    </PageLayout>
  );
}
