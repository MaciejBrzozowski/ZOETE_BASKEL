import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "components/AboutUs/About.tsx"),
  route("/products", "components/Products/Products.tsx"),
  route("/contact", "components/Contact/Contact.tsx"),
] satisfies RouteConfig;
