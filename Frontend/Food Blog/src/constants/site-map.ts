interface Route {
  url: string;
  title: string;
  roles?: string[];
}

interface SiteMap {
  [key: string]: Route;
}
export const SITE_MAP: SiteMap = {
    HOME: {
      url: "/",
      title: "Home",
    },
    DETAIL: {
      url: "/detail/recipe/:id",
      title: "Detail",
    },
    ABOUT: {
      url: "/about",
      title: "About",
    },
    CART: {
      url: "/cart",
      title: "Cart",
    },
    MARKET: {
      url: "/market",
      title: "Market",
    },
    ACCOUNT: {
      url: "/account",
      title: "Account",
    },
    ADMIN: {
      url: "/admin",
      title: "Admin",
      roles: ["admin"],
    },
  };