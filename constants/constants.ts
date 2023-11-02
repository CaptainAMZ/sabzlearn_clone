import {
  BreadcrumbLinkType,
  OrderStatusType,
  panelSidebarMenusType,
} from "../types";

export const FooterLinks: string[] = [
  "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون",
  "چگونه پایتون را آپدیت کنیم؟ | آموزش صفر تا صد آپدیت کردن پایتون",
  "آموزش نصب پایتون ( Python ) در در مک، ویندوز و لینوکس | گام به گام و تصویری",
  " بهترین فریم ورک های فرانت اند | 16 فریم ورک Front end بررسی معایب و مزایا",
  "معرفی بهترین سایت آموزش جاوا اسکریپت [ تجربه محور ] + آموزش رایگان",
];

export const FooterQuickAccess: string[] = [
  "آموزش HTML",
  "آموزش CSS",
  "آموزش جاوا اسکریپت",
  "آموزش بوت استرپ",
  "آموزش ریکت",
  "آموزش پایتون",
];

// courseInfo Breadcrumb
export const courseInfoBreadcrumb: BreadcrumbLinkType[] = [
  { id: 1, title: "خانه", to: "/" },
  {
    id: 2,
    title: "آموزش برنامه نویسی فرانت اند",
    to: "category-info/frontend",
  },
  { id: 3, title: "دوره ی متخصص جاوا اسکریپت", to: "course-info/js-expert" },
];
export const articleInfoBreadcrumb: BreadcrumbLinkType[] = [
  { id: 1, title: "خانه", to: "/" },
  { id: 2, title: "مقاله ها", to: "category-info/frontend" },
  { id: 3, title: "ویو VS ریکت", to: "course-info/js-expert" },
];
export const coursesInfoBreadcrumb: BreadcrumbLinkType[] = [
  { id: 1, title: "خانه", to: "/" },
  { id: 2, title: "تمامی دوره ها", to: "courses" },
];
export const allArticlesBreadcrumb: BreadcrumbLinkType[] = [
  { id: 1, title: "خانه", to: "/" },
  { id: 2, title: "تمامی مقاله ها", to: "articles/1" },
];

export const orderStatus: OrderStatusType[] = [
  { title: "مرتب سازی پیش فرض", status: "default" },
  { title: "مرتب سازی بر اساس آخرین", status: "latest" },
  { title: "مرتب سازی بر اساس ارزان ترین", status: "cheapest" },
  { title: "مرتب سازی بر اساس گران ترین", status: "most expensive" },
];

export const panelSidebarMenus: panelSidebarMenusType[] = [
  { title: "صفحه اصلی", link: "/p-admin" },
  { title: "دوره ها", link: "courses" },
  { title: "جلسات", link: "sessions" },
  { title: "منو ها", link: "menus" },
  { title: "مقاله ها", link: "articles" },
  { title: "کاربران", link: "users" },
  { title: "کامنت ها", link: "comments" },
  { title: "تیکت ها", link: "tickets" },
  { title: "کدهای تخفیف", link: "offs" },
  { title: "جشنواره تخفیف", link: "discounts" },
  { title: "دسته‌بندی‌ها", link: "category" },
  { title: "پیغام ها", link: "contact" },
];
