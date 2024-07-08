import React from "react";
import { S } from "./index.styled";
import { useRouter } from "next/navigation";
interface BeanCardProps {
  id: string;
  name: string;
  description: string;
}

export function BeanCard({ id, name, description }: BeanCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/beans/${id}`);
  };

  return (
    <S.Card onClick={handleClick}>
      <h3>{name}</h3>
      <p>{description}</p>
    </S.Card>
  );
}
