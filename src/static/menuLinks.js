import {
  AccountBalance,
  AccountTree,
  Dashboard,
  Group,
  Person,
  ProductionQuantityLimits,
  Settings,
  SettingsSuggest,
  SupportAgent,
} from "@mui/icons-material";

export const adminMenus = [
  {
    label: "Dashboard",
    path: "/",
    icon: Dashboard,
    children: [
      {
        label: "Accounting",
        path: "/accounting",
        children: [
          {
            label: "Overview",
            path: "/",
          },
          {
            label: "Reports",
            path: "/reports",
            children: [
              {
                label: "Account Statement",
                path: "/accounting/reports/account-statement",
              },
              {
                label: "Invoice Summary",
                path: "/accounting/reports/invoice-summary",
              },
              {
                label: "Sales Report",
                path: "/accounting/reports/sales-report",
              },
              {
                label: "Receivables",
                path: "/accounting/reports/receivables",
              },
              {
                label: "Payables",
                path: "/accounting/reports/payables",
              },
              {
                label: "Bill Summary",
                path: "/accounting/reports/bill-summary",
              },
              {
                label: "Product Stock",
                path: "/accounting/reports/product-stock",
              },
              {
                label: "Cash Flow",
                path: "/accounting/reports/cash-flow",
              },
              {
                label: "Transaction",
                path: "/accounting/reports/transaction",
              },
              {
                label: "Income Summary",
                path: "/accounting/reports/income-summary",
              },
              {
                label: "Expense Summary",
                path: "/accounting/reports/expense-summary",
              },
              {
                label: "Income VS Expense",
                path: "/accounting/reports/income-vs-expense",
              },
              {
                label: "Tax Summary",
                path: "/accounting/reports/tax-summary",
              },
            ],
          },
        ],
      },
      {
        label: "HRM",
        path: "/hrm",
        children: [
          {
            label: "Overview",
            path: "/hrm/overview",
          },
          {
            label: "Reports",
            path: "/hrm/reports",
            children: [
              {
                label: "Payroll",
                path: "/hrm/reports/payroll",
              },
              {
                label: "Leave",
                path: "/hrm/reports/leave",
              },
              {
                label: "Month Attendance",
                path: "/hrm/reports/month-attendance",
              },
            ],
          },
        ],
      },
      {
        label: "CRM",
        path: "/crm",
        children: [
          {
            label: "Overview",
            path: "/crm/overview",
          },
          {
            label: "Reports",
            path: "/crm/reports",
            children: [
              {
                label: "Lead",
                path: "/crm/reports/lead",
              },
              {
                label: "Deal",
                path: "/crm/reports/deal",
              },
            ],
          },
        ],
      },
      {
        label: "Project",
        path: "/project",
      },
      {
        label: "POS",
        path: "/pos",
        children: [
          {
            label: "Overview",
            path: "/pos/overview",
          },
          {
            label: "Reports",
            path: "/pos/reports",
            children: [
              {
                label: "Warehouse Report",
                path: "/pos/reports/warehouse-report",
              },
              {
                label: "Purchase Daily/Monthly Report",
                path: "/pos/reports/purchase-daily-monthly-report",
              },
              {
                label: "POS Daily/Monthly Report",
                path: "/pos/reports/pos-daily-monthly-report",
              },
              {
                label: "POS Vs Purchase Report",
                path: "/pos/reports/pos-vs-purchase-report",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "HRM System",
    path: "/",
    icon: Person,
    children: [
      {
        label: "Employee Setup",
        path: "/hrm/employee-setup",
      },
      {
        label: "Payroll Setup",
        path: "/payroll",
        children: [
          {
            label: "Set Salary",
            path: "/hrm/payroll/set-salary",
          },
          {
            label: "Payslip",
            path: "/hrm/payroll/payslip",
          },
        ],
      },
      {
        label: "Leave Management Setup",
        path: "",
        children: [
          {
            label: "Manage Leave",
            path: "/hrm/manage-leave",
          },
          {
            label: "Attendance",
            path: "",
            children: [
              {
                label: "Mark Attendance",
                path: "/hrm/mark-attendance",
              },
              {
                label: "Bulk Attendance",
                path: "/hrm/bulk-attendance",
              },
            ],
          },
          {
            label: "Biometric Attendance",
            path: "/hrm/biometric-attendance",
          },
        ],
      },
      {
        label: "Performance Setup",
        path: "",
        children: [
          {
            label: "Indicator",
            path: "/hrm/indicator",
          },
          {
            label: "Appraisal",
            path: "/hrm/appraisal",
          },
          {
            label: "Goal Tracking",
            path: "/hrm/goal-tracking",
          },
        ],
      },
      {
        label: "Training Setup",
        path: "",
        children: [
          {
            label: "Training List",
            path: "/hrm/training-list",
          },
          {
            label: "Trainer",
            path: "/hrm/trainer",
          },
        ],
      },
      {
        label: "Recruitment Setup",
        path: "",
        children: [
          {
            label: "Job",
            path: "/hrm/job",
          },
          {
            label: "Job Create",
            path: "/hrm/job-create",
          },
          {
            label: "Job Application",
            path: "/hrm/job-application",
          },
          {
            label: "Job Candidate",
            path: "/hrm/job-candidate",
          },
          {
            label: "Job On-boarding",
            path: "/hrm/job-on-boarding",
          },
          {
            label: "Custom Question",
            path: "/hrm/current-question",
          },

          {
            label: "Interview Schedule",
            path: "/hrm/interview-schedule",
          },
          {
            label: "Career",
            path: "/hrm/career",
          },
        ],
      },
      {
        label: "HR Admin Setup",
        path: "",
        children: [
          {
            label: "Award",
            path: "/hrm/award",
          },
          {
            label: "Transfer",
            path: "/hrm/transfer",
          },
          {
            label: "Resignation",
            path: "/hrm/resignation",
          },
          {
            label: "Trip",
            path: "/hrm/trip",
          },
          {
            label: "Promotion",
            path: "/hrm/promotion",
          },
          {
            label: "Complaints",
            path: "/hrm/complaints",
          },
          {
            label: "Warning",
            path: "/hrm/warning",
          },
          {
            label: "Termination",
            path: "/hrm/termination",
          },
          {
            label: "Announcement",
            path: "/hrm/announcement",
          },
          {
            label: "Holidays",
            path: "/hrm/holidays",
          },
        ],
      },
      {
        label: "Event Setup",
        path: "/hrm/event-setup",
      },
      {
        label: "Meeting",
        path: "/hrm/meeting",
      },
      {
        label: "Employees Asset Setup",
        path: "/hrm/employees-asset-setup",
      },
      {
        label: "Document Setup",
        path: "/hrm/document-setup",
      },
      {
        label: "Company Policy",
        path: "/hrm/company-policy",
      },
      {
        label: "HRM System Setup",
        path: "/hrm/hrm-system-setup",
      },
    ],
  },
  {
    label: "Accounting System",
    path: "",
    icon: AccountBalance,
    children: [
      {
        label: "Banking",
        path: "",
        children: [
          {
            label: "Account",
            path: "/accounting/banking/account",
          },
          {
            label: "Transfer",
            path: "/accounting/banking/transfer",
          },
        ],
      },
      {
        label: "Sales",
        path: "",
        children: [
          {
            label: "Customer",
            path: "/accounting/sales/customer",
          },
          {
            label: "Estimate",
            path: "/accounting/sales/estimate",
          },
          {
            label: "Invoice",
            path: "/accounting/sales/invoice",
          },
          {
            label: "Revenue",
            path: "/accounting/sales/revenue",
          },
          {
            label: "Credit Note",
            path: "/accounting/sales/credit-note",
          },
        ],
      },
      {
        label: "Purchase",
        path: "",
        children: [
          {
            label: "Supplier",
            path: "/accounting/purchase/supplier",
          },
          {
            label: "Bill",
            path: "/accounting/purchase/bill",
          },
          {
            label: "Expense",
            path: "/accounting/purchase/expense",
          },
          {
            label: "Payment",
            path: "/accounting/purchase/payment",
          },
          {
            label: "Debit Note",
            path: "/accounting/purchase/debit-note",
          },
        ],
      },
      {
        label: "Double Entry",
        path: "",
        children: [
          {
            label: "Chart of Accounts",
            path: "/accounting/double-entry/chart-of-accounts",
          },
          {
            label: "Journal Account",
            path: "/accounting/double-entry/journal-account",
          },
          {
            label: "Ledger Summary",
            path: "/accounting/double-entry/ledger-summary",
          },
          {
            label: "Balance Sheet",
            path: "/accounting/double-entry/balance-sheet",
          },
          {
            label: "Profit & Loss",
            path: "/accounting/double-entry/profit-and-loss",
          },
          {
            label: "Trial Balance",
            path: "/accounting/double-entry/trial-balance",
          },
        ],
      },
      {
        label: "Budget Planner",
        path: "/accounting/budget-planner",
      },
      {
        label: "Financial Goal",
        path: "/accounting/financial-goal",
      },
      {
        label: "Accounting Setup",
        path: "/accounting/accounting-setup",
      },
      {
        label: "Print Settings",
        path: "/accounting/print-settings",
      },
    ],
  },
  {
    label: "CRM System",
    icon: SettingsSuggest,
    link: "",
    children: [
      {
        label: "Leads",
        path: "/crm/leads",
      },
      {
        label: "Deals",
        path: "/crm/deals",
      },
      {
        label: "Form Builder",
        path: "/crm/form-builder",
      },
      {
        label: "Contract",
        path: "/crm/contract",
      },
      {
        label: "CRM System Setup",
        path: "/crm/crm-system-setup",
      },
    ],
  },
  {
    label: "Project System",
    icon: AccountTree,
    link: "",
    children: [
      {
        label: "Projects",
        path: "/project/projects",
      },
      {
        label: "Tasks",
        path: "/project/tasks",
      },
      {
        label: "Timesheet",
        path: "/project/timesheet",
      },
      {
        label: "Bug",
        path: "/project/bug",
      },
      {
        label: "Task Calendar",
        path: "/project/task-calendar",
      },
      {
        label: "Tracker",
        path: "/project/tracker",
      },
      {
        label: "Project Report",
        path: "/project/project-report",
      },
      {
        label: "Project System Setup",
        path: "",
        children: [
          {
            label: "Project Task Stages",
            path: "/project/project-task-stages",
          },
          {
            label: "Bug Status",
            path: "/project/bug-status",
          },
        ],
      },
    ],
  },
  {
    label: "User Management",
    icon: Group,
    link: "",
    children: [
      {
        label: "User",
        path: "/user/user",
      },
      {
        label: "Role",
        path: "/user/role",
      },
      {
        label: "Client",
        path: "/user/client",
      },
    ],
  },
  {
    label: "Products System",
    icon: ProductionQuantityLimits,
    link: "",
    children: [
      {
        label: "Product & Services",
        path: "/products/product-and-services",
      },
      {
        label: "Product Stock",
        path: "/products/product-stock",
      },
    ],
  },
  // {
  //   label: "POS System",
  //   icon: MdLocalOffer,
  //   link: "",
  //   children: [
  //     {
  //       label: "Warehouse",
  //       path: "/pos/warehouse",
  //     },
  //     {
  //       label: "Purchase",
  //       path: "/pos/purchase",
  //     },
  //     {
  //       label: "Quotation",
  //       path: "/pos/quotation",
  //     },
  //     {
  //       label: "Add POS",
  //       path: "/pos/add-pos",
  //     },
  //     {
  //       label: "POS",
  //       path: "/pos/pos",
  //     },
  //     {
  //       label: "Transfer",
  //       path: "/pos/transfer",
  //     },
  //     {
  //       label: "Print Barcode",
  //       path: "/pos/print-barcode",
  //     },
  //     {
  //       label: "Print Settings",
  //       path: "/pos/print-settings",
  //     },
  //   ],
  // },
  {
    label: "Support System",
    icon: SupportAgent,
    path: "/support",
  },
  // {
  //   label: "Meeting",
  //   icon: MdVideoCall,
  //   path: "/zoom-meeting",
  // },
  // {
  //   label: "Notification Template",
  //   icon: MdNotifications,
  //   path: "/notification",
  // },
  {
    label: "Settings",
    icon: Settings,
    path: "",
    children: [
      {
        label: "System Settings",
        path: "/settings/system-settings",
      },
      // {
      //   label: "Setup Subscription Plan",
      //   path: "/settings/setup-subscription-plan",
      // },
      // {
      //   label: "Referral Program",
      //   path: "/settings/referral-program",
      // },
      // {
      //   label: "Order",
      //   path: "/settings/order",
      // },
    ],
  },
];
