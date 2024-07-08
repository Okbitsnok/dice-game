"use client";

import { PageLayout } from "@/components/PageLayout/PageLayout";
import { BeanCard } from "@/components/BeanCard/BeanCard";
import { useFacts } from "@/api/facts";

export default function Page() {
  const { data, error, isLoading } = useFacts();

  return (
    <PageLayout title="Facts" isError={error} isLoading={isLoading}>
      {data?.items.map((it, index) => (
        <BeanCard
          key={index}
          id={it.factId}
          name={it.name}
          description={it.description}
        />
      ))}
    </PageLayout>
  );
}
