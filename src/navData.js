
export const navData = [
    {
      id: 1,
      label: "Home",
      href: "/",
      type: "link",
    },
    {
      id: 2,
      label: "About",
      href: "/About",
      type: "link",
    },
    {
      id: 3,
      label: "App",
      href: "/App",
      type: "link",
    },
    {
      id: "services",
      label: "Services",
      href: "#",
      type: "dropdown",
      subItems: [
        {
          id: "sub1",
          label: "Services1",
          href: "/Services1",
        },
        {
          id: "sub2",
          label: "Services2",
          href: "/Services2",
        },
      ],
    },
    // {
    //   id: 5,
    //   label: "Partner",
    //   href: "/Partner",
    //   type: "link",
    // },
    {
      id: 6,
      label: "Contact Us",
      href: "/Contact-us",
      type: "link",
    },
    {
      id: "login",
      label: "Login",
      href: "#",
      type: "dropdown",
      subItems: [
        {
          id: "log1",
          label: "Back-Office",
          href: "/Backoffice",
        },
        {
          id: "log2",
          label: "Web-Terminal",
          href: "/Webterminal",
        },
      ],
    },
  ];
  
  