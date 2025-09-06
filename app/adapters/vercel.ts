import type { ServerBuild } from "@react-router/node";
import { createRequestHandler } from "@react-router/node";

export default function createVercelRequestHandler(build: ServerBuild) {
  return createRequestHandler(build, "production");
}
