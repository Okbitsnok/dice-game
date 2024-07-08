"use client";

import { PageLayout } from "@/components/PageLayout/PageLayout";
import { BeanCard } from "@/components/BeanCard/BeanCard";
import { useRecipes } from "@/api/recipes";

export default function Page() {
  const { data, error, isLoading } = useRecipes();

  return (
    <PageLayout title="Recipes" isError={error} isLoading={isLoading}>
      {data?.items.map((it, index) => (
        <BeanCard
          key={index}
          id={it.recipeId}
          name={it.name}
          description={it.description}
        />
      ))}
    </PageLayout>
  );
}
