import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { AppImage } from "@/components/AppImage";
import { useParams } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import researchData from "@/lib/blogTemplates";

function BlogContent() {
  let { id } = useParams();
  const post = React.useMemo(
    () => researchData.find((el) => el.id.toString() === id),
    [id]
  );
  console.log(post);

  return (
    <AppLayout>
      <Box maxWidth={"1200px"} mx={"auto"} mt={"65px"}>
        <AppImage src={"/images/blog2.webp"} h={"400px"} w={"100%"} />
        <Box mx={{ base: "24px", lg: "auto" }}>
          <Text fontSize={"4xl"} mt={"25px"} mb={"45px"}>
            {post.title}
          </Text>
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
        </Box>
      </Box>
    </AppLayout>
  );
}

export default BlogContent;
