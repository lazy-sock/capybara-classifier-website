import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("app", "routes/app.tsx"),
  route("connect", "routes/connect.tsx"),
  route("hardware", "routes/hardware.tsx"),
  route("wiki", "routes/wiki.tsx"),
  route("how_it_works", "routes/how_it_works.tsx"),
  route("get_started", "routes/get_started.tsx"),
  route("ai", "routes/ai.tsx"),
  route("code", "routes/code.tsx"),
  route("settings", "routes/settings.tsx"),
  route("image/:id", "routes/image_page.tsx"),
] satisfies RouteConfig;
