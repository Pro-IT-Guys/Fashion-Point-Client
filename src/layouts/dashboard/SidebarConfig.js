// routes
import { PATH_DASHBOARD } from "../../routes/paths";
// components
import SvgIconStyle from "../../components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: "100%", height: "100%" }}
  />
);

const ICONS = {
  user: getIcon("ic_user"),
  ecommerce: getIcon("ic_ecommerce"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
  product: getIcon("ic_product"),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "general",
    items: [
      {
        title: "E-Commerce",
        path: PATH_DASHBOARD.general.pageOne,
        icon: ICONS.dashboard,
      }
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: "management",
    items: [
      {
        title: "customer",
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: "All Users", path: PATH_DASHBOARD.user.pageUser },
        ],
      },
      {
        title: "product",
        path: PATH_DASHBOARD.product.root,
        icon: ICONS.ecommerce,
        children: [
          { title: "All Products", path: PATH_DASHBOARD.product.pageAllProduct },
          { title: "Create Products", path: PATH_DASHBOARD.product.createProduct },
        ],
      },
      {
        title: "category",
        path: PATH_DASHBOARD.category.root,
        icon: ICONS.ecommerce,
        children: [
          { title: "Add Category", path: PATH_DASHBOARD.category.addCategory },
        ],
      },
    
    ],
  },
];

export default sidebarConfig;
