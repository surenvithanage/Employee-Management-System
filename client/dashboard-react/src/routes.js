import Dashboard from "views/Dashboard.jsx";
import Employee from "views/Employee";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/employee",
    name: "Employee",
    icon: "pe-7s-graph",
    component: Employee,
    layout: "/admin"
  }
];

export default dashboardRoutes;
