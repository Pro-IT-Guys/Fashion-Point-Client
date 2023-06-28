// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    pageOne: path(ROOTS_DASHBOARD, "/ecommerce"),
    pageTwo: path(ROOTS_DASHBOARD, "/two"),
    pageThree: path(ROOTS_DASHBOARD, "/three"),
  },
  user: {
    root: path(ROOTS_DASHBOARD, "/app/user"),
    pageUser: path(ROOTS_DASHBOARD, "/app/user/all-users"),
  },
  product: {
    root: path(ROOTS_DASHBOARD, "/app/product"),
    pageAllProduct: path(ROOTS_DASHBOARD, "/app/product/all-products"),
    createProduct: path(ROOTS_DASHBOARD, "/app/product/create-product"),
  },
  category: {
    root: path(ROOTS_DASHBOARD, "/app/category"),
    addCategory: path(ROOTS_DASHBOARD, "/app/category/add-category"),
  },
};
