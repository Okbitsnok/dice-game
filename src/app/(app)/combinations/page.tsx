"use client";

import { useCombinations } from "@/api/combinations";
import { PageLayout } from "@/components/PageLayout/PageLayout";
import { BeanCard } from "@/components/BeanCard/BeanCard";

export default function Page() {
  const { data, error, isLoading } = useCombinations();

  return (
    <PageLayout title="Combinations" isError={error} isLoading={isLoading}>
      {data?.items.map((it, index) => (
        <BeanCard
          key={index}
          id={it.combinationId}
          name={it.name}
          description={it.description}
        />
      ))}
    </PageLayout>
  );
}
