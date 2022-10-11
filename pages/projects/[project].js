import React from "react";
import { useRouter } from "next/router";

function Project() {
  const router = useRouter();
  const { project } = router.query;
  return <div>{project}</div>;
}

export default Project;
