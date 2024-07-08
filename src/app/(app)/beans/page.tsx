"use client";

import { useBeans } from "@/api/beans";
import { BeanCard } from "@/components/BeanCard/BeanCard";
import { PageLayout } from "@/components/PageLayout/PageLayout";

export default function Page() {
  const { data, error, isLoading } = useBeans();

  return (
    <PageLayout title="Beans" isError={error} isLoading={isLoading}>
      {data?.items.map((bean, index) => (
        <BeanCard
          key={index}
          id={bean.beanId}
          name={bean.name}
          description={bean.description}
        />
      ))}
    </PageLayout>
  );
}
