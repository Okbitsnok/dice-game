"use client";

import { PageLayout } from "@/components/PageLayout/PageLayout";
import { BeanCard } from "@/components/BeanCard/BeanCard";
import { useMileStones } from "@/api/history";

export default function Page() {
  const { data, error, isLoading } = useMileStones();

  return (
    <PageLayout
      title="Explore History ..."
      isError={error}
      isLoading={isLoading}
    >
      {data?.items.map((it, index) => (
        <BeanCard
          key={index}
          id={it.mileStoneId}
          name={it.year}
          description={it.description}
        />
      ))}
    </PageLayout>
  );
}
