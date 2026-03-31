/* ═══════════════════════════════════════════
   ComplianceOS — i18n Module
   Supports: English (en), German (de), French (fr)
   ═══════════════════════════════════════════ */

const LOCALES = {

  /* ── English ── */
  en: {
    // Nav
    nav_home: "Home",
    nav_features: "Features",
    nav_frameworks: "Frameworks",
    nav_about: "About",
    nav_contact: "Contact",
    nav_dashboard: "Dashboard",
    nav_get_started: "Get Started",
    nav_frameworks_dropdown_csrd: "Sustainability Reporting",
    nav_frameworks_dropdown_aifmd: "Investment Fund Regulation",
    nav_frameworks_dropdown_nis2: "Cybersecurity Compliance",

    // Footer
    footer_product: "Product",
    footer_frameworks: "Frameworks",
    footer_company: "Company",
    footer_features: "Features",
    footer_pricing: "Pricing",
    footer_documentation: "Documentation",
    footer_about: "About",
    footer_contact: "Contact",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_tagline: "AI-powered regulatory compliance for EU enterprises. Reduce lead time by 80%.",
    footer_copyright: "© 2026 ComplianceOS. All rights reserved.",
    footer_built: "Built in Vienna, Austria",

    // CTA Banner
    cta_headline: "Ready to Simplify Compliance?",
    cta_subtext: "Join hundreds of companies automating their EU regulatory compliance. Get started in minutes.",
    cta_primary: "Get Started Free",
    cta_secondary: "Book a Demo",

    // Framework names
    fw_csrd: "CSRD",
    fw_aifmd: "AIFMD",
    fw_nis2: "NIS2",
    fw_gdpr: "GDPR",
    fw_csdd: "CSDD",

    // Dashboard sidebar
    db_main: "Main",
    db_dashboard: "Dashboard",
    db_frameworks: "Frameworks",
    db_data_sources: "Data Sources",
    db_reports: "Reports",
    db_assessments: "Assessments",
    db_settings: "Settings",

    // Dashboard header
    db_title: "Dashboard",
    db_last_updated: "Last updated: Today, 10:42 AM",
    db_search: "Search...",
    db_upgrade: "Upgrade Plan",
    db_notifications: "Notifications",
    db_mark_all_read: "Mark all read",
    db_no_notifications: "No new notifications",

    // Stat cards
    stat_overall_score: "Overall Score",
    stat_good: "Good",
    stat_active_frameworks: "Active Frameworks",
    stat_open_tasks: "Open Tasks",
    stat_reports_due: "Reports Due",
    stat_overdue: "overdue",
    stat_due_in: "Due in",
    stat_days: "days",
    stat_this_month: "this month",

    // Charts
    chart_trend_title: "Compliance Trend",
    chart_trend_subtitle: "Last 6 months",
    chart_framework_status: "Framework Status",
    chart_available: "Available to activate",
    chart_compliance_score_legend: "Compliance Score",

    // Months (for chart labels)
    month_jan: "Jan",
    month_feb: "Feb",
    month_mar: "Mar",
    month_apr: "Apr",
    month_may: "May",
    month_jun: "Jun",
    month_jul: "Jul",
    month_aug: "Aug",
    month_sep: "Sep",
    month_oct: "Oct",
    month_nov: "Nov",
    month_dec: "Dec",

    // Framework statuses
    status_on_track: "On Track",
    status_at_risk: "At Risk",
    status_overdue: "Overdue",
    status_in_progress: "In Progress",
    status_pending: "Pending",
    status_complete: "Complete",

    // Tasks table
    tasks_title: "Tasks Due",
    tasks_open: "open",
    tasks_col_task: "Task",
    tasks_col_framework: "Framework",
    tasks_col_due: "Due",
    tasks_col_status: "Status",
    tasks_filter_all: "All",
    task_s1_workforce: "Collect S1 workforce data",
    task_annex4: "Annex IV Q1 filing",
    task_incident_plan: "Update incident response plan",
    task_scope3_valid: "Scope 3 emissions validation",
    task_supply_chain: "Supply chain vendor assessment",
    task_esrs_e1: "ESRS E1 climate target setting",
    task_leverage_calc: "Leverage calculation review",

    // Activity feed
    activity_title: "Recent Activity",
    act_scope2_updated: "CSRD Scope 2 data updated",
    act_scope2_detail: "Electricity consumption data imported from ERP system",
    act_nis2_incident: "NIS2 incident report filed",
    act_nis2_detail: "Early warning submitted to auditor",
    act_aifmd_leverage: "AIFMD leverage limit warning",
    act_leverage_detail: "Fund A approaching 300% gross leverage",
    act_suppliers: "3 suppliers onboarded",
    act_suppliers_detail: "Scope 3 supply chain data now available",
    act_materiality: "Materiality assessment completed",
    act_material_detail: "CSRD double materiality signed off",

    // Time
    time_2h: "2h ago",
    time_5h: "5h ago",
    time_yesterday: "Yesterday",
    time_2d: "2 days ago",
    time_3d: "3 days ago",

    // Emissions
    emissions_title: "Emissions Overview",
    emissions_subtitle: "GHG Protocol — FY 2025 data",
    emissions_scope1: "Scope 1",
    emissions_scope2: "Scope 2",
    emissions_scope3: "Scope 3",
    emissions_scope1_sub: "Direct emissions",
    emissions_scope2_sub: "Energy indirect",
    emissions_scope3_sub: "Value chain",
    emissions_total: "Total GHG Emissions",
    emissions_vs_baseline: "vs 2024 baseline",

    // Data sources
    ds_title: "Data Sources",
    ds_add: "+ Add Source",
    ds_sap: "ERP System",
    ds_excel: "Excel Uploads",
    ds_api: "REST API",
    ds_manual: "Manual Entry",
    ds_pdf: "PDF Docs",
    ds_add_source: "Add Source",
    ds_status_connected: "Connected",
    ds_status_files3: "3 files",
    ds_status_active: "Active",
    ds_status_pending2: "2 pending",
    ds_status_processing: "Processing",

    // Notifications
    notif_title: "Notifications",
    notif_unread: "unread",
    notif_leverage_title: "AIFMD leverage warning",
    notif_leverage_body: "Fund A approaching 300% gross leverage limit",
    notif_scope2_title: "CSRD data updated",
    notif_scope2_body: "Scope 2 electricity data imported successfully",
    notif_materiality_title: "Assessment complete",
    notif_materiality_body: "Double materiality assessment signed off",

    // Theme toggle
    theme_toggle_light: "Switch to light mode",
    theme_toggle_dark: "Switch to dark mode",
  },

  /* ── German ── */
  de: {
    // Nav
    nav_home: "Startseite",
    nav_features: "Funktionen",
    nav_frameworks: "Rahmenwerke",
    nav_about: "Über uns",
    nav_contact: "Kontakt",
    nav_dashboard: "Dashboard",
    nav_get_started: "Loslegen",
    nav_frameworks_dropdown_csrd: "Nachhaltigkeitsberichterstattung",
    nav_frameworks_dropdown_aifmd: "Fondsmanagement-Regulierung",
    nav_frameworks_dropdown_nis2: "Cybersicherheits-Compliance",

    // Footer
    footer_product: "Produkt",
    footer_frameworks: "Rahmenwerke",
    footer_company: "Unternehmen",
    footer_features: "Funktionen",
    footer_pricing: "Preise",
    footer_documentation: "Dokumentation",
    footer_about: "Über uns",
    footer_contact: "Kontakt",
    footer_privacy: "Datenschutzrichtlinie",
    footer_terms: "Nutzungsbedingungen",
    footer_tagline: "KI-gestützte regulatorische Compliance für EU-Unternehmen. Reduzieren Sie die Durchlaufzeit um 80 %.",
    footer_copyright: "© 2026 ComplianceOS. Alle Rechte vorbehalten.",
    footer_built: "Entwickelt in Wien, Österreich",

    // CTA Banner
    cta_headline: "Bereit, Compliance zu vereinfachen?",
    cta_subtext: "Schließen Sie sich Hunderten von Unternehmen an, die ihre EU-Regulierungskonformität automatisieren.",
    cta_primary: "Kostenlos starten",
    cta_secondary: "Demo buchen",

    // Framework names
    fw_csrd: "CSRD",
    fw_aifmd: "AIFMD",
    fw_nis2: "NIS2",
    fw_gdpr: "DSGVO",
    fw_csdd: "CSDD",

    // Dashboard sidebar
    db_main: "Hauptmenü",
    db_dashboard: "Übersicht",
    db_frameworks: "Rahmenwerke",
    db_data_sources: "Datenquellen",
    db_reports: "Berichte",
    db_assessments: "Bewertungen",
    db_settings: "Einstellungen",

    // Dashboard header
    db_title: "Übersicht",
    db_last_updated: "Zuletzt aktualisiert: Heute, 10:42 Uhr",
    db_search: "Suchen...",
    db_upgrade: "Plan upgraden",
    db_notifications: "Benachrichtigungen",
    db_mark_all_read: "Alle als gelesen markieren",
    db_no_notifications: "Keine neuen Benachrichtigungen",

    // Stat cards
    stat_overall_score: "Gesamtbewertung",
    stat_good: "Gut",
    stat_active_frameworks: "Aktive Rahmenwerke",
    stat_open_tasks: "Offene Aufgaben",
    stat_reports_due: "Fällige Berichte",
    stat_overdue: "überfällig",
    stat_due_in: "Fällig in",
    stat_days: "Tagen",
    stat_this_month: "diesen Monat",

    // Charts
    chart_trend_title: "Compliance-Trend",
    chart_trend_subtitle: "Letzte 6 Monate",
    chart_framework_status: "Rahmenwerk-Status",
    chart_available: "Verfügbar zur Aktivierung",
    chart_compliance_score_legend: "Compliance-Score",

    // Months
    month_jan: "Jan",
    month_feb: "Feb",
    month_mar: "Mär",
    month_apr: "Apr",
    month_may: "Mai",
    month_jun: "Jun",
    month_jul: "Jul",
    month_aug: "Aug",
    month_sep: "Sep",
    month_oct: "Okt",
    month_nov: "Nov",
    month_dec: "Dez",

    // Statuses
    status_on_track: "Im Plan",
    status_at_risk: "Gefährdet",
    status_overdue: "Überfällig",
    status_in_progress: "In Bearbeitung",
    status_pending: "Ausstehend",
    status_complete: "Abgeschlossen",

    // Tasks
    tasks_title: "Fällige Aufgaben",
    tasks_open: "offen",
    tasks_col_task: "Aufgabe",
    tasks_col_framework: "Rahmenwerk",
    tasks_col_due: "Fällig",
    tasks_col_status: "Status",
    tasks_filter_all: "Alle",
    task_s1_workforce: "S1-Arbeitnehmerdaten erfassen",
    task_annex4: "Anhang-IV-Meldung Q1",
    task_incident_plan: "Notfallplan aktualisieren",
    task_scope3_valid: "Scope-3-Emissionen validieren",
    task_supply_chain: "Lieferketten-Lieferantenbewertung",
    task_esrs_e1: "ESRS E1 Klimaziel festlegen",
    task_leverage_calc: "Hebelwirkungsberechnung prüfen",

    // Activity
    activity_title: "Letzte Aktivitäten",
    act_scope2_updated: "CSRD Scope-2-Daten aktualisiert",
    act_scope2_detail: "Stromverbrauchsdaten aus ERP importiert",
    act_nis2_incident: "NIS2-Vorfallbericht eingereicht",
    act_nis2_detail: "Frühwarnung an Prüfer übermittelt",
    act_aifmd_leverage: "AIFMD-Hebelwarnmeldung",
    act_leverage_detail: "Fonds A nähert sich 300 % Bruttohebelwirkung",
    act_suppliers: "3 Lieferanten eingebunden",
    act_suppliers_detail: "Scope-3-Lieferkettendaten verfügbar",
    act_materiality: "Wesentlichkeitsbewertung abgeschlossen",
    act_material_detail: "CSRD doppelte Wesentlichkeit freigegeben",

    // Time
    time_2h: "vor 2 Std.",
    time_5h: "vor 5 Std.",
    time_yesterday: "Gestern",
    time_2d: "vor 2 Tagen",
    time_3d: "vor 3 Tagen",

    // Emissions
    emissions_title: "Emissionsübersicht",
    emissions_subtitle: "GHG-Protokoll — GJ 2025-Daten",
    emissions_scope1: "Scope 1",
    emissions_scope2: "Scope 2",
    emissions_scope3: "Scope 3",
    emissions_scope1_sub: "Direkte Emissionen",
    emissions_scope2_sub: "Indirekte Energie",
    emissions_scope3_sub: "Wertschöpfungskette",
    emissions_total: "Gesamte THG-Emissionen",
    emissions_vs_baseline: "vs. Basisjahr 2024",

    // Data sources
    ds_title: "Datenquellen",
    ds_add: "+ Quelle hinzufügen",
    ds_sap: "ERP System",
    ds_excel: "Excel-Uploads",
    ds_api: "REST-API",
    ds_manual: "Manuelle Eingabe",
    ds_pdf: "PDF-Dokumente",
    ds_add_source: "Quelle hinzufügen",
    ds_status_connected: "Verbunden",
    ds_status_files3: "3 Dateien",
    ds_status_active: "Aktiv",
    ds_status_pending2: "2 ausstehend",
    ds_status_processing: "Wird verarbeitet",

    // Notifications
    notif_title: "Benachrichtigungen",
    notif_unread: "ungelesen",
    notif_leverage_title: "AIFMD-Hebelwarnung",
    notif_leverage_body: "Fonds A nähert sich dem 300 %-Bruttohebelgrenze",
    notif_scope2_title: "CSRD-Daten aktualisiert",
    notif_scope2_body: "Scope-2-Stromdaten erfolgreich importiert",
    notif_materiality_title: "Bewertung abgeschlossen",
    notif_materiality_body: "Doppelte Wesentlichkeitsbewertung freigegeben",

    // Theme
    theme_toggle_light: "Zum hellen Modus wechseln",
    theme_toggle_dark: "Zum dunklen Modus wechseln",
  },

  /* ── French ── */
  fr: {
    // Nav
    nav_home: "Accueil",
    nav_features: "Fonctionnalités",
    nav_frameworks: "Cadres",
    nav_about: "À propos",
    nav_contact: "Contact",
    nav_dashboard: "Tableau de bord",
    nav_get_started: "Commencer",
    nav_frameworks_dropdown_csrd: "Reporting de durabilité",
    nav_frameworks_dropdown_aifmd: "Réglementation des fonds",
    nav_frameworks_dropdown_nis2: "Conformité cybersécurité",

    // Footer
    footer_product: "Produit",
    footer_frameworks: "Cadres",
    footer_company: "Entreprise",
    footer_features: "Fonctionnalités",
    footer_pricing: "Tarifs",
    footer_documentation: "Documentation",
    footer_about: "À propos",
    footer_contact: "Contact",
    footer_privacy: "Politique de confidentialité",
    footer_terms: "Conditions d'utilisation",
    footer_tagline: "Conformité réglementaire alimentée par IA pour les entreprises européennes. Réduisez les délais de 80 %.",
    footer_copyright: "© 2026 ComplianceOS. Tous droits réservés.",
    footer_built: "Conçu à Vienne, Autriche",

    // CTA Banner
    cta_headline: "Prêt à simplifier la conformité ?",
    cta_subtext: "Rejoignez des centaines d'entreprises automatisant leur conformité réglementaire européenne.",
    cta_primary: "Démarrer gratuitement",
    cta_secondary: "Réserver une démo",

    // Framework names
    fw_csrd: "CSRD",
    fw_aifmd: "AIFMD",
    fw_nis2: "NIS2",
    fw_gdpr: "RGPD",
    fw_csdd: "CSDD",

    // Dashboard sidebar
    db_main: "Principal",
    db_dashboard: "Tableau de bord",
    db_frameworks: "Cadres",
    db_data_sources: "Sources de données",
    db_reports: "Rapports",
    db_assessments: "Évaluations",
    db_settings: "Paramètres",

    // Dashboard header
    db_title: "Tableau de bord",
    db_last_updated: "Dernière mise à jour : Aujourd'hui, 10:42",
    db_search: "Rechercher...",
    db_upgrade: "Mettre à niveau",
    db_notifications: "Notifications",
    db_mark_all_read: "Tout marquer comme lu",
    db_no_notifications: "Aucune nouvelle notification",

    // Stat cards
    stat_overall_score: "Score global",
    stat_good: "Bon",
    stat_active_frameworks: "Cadres actifs",
    stat_open_tasks: "Tâches ouvertes",
    stat_reports_due: "Rapports à rendre",
    stat_overdue: "en retard",
    stat_due_in: "Échéance dans",
    stat_days: "jours",
    stat_this_month: "ce mois-ci",

    // Charts
    chart_trend_title: "Tendance de conformité",
    chart_trend_subtitle: "6 derniers mois",
    chart_framework_status: "Statut des cadres",
    chart_available: "Disponibles à activer",
    chart_compliance_score_legend: "Score de conformité",

    // Months
    month_jan: "Jan",
    month_feb: "Fév",
    month_mar: "Mar",
    month_apr: "Avr",
    month_may: "Mai",
    month_jun: "Juin",
    month_jul: "Juil",
    month_aug: "Août",
    month_sep: "Sep",
    month_oct: "Oct",
    month_nov: "Nov",
    month_dec: "Déc",

    // Statuses
    status_on_track: "Dans les délais",
    status_at_risk: "À risque",
    status_overdue: "En retard",
    status_in_progress: "En cours",
    status_pending: "En attente",
    status_complete: "Terminé",

    // Tasks
    tasks_title: "Tâches à venir",
    tasks_open: "ouvertes",
    tasks_col_task: "Tâche",
    tasks_col_framework: "Cadre",
    tasks_col_due: "Échéance",
    tasks_col_status: "Statut",
    tasks_filter_all: "Tout",
    task_s1_workforce: "Collecter les données S1 sur la main-d'œuvre",
    task_annex4: "Dépôt Annexe IV T1",
    task_incident_plan: "Mettre à jour le plan de réponse aux incidents",
    task_scope3_valid: "Validation des émissions Scope 3",
    task_supply_chain: "Évaluation des fournisseurs",
    task_esrs_e1: "Définir les objectifs climatiques ESRS E1",
    task_leverage_calc: "Révision du calcul de levier",

    // Activity
    activity_title: "Activité récente",
    act_scope2_updated: "Données CSRD Scope 2 mises à jour",
    act_scope2_detail: "Données de consommation d'électricité importées depuis le système ERP",
    act_nis2_incident: "Rapport d'incident NIS2 déposé",
    act_nis2_detail: "Alerte précoce soumise à l'autorité",
    act_aifmd_leverage: "Avertissement de levier AIFMD",
    act_leverage_detail: "Le fonds A approche 300 % de levier brut",
    act_suppliers: "3 fournisseurs intégrés",
    act_suppliers_detail: "Données de la chaîne d'approvisionnement Scope 3 disponibles",
    act_materiality: "Évaluation de matérialité terminée",
    act_material_detail: "Double matérialité CSRD validée",

    // Time
    time_2h: "il y a 2h",
    time_5h: "il y a 5h",
    time_yesterday: "Hier",
    time_2d: "il y a 2 jours",
    time_3d: "il y a 3 jours",

    // Emissions
    emissions_title: "Aperçu des émissions",
    emissions_subtitle: "Protocole GES — données EF 2025",
    emissions_scope1: "Scope 1",
    emissions_scope2: "Scope 2",
    emissions_scope3: "Scope 3",
    emissions_scope1_sub: "Émissions directes",
    emissions_scope2_sub: "Énergie indirecte",
    emissions_scope3_sub: "Chaîne de valeur",
    emissions_total: "Émissions GES totales",
    emissions_vs_baseline: "vs référence 2024",

    // Data sources
    ds_title: "Sources de données",
    ds_add: "+ Ajouter une source",
    ds_sap: "Système ERP",
    ds_excel: "Fichiers Excel",
    ds_api: "API REST",
    ds_manual: "Saisie manuelle",
    ds_pdf: "Documents PDF",
    ds_add_source: "Ajouter une source",
    ds_status_connected: "Connecté",
    ds_status_files3: "3 fichiers",
    ds_status_active: "Actif",
    ds_status_pending2: "2 en attente",
    ds_status_processing: "En traitement",

    // Notifications
    notif_title: "Notifications",
    notif_unread: "non lues",
    notif_leverage_title: "Alerte de levier AIFMD",
    notif_leverage_body: "Le fonds A approche la limite de 300 % de levier brut",
    notif_scope2_title: "Données CSRD mises à jour",
    notif_scope2_body: "Données électricité Scope 2 importées avec succès",
    notif_materiality_title: "Évaluation terminée",
    notif_materiality_body: "Évaluation de double matérialité validée",

    // Theme
    theme_toggle_light: "Passer en mode clair",
    theme_toggle_dark: "Passer en mode sombre",
  }
};

/* ── Translation helper ── */
function t(key) {
  const lang = localStorage.getItem('locale') || 'en';
  return (LOCALES[lang] && LOCALES[lang][key]) || LOCALES.en[key] || key;
}

/* ── Set locale (reloads page to re-render all JS-injected components) ── */
function setLocale(lang) {
  if (!LOCALES[lang]) return;
  localStorage.setItem('locale', lang);
  location.reload();
}

/* ── Current locale ── */
function getLocale() {
  return localStorage.getItem('locale') || 'en';
}
