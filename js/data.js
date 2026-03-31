/* ═══════════════════════════════════════════
   ComplianceOS — Mock Data Layer
   All dashboard content sourced from here for demo purposes.
   ═══════════════════════════════════════════ */

const defaultMockData = {

  company: {
    name: "Acme Industrie GmbH",
    size: "251-1000",
    country: "DE",
    sector: "Energy",
    reportingYear: 2025
  },

  stats: {
    overallScore: 73,
    overallTrend: "+5",       // % change this month
    activeFrameworks: 3,
    totalFrameworks: 5,
    openTasks: 12,
    overdueTasks: 3,
    reportsDue: 2,
    nextReportName: "CSRD Q1",
    nextReportDays: 12
  },

  frameworks: [
    {
      id: "csrd",
      score: 78,
      status: "on_track",
      scoreColor: "#10B981",
      dotColor: "bg-emerald-400",
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-700",
      initial: "C"
    },
    {
      id: "aifmd",
      score: 65,
      status: "at_risk",
      scoreColor: "#F59E0B",
      dotColor: "bg-amber-400",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-700",
      initial: "A"
    },
    {
      id: "nis2",
      score: 71,
      status: "on_track",
      scoreColor: "#10B981",
      dotColor: "bg-emerald-400",
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-700",
      initial: "N"
    }
  ],

  trendChart: {
    labelKeys: ["month_jan", "month_feb", "month_mar", "month_apr", "month_may", "month_jun"],
    values: [45, 52, 58, 65, 70, 73]
  },

  emissions: {
    scope1: { value: 1240, total: 5000,  color: "#10B981", changePercent: -3.2 },
    scope2: { value: 3890, total: 5000,  color: "#3B82F6", changePercent: -8.1 },
    scope3: { value: 12450, total: 15000, color: "#F59E0B", changePercent: -9.8 },
    totalValue: 17580,
    totalChangePercent: -8.3
  },

  tasks: [
    {
      id: 1,
      titleKey: "task_s1_workforce",
      framework: "csrd",
      dueDate: "2026-04-02",
      status: "overdue"
    },
    {
      id: 2,
      titleKey: "task_annex4",
      framework: "aifmd",
      dueDate: "2026-04-15",
      status: "in_progress"
    },
    {
      id: 3,
      titleKey: "task_incident_plan",
      framework: "nis2",
      dueDate: "2026-04-20",
      status: "in_progress"
    },
    {
      id: 4,
      titleKey: "task_scope3_valid",
      framework: "csrd",
      dueDate: "2026-04-30",
      status: "pending"
    },
    {
      id: 5,
      titleKey: "task_supply_chain",
      framework: "nis2",
      dueDate: "2026-05-15",
      status: "on_track"
    },
    {
      id: 6,
      titleKey: "task_esrs_e1",
      framework: "csrd",
      dueDate: "2026-05-20",
      status: "pending"
    },
    {
      id: 7,
      titleKey: "task_leverage_calc",
      framework: "aifmd",
      dueDate: "2026-05-31",
      status: "on_track"
    }
  ],

  activity: [
    {
      key: "act_scope2_updated",
      detailKey: "act_scope2_detail",
      framework: "csrd",
      type: "success",
      timeKey: "time_2h"
    },
    {
      key: "act_nis2_incident",
      detailKey: "act_nis2_detail",
      framework: "nis2",
      type: "info",
      timeKey: "time_5h"
    },
    {
      key: "act_aifmd_leverage",
      detailKey: "act_leverage_detail",
      framework: "aifmd",
      type: "warning",
      timeKey: "time_yesterday"
    },
    {
      key: "act_suppliers",
      detailKey: "act_suppliers_detail",
      framework: "csrd",
      type: "success",
      timeKey: "time_2d"
    },
    {
      key: "act_materiality",
      detailKey: "act_material_detail",
      framework: "csrd",
      type: "success",
      timeKey: "time_3d"
    }
  ],

  dataSources: [
    {
      id: "sap",
      nameKey: "ds_sap",
      statusKey: "ds_status_connected",
      statusType: "success",
      icon: "server"
    },
    {
      id: "excel",
      nameKey: "ds_excel",
      statusKey: "ds_status_files3",
      statusType: "success",
      icon: "table"
    },
    {
      id: "api",
      nameKey: "ds_api",
      statusKey: "ds_status_active",
      statusType: "pulse",
      icon: "code"
    },
    {
      id: "manual",
      nameKey: "ds_manual",
      statusKey: "ds_status_pending2",
      statusType: "warning",
      icon: "edit"
    },
    {
      id: "pdf",
      nameKey: "ds_pdf",
      statusKey: "ds_status_processing",
      statusType: "info",
      icon: "file"
    }
  ],

  notifications: [
    {
      id: 1,
      type: "warning",
      titleKey: "notif_leverage_title",
      bodyKey: "notif_leverage_body",
      timeKey: "time_5h",
      read: false
    },
    {
      id: 2,
      type: "info",
      titleKey: "notif_scope2_title",
      bodyKey: "notif_scope2_body",
      timeKey: "time_2h",
      read: false
    },
    {
      id: 3,
      type: "success",
      titleKey: "notif_materiality_title",
      bodyKey: "notif_materiality_body",
      timeKey: "time_3d",
      read: true
    }
  ]
};

window.saveMockData = function() {
  localStorage.setItem('compliance_os_mock', JSON.stringify(window.MOCK));
};

window.loadMockData = function() {
  const stored = localStorage.getItem('compliance_os_mock');
  if (stored) {
    try {
      window.MOCK = JSON.parse(stored);
    } catch(e) {
      window.MOCK = JSON.parse(JSON.stringify(defaultMockData));
      window.saveMockData();
    }
  } else {
    window.MOCK = JSON.parse(JSON.stringify(defaultMockData));
    window.saveMockData();
  }
};

window.loadMockData();
