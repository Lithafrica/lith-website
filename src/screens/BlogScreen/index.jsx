import React from "react";
import { BaseContainer } from "@/components/BaseContainer";
import BlogItem from "@/screens/BlogScreen/BlogItem";
import AppLayout from "@/layout/AppLayout";
import researchData from "@/lib/blogTemplates";

export function BlogScreen(props) {
  return (
    <AppLayout>
      <BlogItem item={researchData[0]} />
      <BaseContainer py={"45px"}>
        {researchData.map((item, index) => {
          if (index === 0) return null;
          return <BlogItem key={index} item={item} />;
        })}
      </BaseContainer>
    </AppLayout>
  );
}
