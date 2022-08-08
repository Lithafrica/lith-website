import React, { Fragment } from "react";
import { BlogScreen } from "@/screens/BlogScreen";

import AppLayout from "@/layout/AppLayout";
export default function BlogPage() {
  return (
    <Fragment>
      <AppLayout>
        <BlogScreen />
      </AppLayout>
    </Fragment>
  );
}
