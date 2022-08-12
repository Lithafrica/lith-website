import AppLayout from "@/layout/AppLayout";
import BlogContentScreen from "@/screens/BlogContentScreen";
import {Fragment} from "react";


const BlogDetailsPage = () => {
  return (
      <Fragment>
          <AppLayout>
              <BlogContentScreen/>
          </AppLayout>
      </Fragment>
  );
};
export default BlogDetailsPage;
