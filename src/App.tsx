/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  BarChart3, 
  Wallet, 
  FileText, 
  Settings, 
  Plus, 
  HelpCircle, 
  LogOut, 
  Bell, 
  History, 
  User, 
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  ArrowUpDown,
  XCircle,
  Sun,
  Moon,
  Upload,
  File,
  Share2,
  Printer,
  Download,
  Eye,
  CheckCircle2,
  Clock,
  Lock,
  Loader2,
  MoreHorizontal,
  Zap,
  Fuel,
  Gem,
  Check,
  Building2,
  Shield,
  ShieldCheck,
  AlertCircle,
  AlertTriangle,
  Menu,
  X,
  Calendar,
  Filter,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  LineChart,
  Activity,
  ArrowLeft,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie
} from 'recharts';
import { cn } from './lib/utils';

// --- Constants & Types ---

const formatCurrency = (amount: number, currency: string = 'USD', locale: string = 'es-ES') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0
  }).format(amount);
};

const TRANSLATIONS = {
  es: {
    dashboard: "Dashboard",
    markets: "Mercados",
    settlements: "Pagos y Cobros",
    documents: "Documentos",
    companies: "Empresas",
    searchPlaceholder: "Buscar empresas, operaciones, documentos...",
    newMatch: "CREAR NUEVO MATCH",
    totalVolume: "Volumen Total Negociado",
    closedOps: "Operaciones Cerradas",
    estCommissions: "Comisiones Estimadas",
    recentActivity: "Actividad Reciente",
    pendingListings: "Listings Pendientes",
    manageCompanies: "Gestión de Empresas",
    analyze: "Analizar",
    operate: "Operar",
    buy: "Compra",
    sell: "Venta",
    confirm: "Confirmar Operación",
    status: "Estado",
    role: "Rol",
    users: "Usuarios",
    active: "Activo",
    inactive: "Inactivo",
    admin: "Administrador",
    operator: "Operador",
    viewer: "Consultor",
    reports: "Reportes",
    settings: "Configuración",
    operations: "Operaciones",
    support: "Soporte",
    logout: "Cerrar Sesión",
    back: "Volver",
    inviteCompany: "Invitar Empresa",
    companyName: "Nombre de la Institución",
    contactEmail: "Correo Electrónico de Contacto",
    mainSector: "Sector Principal",
    cancel: "Cancelar",
    sendInvitation: "Enviar Invitación",
    totalCompanies: "Total Empresas",
    kycPending: "KYC Pendiente",
    transactionVolume: "Volumen de Transacciones",
    filterByStatus: "Filtrar por Estado",
    marketSector: "Sector de Mercado",
    showing: "Mostrando",
    of: "de",
    institutions: "instituciones",
    viewUsers: "Ver Usuarios",
    userManagement: "Gestión de Usuarios",
    addUser: "Agregar Usuario",
    allUsers: "Todos los Usuarios",
    permissions: "Permisos",
    lastAccess: "Último Acceso",
    brokerDashboard: "Dashboard del Broker",
    consolidatedView: "Vista consolidada de operaciones y flujo de red corecommodities.",
    matchingPipeline: "Pipeline de Matching",
    proposed: "PROPUESTO",
    negotiation: "NEGOCIACIÓN",
    documentation: "DOCUMENTACIÓN",
    viewAll: "VER TODOS",
    auditLog: "Registro de Auditoría",
    complianceSummary: "Resumen de Cumplimiento",
    marketMonitor: "Monitor de Mercados",
    realTimePrices: "Precios en tiempo real y tendencias globales de commodities.",
    settlementDetails: "Detalles de Pago",
    dateRange: "Rango de Fechas",
    search: "Buscar",
    export: "Exportar",
    profile: "Perfil",
    notifications: "Notificaciones",
    noNotifications: "No hay notificaciones",
    markAsRead: "Marcar como leído",
    security: "Seguridad",
    saveChanges: "Guardar Cambios",
    totalTradedVolume: "Volumen Total Negociado",
    vsLastMonth: "vs. mes anterior",
    closedOperations: "Operaciones Cerradas",
    thisWeek: "esta semana",
    estimatedCommissions: "Comisiones Estimadas",
    projectedPipeline: "Pipeline Proyectado",
    reportsAndAnalytics: "Reportes y Analíticas",
    performanceVisualization: "Visualización de rendimiento y métricas operativas de la red.",
    tradingVolume: "Volumen de Operaciones (USD M)",
    categoryDistribution: "Distribución por Categoría",
    totalNetwork: "Total Red",
    generateCustomReport: "Generar Reporte Personalizado",
    reportParamsDesc: "Selecciona los parámetros y el rango de fechas para obtener un análisis detallado de tus operaciones y comisiones.",
    configureReport: "Configurar Reporte",
    systemSettings: "Configuración del Sistema",
    manageProfileDesc: "Administra tu perfil, seguridad y preferencias de la terminal.",
    userProfile: "Perfil de Usuario",
    fullName: "Nombre Completo",
    institutionalEmail: "Correo Institucional",
    jobTitle: "Cargo / Rol",
    timezone: "Zona Horaria",
    securityAndAccess: "Seguridad y Acceso",
    twoFactorAuth: "Autenticación de Dos Factores",
    activeSession: "Sesión Activa",
    lastLogin: "Último Inicio de Sesión",
    changePassword: "Cambiar Contraseña",
    connectedDevices: "Dispositivos Conectados",
    jan: "Ene", feb: "Feb", mar: "Mar", apr: "Abr", may: "May", jun: "Jun",
    metals: "Metales", energy: "Energía", agriculture: "Agrícolas", logistics: "Logística",
    client: "Cliente", amount: "Monto", date: "Fecha", type: "Tipo", bank: "Banco", ref: "Referencia", fee: "Comisión", method: "Método",
    completed: "Completado", pending: "Pendiente", inProcess: "En Proceso",
    payment: "Pago", collection: "Cobro",
    newOperation: "Nueva Operación",
    quantity: "Cantidad",
    targetPrice: "Precio Objetivo",
    createListing: "Crear Listing",
    confirmExecution: "Confirmar Ejecución",
    executionDesc: "¿Está seguro de que desea ejecutar la orden de mercado actual? Esta acción es irreversible.",
    executing: "Ejecutando...",
    moduleInDevelopment: "Módulo en Desarrollo",
    comingSoon: "Esta sección estará disponible próximamente en la terminal.",
    view: "Ver",
    all: "Todo",
    companyInfo: "Información de la Empresa",
    legalName: "Razón Social",
    taxId: "ID Fiscal / RUT",
    address: "Dirección",
    sectors: "Sectores",
    register: "Registrarse",
    createAccount: "Crear Cuenta",
    alreadyHaveAccount: "¿Ya tienes una cuenta?",
    logIn: "Iniciar Sesión",
    bankDetails: "Detalles Bancarios",
    referenceNumber: "Número de Referencia",
    beneficiary: "Beneficiario",
    swiftBic: "SWIFT/BIC",
    accountNumber: "Número de Cuenta",
    complianceStatus: "Estado de Cumplimiento",
    auditTrail: "Rastro de Auditoría",
    uploadDocument: "Subir Documento",
    actions: "Acciones",
    downloadReceipt: "Descargar Comprobante",
    confirmExecutionDesc: "¿Está seguro de que desea ejecutar la orden de mercado actual? Esta acción es irreversible y se registrará en el audit trail.",
    commodity: "Commodity",
    copperGradeA: "Cobre Grado A",
    brentOil: "Petróleo Brent",
    goldBullion: "Oro Bullion",
    sectionAvailableSoon: "Esta sección estará disponible próximamente en la terminal.",
    searchByRefOrBank: "Buscar por referencia o banco",
    filterBySectors: "Filtrar por sectores",
    newPassword: "Nueva Contraseña",
    confirmPassword: "Confirmar Contraseña",
    requestVideoConf: "Solicitar Videoconferencia",
    sendProposal: "Enviar Propuesta",
    videoConfRequested: "Videoconferencia Solicitada",
    proposalSent: "Propuesta Enviada",
    passwordChanged: "Contraseña cambiada exitosamente",
    filterByType: "Filtrar por Tipo",
    associatedDocuments: "Documentos Asociados",
    uploadSettlementDoc: "Subir Documento de Pago",
    noDocuments: "No hay documentos asociados",
    adminRole: "Administrador",
    operatorRole: "Operador",
    viewerRole: "Consultor",
    accessDenied: "Acceso Denegado",
    insufficientPermissions: "No tienes permisos suficientes para realizar esta acción.",
    reconciliation: "Conciliación",
    reconcileAccounts: "Conciliar Cuentas",
    matchPayments: "Emparejar Pagos",
    discrepancy: "Discrepancia",
    matched: "Conciliado",
    unmatched: "Sin Conciliar",
    reconciliationSummary: "Resumen de Conciliación",
    newNotification: "Nueva Notificación",
    incomingPayments: "Pagos Entrantes",
    outgoingPayments: "Pagos Salientes",
    flagDiscrepancy: "Marcar Discrepancia",
    confirmReconciliation: "Confirmar Conciliación",
    changeSelection: "Cambiar Selección",
    expectedAmount: "Monto Esperado",
    perfectReconciliation: "Conciliación Perfecta",
    difference: "Diferencia",
    incomingPaymentsBank: "Pagos Entrantes (Bancos)",
  },
  en: {
    dashboard: "Dashboard",
    markets: "Markets",
    settlements: "Payments & Collections",
    documents: "Documents",
    companies: "Companies",
    searchPlaceholder: "Search companies, operations, documents...",
    newMatch: "CREATE NEW MATCH",
    totalVolume: "Total Traded Volume",
    closedOps: "Closed Operations",
    estCommissions: "Estimated Commissions",
    recentActivity: "Recent Activity",
    pendingListings: "Pending Listings",
    manageCompanies: "Company Management",
    analyze: "Analyze",
    operate: "Operate",
    buy: "Buy",
    sell: "Sell",
    confirm: "Confirm Operation",
    status: "Status",
    role: "Role",
    users: "Users",
    active: "Active",
    inactive: "Inactive",
    admin: "Admin",
    operator: "Operator",
    viewer: "Viewer",
    reports: "Reports",
    settings: "Settings",
    operations: "Operations",
    support: "Support",
    logout: "Log Out",
    back: "Back",
    inviteCompany: "Invite Company",
    companyName: "Institution Name",
    contactEmail: "Contact Email",
    mainSector: "Main Sector",
    cancel: "Cancel",
    sendInvitation: "Send Invitation",
    totalCompanies: "Total Companies",
    kycPending: "KYC Pending",
    transactionVolume: "Transaction Volume",
    filterByStatus: "Filter by Status",
    marketSector: "Market Sector",
    showing: "Showing",
    of: "of",
    institutions: "institutions",
    viewUsers: "View Users",
    userManagement: "User Management",
    addUser: "Add User",
    allUsers: "All Users",
    permissions: "Permissions",
    lastAccess: "Last Access",
    brokerDashboard: "Broker Dashboard",
    consolidatedView: "Consolidated view of operations and corecommodities network flow.",
    matchingPipeline: "Matching Pipeline",
    proposed: "PROPOSED",
    negotiation: "NEGOTIATION",
    documentation: "DOCUMENTATION",
    viewAll: "VIEW ALL",
    auditLog: "Audit Log",
    complianceSummary: "Compliance Summary",
    marketMonitor: "Market Monitor",
    realTimePrices: "Real-time prices and global commodity trends.",
    settlementDetails: "Payment Details",
    dateRange: "Date Range",
    search: "Search",
    export: "Export",
    profile: "Profile",
    notifications: "Notifications",
    noNotifications: "No notifications",
    markAsRead: "Mark as read",
    security: "Security",
    saveChanges: "Save Changes",
    totalTradedVolume: "Total Traded Volume",
    vsLastMonth: "vs. last month",
    closedOperations: "Closed Operations",
    thisWeek: "this week",
    estimatedCommissions: "Estimated Commissions",
    projectedPipeline: "Projected Pipeline",
    reportsAndAnalytics: "Reports & Analytics",
    performanceVisualization: "Visualization of performance and operational metrics of the network.",
    tradingVolume: "Trading Volume (USD M)",
    categoryDistribution: "Category Distribution",
    totalNetwork: "Total Network",
    generateCustomReport: "Generate Custom Report",
    reportParamsDesc: "Select the parameters and date range to obtain a detailed analysis of your operations and commissions.",
    configureReport: "Configure Report",
    systemSettings: "System Settings",
    manageProfileDesc: "Manage your profile, security, and terminal preferences.",
    userProfile: "User Profile",
    fullName: "Full Name",
    institutionalEmail: "Institutional Email",
    jobTitle: "Job Title / Role",
    timezone: "Timezone",
    securityAndAccess: "Security & Access",
    twoFactorAuth: "Two-Factor Authentication",
    activeSession: "Active Session",
    lastLogin: "Last Login",
    changePassword: "Change Password",
    connectedDevices: "Connected Devices",
    jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun",
    metals: "Metals", energy: "Energy", agriculture: "Agriculture", logistics: "Logistics",
    client: "Client", amount: "Amount", date: "Date", type: "Type", bank: "Bank", ref: "Reference", fee: "Fee", method: "Method",
    completed: "Completed", pending: "Pending", inProcess: "In Process",
    payment: "Payment", collection: "Collection",
    newOperation: "New Operation",
    quantity: "Quantity",
    targetPrice: "Target Price",
    createListing: "Create Listing",
    confirmExecution: "Confirm Execution",
    executionDesc: "Are you sure you want to execute the current market order? This action is irreversible.",
    executing: "Executing...",
    moduleInDevelopment: "Module in Development",
    comingSoon: "This section will be available soon in the terminal.",
    view: "View",
    all: "All",
    companyInfo: "Company Information",
    legalName: "Legal Name",
    taxId: "Tax ID",
    address: "Address",
    sectors: "Sectors",
    register: "Register",
    createAccount: "Create Account",
    alreadyHaveAccount: "Already have an account?",
    logIn: "Log In",
    bankDetails: "Bank Details",
    referenceNumber: "Reference Number",
    beneficiary: "Beneficiary",
    swiftBic: "SWIFT/BIC",
    accountNumber: "Account Number",
    complianceStatus: "Compliance Status",
    auditTrail: "Audit Trail",
    uploadDocument: "Upload Document",
    actions: "Actions",
    downloadReceipt: "Download Receipt",
    confirmExecutionDesc: "Are you sure you want to execute the current market order? This action is irreversible and will be recorded in the audit trail.",
    commodity: "Commodity",
    copperGradeA: "Copper Grade A",
    brentOil: "Brent Oil",
    goldBullion: "Gold Bullion",
    sectionAvailableSoon: "This section will be available soon in the terminal.",
    searchByRefOrBank: "Search by reference or bank",
    filterBySectors: "Filter by sectors",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
    requestVideoConf: "Request Video Conference",
    sendProposal: "Send Proposal",
    videoConfRequested: "Video Conference Requested",
    proposalSent: "Proposal Sent",
    passwordChanged: "Password changed successfully",
    filterByType: "Filter by Type",
    associatedDocuments: "Associated Documents",
    uploadSettlementDoc: "Upload Payment Document",
    noDocuments: "No associated documents",
    adminRole: "Admin",
    operatorRole: "Operator",
    viewerRole: "Viewer",
    accessDenied: "Access Denied",
    insufficientPermissions: "You do not have sufficient permissions to perform this action.",
    reconciliation: "Reconciliation",
    reconcileAccounts: "Reconcile Accounts",
    matchPayments: "Match Payments",
    discrepancy: "Discrepancy",
    matched: "Matched",
    unmatched: "Unmatched",
    reconciliationSummary: "Reconciliation Summary",
    newNotification: "New Notification",
    incomingPayments: "Incoming Payments",
    outgoingPayments: "Outgoing Payments",
    flagDiscrepancy: "Flag Discrepancy",
    confirmReconciliation: "Confirmar Reconciliation",
    changeSelection: "Change Selection",
    expectedAmount: "Expected Amount",
    perfectReconciliation: "Perfect Reconciliation",
    difference: "Difference",
    incomingPaymentsBank: "Incoming Payments (Banks)",
  }
};

// --- Components ---

const LandingPage = ({ onEnter }: { onEnter: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [view, setView] = useState<'landing' | 'login' | 'register'>('landing');

  if (view === 'login' || view === 'register') {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/20 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white font-black shrink-0">C</div>
              <span className="text-xl font-black text-primary uppercase tracking-tighter font-headline">Core Foundry</span>
            </div>
            <button onClick={() => setView('landing')} className="p-2 hover:bg-surface-container rounded-full transition-colors">
              <X className="w-5 h-5 text-on-surface-variant" />
            </button>
          </div>

          <h2 className="text-3xl font-black text-primary uppercase tracking-tighter font-headline mb-2">
            {view === 'login' ? 'Bienvenido de Nuevo' : 'Crear Cuenta'}
          </h2>
          <p className="text-sm text-on-surface-variant mb-8">
            {view === 'login' ? 'Acceda a su terminal institucional' : 'Únase a la red de commodities más avanzada'}
          </p>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onEnter(); }}>
            {view === 'register' && (
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Nombre de la Empresa</label>
                <input type="text" required placeholder="Ej: Aurum Metals SA" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Correo Corporativo</label>
              <input type="email" required placeholder="admin@empresa.com" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Contraseña</label>
              <input type="password" required placeholder="••••••••" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            
            <button 
              type="submit"
              className="w-full cta-gradient text-white py-5 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all active:scale-95"
            >
              {view === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-outline-variant/10 text-center">
            <p className="text-xs text-on-surface-variant">
              {view === 'login' ? '¿No tiene una cuenta?' : '¿Ya tiene una cuenta?'}
              <button 
                onClick={() => setView(view === 'login' ? 'register' : 'login')}
                className="ml-2 text-primary font-black uppercase tracking-widest hover:underline"
              >
                {view === 'login' ? 'Registrarse' : 'Iniciar Sesión'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface overflow-hidden selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-8 py-3 md:py-6 flex justify-between items-center bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white font-black shrink-0">C</div>
          <span className="text-base md:text-xl font-black text-primary uppercase tracking-tighter font-headline truncate max-w-[120px] md:max-w-none">Core Foundry</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
          <a href="#platform" className="hover:text-primary transition-colors">Plataforma</a>
          <a href="#solutions" className="hover:text-primary transition-colors">Soluciones</a>
          <a href="#compliance" className="hover:text-primary transition-colors">Compliance</a>
          <button 
            onClick={() => setView('login')}
            className="bg-primary text-white px-6 py-2 rounded-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer"
          >
            Acceder
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={() => setView('login')}
            className="bg-primary text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest active:scale-95 shadow-lg shadow-primary/20 shrink-0"
          >
            Acceder
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary p-2 bg-surface-container rounded-lg shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-surface border-b border-outline-variant/20 p-6 flex flex-col gap-6 md:hidden shadow-xl"
            >
              <div className="flex flex-col gap-4">
                <a href="#platform" onClick={() => setMobileMenuOpen(false)} className="text-xs font-black uppercase tracking-widest text-on-surface-variant hover:text-primary">Plataforma</a>
                <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="text-xs font-black uppercase tracking-widest text-on-surface-variant hover:text-primary">Soluciones</a>
                <a href="#compliance" onClick={() => setMobileMenuOpen(false)} className="text-xs font-black uppercase tracking-widest text-on-surface-variant hover:text-primary">Compliance</a>
              </div>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setView('login');
                }}
                className="w-full bg-primary text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20"
              >
                Acceder a la Terminal
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-24 md:pt-32 pb-20 px-4 md:px-8 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.85] font-black text-primary uppercase tracking-tighter font-headline mb-6 md:mb-8">
                CORE<br />FOUNDRY
              </h1>
              <p className="text-lg md:text-2xl text-on-surface-variant font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 md:mb-10">
                La terminal institucional definitiva para el comercio de commodities. Transparencia, velocidad y cumplimiento en una sola red.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => setView('register')}
                  className="cta-gradient text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest shadow-2xl shadow-blue-500/40 hover:scale-105 transition-all active:scale-95 cursor-pointer"
                >
                  Comenzar Ahora
                </button>
                <button 
                  onClick={() => setView('login')}
                  className="px-8 md:px-10 py-4 md:py-5 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest border-2 border-outline-variant/20 hover:bg-surface-container transition-all cursor-pointer"
                >
                  Acceder
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative px-4 md:px-0"
            >
              <div className="relative z-10 bg-surface-container-lowest p-3 md:p-4 rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border border-outline-variant/10">
                <img 
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1000" 
                  alt="Commodity Trading" 
                  className="rounded-2xl w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 md:-bottom-10 -left-6 md:-left-10 bg-on-tertiary-container text-white p-4 md:p-6 rounded-2xl shadow-2xl max-w-[160px] md:max-w-[200px]">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-60 mb-1 md:mb-2">Volumen 24h</p>
                  <p className="text-xl md:text-2xl font-black font-headline">$1.2B+</p>
                  <div className="mt-3 md:mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-white"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[80px] md:blur-[120px] -z-10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section id="platform" className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Matching Inteligente", desc: "Algoritmos avanzados que conectan oferta y demanda institucional en segundos.", icon: Zap },
              { title: "Audit Trail Real-Time", desc: "Cada paso de la negociación queda registrado en un libro inmutable para total transparencia.", icon: History },
              { title: "Compliance Global", desc: "Protocolos KYC/KYB integrados que aseguran que cada operación cumpla con estándares internacionales.", icon: Lock }
            ].map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight font-headline text-primary">{feature.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-32 px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tighter font-headline mb-6">Únete a la Red Core Foundry</h2>
          <p className="text-lg text-on-surface-variant mb-12">Regístrate hoy para acceder a la terminal institucional y comenzar a operar con los más altos estándares de seguridad y eficiencia.</p>
          
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/20 shadow-2xl text-left">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Nombre de la Empresa</label>
                <input type="text" placeholder="Ej: Aurum Metals SA" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Correo Corporativo</label>
                <input type="email" placeholder="admin@empresa.com" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Sector Principal</label>
                <select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors">
                  <option>Metales</option>
                  <option>Energía</option>
                  <option>Agrícolas</option>
                  <option>Logística</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">País de Operación</label>
                <input type="text" placeholder="Ej: Suiza" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  onClick={onEnter}
                  className="w-full cta-gradient text-white py-5 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all active:scale-95"
                >
                  Crear Cuenta Institucional
                </button>
                <p className="text-center text-[10px] text-on-surface-variant mt-6 uppercase tracking-widest font-bold">
                  Al registrarte, aceptas nuestros <a href="#" className="text-primary hover:underline">Términos de Servicio</a> y <a href="#" className="text-primary hover:underline">Política de Privacidad</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center text-white font-black text-[10px]">C</div>
            <span className="text-sm font-black text-primary uppercase tracking-tighter font-headline">Core Foundry</span>
          </div>
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">© 2026 Core Foundry Intl. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            <a href="#" className="hover:text-primary">Privacidad</a>
            <a href="#" className="hover:text-primary">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Sidebar = ({ 
  activeTab, 
  setActiveTab, 
  onLogout, 
  onNewOperation,
  isOpen,
  onClose,
  language,
  setLanguage,
  currency,
  setCurrency
}: { 
  activeTab: string, 
  setActiveTab: (t: string) => void,
  onLogout: () => void,
  onNewOperation: () => void,
  isOpen?: boolean,
  onClose?: () => void,
  language: 'es' | 'en',
  setLanguage: (lang: 'es' | 'en') => void,
  currency: string,
  setCurrency: (curr: string) => void
}) => {
  const t = TRANSLATIONS[language];
  
  const navItems = [
    { id: 'dashboard', label: t.dashboard, icon: LayoutDashboard },
    { id: 'companies', label: t.companies, icon: Building2 },
    { id: 'markets', label: t.markets, icon: BarChart3 },
    { id: 'operations', label: t.operations, icon: ArrowLeftRight },
    { id: 'settlements', label: t.settlements, icon: Wallet },
    { id: 'reports', label: t.reports, icon: FileText },
    { id: 'settings', label: t.settings, icon: Settings },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] md:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={cn(
        "fixed left-0 top-0 h-screen w-64 bg-primary-container flex flex-col py-6 z-[50] shadow-2xl shadow-black/20 transition-transform duration-300 md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="px-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight uppercase font-headline">Core Foundry</h1>
            <p className="text-[10px] text-on-primary-container tracking-widest uppercase mt-1">Gestión de Commodities</p>
          </div>
          <button onClick={onClose} className="md:hidden text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (onClose) onClose();
              }}
              className={cn(
                "w-full flex items-center px-6 py-3 transition-all duration-200 group",
                activeTab === item.id 
                  ? "bg-on-tertiary-container text-white font-semibold rounded-r-full mr-4" 
                  : "text-on-primary-container hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn("mr-3 w-5 h-5", activeTab === item.id ? "text-white" : "text-on-primary-container group-hover:text-white")} />
              <span className="text-xs tracking-wider">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto px-6 space-y-2">
          <div className="flex gap-2 mb-4 bg-white/5 p-1 rounded-xl">
            <button 
              onClick={() => setLanguage('es')}
              className={cn(
                "flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                language === 'es' ? "bg-white text-primary shadow-sm" : "text-white/60 hover:text-white"
              )}
            >
              ES
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={cn(
                "flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                language === 'en' ? "bg-white text-primary shadow-sm" : "text-white/60 hover:text-white"
              )}
            >
              EN
            </button>
          </div>

          <div className="flex gap-2 mb-4 bg-white/5 p-1 rounded-xl">
            <button 
              onClick={() => setCurrency('USD')}
              className={cn(
                "flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                currency === 'USD' ? "bg-white text-primary shadow-sm" : "text-white/60 hover:text-white"
              )}
            >
              USD
            </button>
            <button 
              onClick={() => setCurrency('EUR')}
              className={cn(
                "flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                currency === 'EUR' ? "bg-white text-primary shadow-sm" : "text-white/60 hover:text-white"
              )}
            >
              EUR
            </button>
          </div>

          <button 
            onClick={() => {
              onNewOperation();
              if (onClose) onClose();
            }}
            className="w-full cta-gradient text-white py-3 rounded-xl font-bold text-xs uppercase tracking-tighter flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
          >
            <Plus className="w-4 h-4" />
            {t.newMatch}
          </button>
          
          <div className="pt-6 border-t border-white/10">
            <button className="flex items-center py-2 text-on-primary-container hover:text-white text-xs tracking-wider transition-colors w-full text-left">
              <HelpCircle className="mr-3 w-4 h-4" />
              {t.support}
            </button>
            <button 
              onClick={onLogout}
              className="flex items-center py-2 text-on-primary-container hover:text-white text-xs tracking-wider transition-colors w-full text-left"
            >
              <LogOut className="mr-3 w-4 h-4" />
              {t.logout}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

const TopBar = ({ 
  selectedCategory, 
  setSelectedCategory, 
  onExecuteOrder,
  onNewOperation,
  onProfileClick,
  onMenuClick,
  darkMode,
  setDarkMode,
  searchQuery,
  setSearchQuery,
  showSearchResults,
  setShowSearchResults,
  filteredResults,
  language,
  onNavigate,
  notifications,
  showNotifications,
  setShowNotifications,
  setNotifications
}: { 
  selectedCategory: string, 
  setSelectedCategory: (c: string) => void,
  onExecuteOrder: () => void,
  onNewOperation: () => void,
  onProfileClick: () => void,
  onMenuClick: () => void,
  darkMode: boolean,
  setDarkMode: (d: boolean) => void,
  searchQuery: string,
  setSearchQuery: (s: string) => void,
  showSearchResults: boolean,
  setShowSearchResults: (s: boolean) => void,
  filteredResults: any,
  language: 'es' | 'en',
  onNavigate: (tab: string) => void,
  notifications: any[],
  showNotifications: boolean,
  setShowNotifications: (s: boolean) => void,
  setNotifications: (n: any) => void
}) => {
  const categories = ['Global', 'Metales', 'Energía', 'Agrícolas'];
  const t = TRANSLATIONS[language];
  
  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <header className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] z-30 bg-surface/85 backdrop-blur-md flex justify-between items-center h-16 px-4 md:px-8 border-b border-outline-variant/20">
      <div className="flex items-center gap-4 md:gap-8 flex-1">
        <button onClick={onMenuClick} className="md:hidden text-primary">
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="relative flex-1 max-w-md group hidden sm:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchResults(true);
            }}
            onFocus={() => setShowSearchResults(true)}
            className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl pl-12 pr-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
          />
          
          {/* Search Results Dropdown */}
          <AnimatePresence>
            {showSearchResults && filteredResults && (
              <>
                <div className="fixed inset-0 z-[-1]" onClick={() => setShowSearchResults(false)}></div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-surface-container-highest border border-outline-variant/20 rounded-2xl shadow-2xl p-4 max-h-[400px] overflow-y-auto z-50"
                >
                  {Object.entries(filteredResults).some(([_, items]) => (items as any[]).length > 0) ? (
                    <div className="space-y-4">
                      {filteredResults.companies.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-black text-outline uppercase tracking-widest mb-2 px-2">Empresas</h4>
                          {filteredResults.companies.map((c: any) => (
                            <button 
                              key={c.id} 
                              onClick={() => {
                                onNavigate('companies');
                                setShowSearchResults(false);
                                setSearchQuery('');
                              }}
                              className="w-full text-left p-2 hover:bg-primary/5 rounded-lg flex items-center gap-3 transition-colors"
                            >
                              <Building2 className="w-4 h-4 text-primary" />
                              <div>
                                <p className="text-sm font-bold">{c.name}</p>
                                <p className="text-[10px] text-outline">{c.type}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                      {filteredResults.operations.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-black text-outline uppercase tracking-widest mb-2 px-2">Operaciones</h4>
                          {filteredResults.operations.map((o: any) => (
                            <button 
                              key={o.id} 
                              onClick={() => {
                                onNavigate('markets');
                                setShowSearchResults(false);
                                setSearchQuery('');
                              }}
                              className="w-full text-left p-2 hover:bg-primary/5 rounded-lg flex items-center gap-3 transition-colors"
                            >
                              <Zap className="w-4 h-4 text-on-tertiary-container" />
                              <div>
                                <p className="text-sm font-bold">{o.title}</p>
                                <p className="text-[10px] text-outline">{o.amount}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                      {filteredResults.documents.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-black text-outline uppercase tracking-widest mb-2 px-2">Documentos</h4>
                          {filteredResults.documents.map((d: any) => (
                            <button 
                              key={d.id} 
                              onClick={() => {
                                onNavigate('documents');
                                setShowSearchResults(false);
                                setSearchQuery('');
                              }}
                              className="w-full text-left p-2 hover:bg-primary/5 rounded-lg flex items-center gap-3 transition-colors"
                            >
                              <FileText className="w-4 h-4 text-blue-500" />
                              <div>
                                <p className="text-sm font-bold">{d.title}</p>
                                <p className="text-[10px] text-outline">{d.type}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <Search className="w-8 h-8 text-outline mx-auto mb-2 opacity-20" />
                      <p className="text-sm text-outline">No se encontraron resultados para "{searchQuery}"</p>
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "pb-2 text-[0.75rem] font-medium transition-all",
                selectedCategory === cat 
                  ? "text-on-tertiary-container border-b-2 border-on-tertiary-container" 
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-surface-container rounded-full text-on-surface-variant relative transition-colors"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-error text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-surface">
                {unreadCount}
              </span>
            )}
          </button>

          <AnimatePresence>
            {showNotifications && (
              <>
                <div className="fixed inset-0 z-[-1]" onClick={() => setShowNotifications(false)}></div>
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-80 bg-surface-container-highest border border-outline-variant/20 rounded-2xl shadow-2xl overflow-hidden z-50"
                >
                  <div className="p-4 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">{t.notifications}</h4>
                    {unreadCount > 0 && (
                      <button 
                        onClick={markAllAsRead}
                        className="text-[8px] font-bold text-primary hover:underline uppercase tracking-widest"
                      >
                        {t.markAsRead}
                      </button>
                    )}
                  </div>
                  <div className="max-h-[400px] overflow-y-auto divide-y divide-outline-variant/5">
                    {notifications.length > 0 ? (
                      notifications.map((n) => (
                        <div key={n.id} className={cn("p-4 hover:bg-surface-container-low transition-colors cursor-pointer", !n.read && "bg-primary/5")}>
                          <div className="flex gap-3">
                            <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                              n.type === 'settlement' ? "bg-blue-50 text-blue-600" : n.type === 'doc' ? "bg-green-50 text-green-600" : "bg-orange-50 text-orange-600"
                            )}>
                              {n.type === 'settlement' ? <Wallet className="w-4 h-4" /> : n.type === 'doc' ? <FileText className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start">
                                <p className="text-xs font-bold text-primary truncate">{n.title}</p>
                                <span className="text-[8px] text-outline font-medium whitespace-nowrap ml-2">{n.time}</span>
                              </div>
                              <p className="text-[10px] text-on-surface-variant mt-0.5 line-clamp-2">{n.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <Bell className="w-8 h-8 text-outline mx-auto mb-2 opacity-20" />
                        <p className="text-xs text-outline italic">{t.noNotifications}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 hover:bg-surface-container rounded-full text-on-surface-variant transition-colors"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        
        <div className="h-8 w-px bg-outline-variant/20 mx-2 hidden sm:block"></div>
        
        <button 
          onClick={onProfileClick}
          className="flex items-center gap-3 p-1 pr-3 hover:bg-surface-container rounded-full transition-colors group"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            AB
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-[10px] font-black uppercase tracking-tighter text-primary">Alexander Broker</p>
            <p className="text-[8px] font-bold text-outline uppercase tracking-widest">Senior Partner</p>
          </div>
        </button>
      </div>
    </header>
  );
};

const KPICard = ({ title, value, change, label, icon: Icon, colorClass }: any) => (
  <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <span className="text-[0.65rem] font-bold text-on-surface-variant uppercase tracking-widest">{title}</span>
      <div className={cn("p-2 rounded-lg", colorClass)}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <div className="text-3xl font-extrabold text-primary tracking-tighter font-headline">{value}</div>
    <div className="mt-2 flex items-center gap-2">
      {change && <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">{change}</span>}
      <span className="text-[0.65rem] text-on-surface-variant">{label}</span>
    </div>
  </div>
);

const MatchCard = ({ category, id, title, buyer, seller, amount, status, colorClass }: any) => {
  const [actionTaken, setActionTaken] = useState<string | null>(null);
  const [confirmingAction, setConfirmingAction] = useState<string | null>(null);

  const handleTriggerAction = (e: React.MouseEvent, action: string) => {
    e.stopPropagation();
    setConfirmingAction(action);
  };

  const handleConfirm = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirmingAction) {
      setActionTaken(confirmingAction);
      setConfirmingAction(null);
      setTimeout(() => setActionTaken(null), 3000);
    }
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setConfirmingAction(null);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: actionTaken ? 0.98 : 1,
        backgroundColor: actionTaken ? (actionTaken === 'Aceptado' ? 'var(--color-surface-container-low)' : 'var(--color-surface-container-high)') : 'var(--color-surface-container-lowest)'
      }}
      className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative overflow-hidden"
    >
      <AnimatePresence>
        {actionTaken && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={cn(
              "absolute inset-0 z-20 flex items-center justify-center font-bold text-xs uppercase tracking-widest backdrop-blur-sm",
              actionTaken === 'Aceptado' ? "bg-green-500/90 text-white" : "bg-red-500/90 text-white"
            )}
          >
            {actionTaken}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {confirmingAction && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-surface-container-lowest/95 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center"
          >
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">
              ¿Confirmar {confirmingAction}?
            </p>
            <div className="flex gap-2 w-full">
              <button 
                onClick={handleCancel}
                className="flex-1 py-1.5 text-[8px] font-bold uppercase tracking-tighter border border-outline-variant/30 rounded hover:bg-surface-container transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={handleConfirm}
                className={cn(
                  "flex-1 py-1.5 text-[8px] font-bold uppercase tracking-tighter text-white rounded transition-opacity",
                  confirmingAction === 'Aceptado' ? "bg-green-600" : "bg-red-600"
                )}
              >
                Confirmar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-start mb-3">
        <span className={cn("text-[0.6rem] font-black px-1.5 py-0.5 rounded uppercase", colorClass)}>{category}</span>
        <span className="text-[0.6rem] text-on-surface-variant font-medium">ID #{id}</span>
      </div>
      <h4 className="text-sm font-bold text-primary mb-1">{title}</h4>
      <div className="flex items-center justify-between py-3 border-y border-outline-variant/5 my-3">
        <div className="text-center">
          <p className="text-[0.5rem] uppercase text-outline font-bold">Comprador</p>
          <p className="text-[0.7rem] font-semibold">{buyer}</p>
        </div>
        <ArrowLeftRight className="w-3 h-3 text-outline" />
        <div className="text-center">
          <p className="text-[0.5rem] uppercase text-outline font-bold">Vendedor</p>
          <p className="text-[0.7rem] font-semibold">{seller}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm font-black text-primary">{amount}</div>
        <div className="flex gap-2">
          <button 
            onClick={(e) => handleTriggerAction(e, 'Aceptado')}
            className="p-1.5 rounded bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all"
            title="Aceptar Match"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={(e) => handleTriggerAction(e, 'Rechazado')}
            className="p-1.5 rounded bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all"
            title="Rechazar Match"
          >
            <XCircle className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const RecentActivity = ({ language }: { language: 'es' | 'en' }) => {
  const t = TRANSLATIONS[language];
  const activities = [
    { id: 1, type: 'match', title: 'Nuevo Match Propuesto', desc: 'Cobre Grado A (Cathode) entre INST-772 and MINE-014', time: 'Hace 10 min', icon: Zap, color: 'text-blue-600 bg-blue-50' },
    { id: 2, type: 'doc', title: 'Documento Firmado', desc: 'FCO firmada por Vendedor #0988 para Operación #4920', time: 'Hace 45 min', icon: FileText, color: 'text-green-600 bg-green-50' },
    { id: 3, type: 'order', title: 'Orden Ejecutada', desc: 'Compra de Litio (Carbonato) por $2.8M', time: 'Hace 2 horas', icon: ArrowLeftRight, color: 'text-purple-600 bg-purple-50' },
    { id: 4, type: 'system', title: 'Alerta de Compliance', desc: 'Verificación KYB completada para nuevo cliente AGRO-42', time: 'Hace 5 horas', icon: Lock, color: 'text-orange-600 bg-orange-50' },
    { id: 5, type: 'market', title: 'Movimiento de Mercado', desc: 'Petróleo Brent superó los $82.00/bbl', time: 'Hace 8 horas', icon: BarChart3, color: 'text-primary bg-primary-fixed' },
  ];

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
        <h3 className="text-lg font-bold tracking-tight font-headline">{t.recentActivity}</h3>
        <button className="text-[10px] font-bold text-on-tertiary-container uppercase tracking-widest hover:underline">{t.viewAll}</button>
      </div>
      <div className="divide-y divide-outline-variant/5">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-surface-container-low transition-colors flex gap-4">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", activity.color)}>
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <p className="text-sm font-bold text-primary truncate">{activity.title}</p>
                <span className="text-[10px] text-outline font-medium whitespace-nowrap ml-2">{activity.time}</span>
              </div>
              <p className="text-xs text-on-surface-variant mt-0.5 line-clamp-1">{activity.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UserManagement = ({ company, onBack, language, userRole }: { company: any, onBack: () => void, language: 'es' | 'en', userRole: string }) => {
  const t = TRANSLATIONS[language];
  const [users, setUsers] = useState([
    { id: 1, name: 'Carlos Rodriguez', email: 'c.rodriguez@aurum.ch', role: t.admin, status: t.active, lastAccess: 'Hace 2 horas' },
    { id: 2, name: 'Elena Schmidt', email: 'e.schmidt@aurum.ch', role: t.operator, status: t.active, lastAccess: 'Hoy, 09:15 AM' },
    { id: 3, name: 'Hans Müller', email: 'h.mueller@aurum.ch', role: t.viewer, status: t.inactive, lastAccess: 'Hace 3 días' },
  ]);

  const canAddUser = userRole === 'admin';

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-surface-container rounded-lg transition-colors text-primary"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-3xl font-extrabold text-primary tracking-tighter font-headline">{t.userManagement}</h2>
          <p className="text-on-surface-variant text-sm mt-1">{company.name} • {company.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-2">{t.allUsers}</p>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-primary font-headline">{users.length}</span>
            <span className="text-xs font-bold text-primary">{t.active}</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-2">{t.permissions}</p>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-primary font-headline">2</span>
            <span className="text-xs font-bold text-on-surface-variant">{t.admin}s</span>
          </div>
        </div>
        {canAddUser ? (
          <button className="bg-primary text-white p-6 rounded-xl shadow-xl flex flex-col justify-center items-center gap-2 hover:opacity-90 transition-opacity">
            <Plus className="w-6 h-6" />
            <span className="text-xs font-black uppercase tracking-widest">{t.addUser}</span>
          </button>
        ) : (
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex flex-col justify-center items-center gap-2 opacity-50 grayscale">
            <Lock className="w-6 h-6 text-outline" />
            <span className="text-[10px] font-black uppercase tracking-widest text-outline">{t.insufficientPermissions}</span>
          </div>
        )}
      </div>

      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{t.users}</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{t.role}</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{t.status}</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{t.lastAccess}</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-surface-container-low/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">{user.name}</p>
                      <p className="text-[10px] text-on-surface-variant">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-medium text-primary">{user.role}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <div className={cn("w-1.5 h-1.5 rounded-full", user.status === t.active ? "bg-green-600" : "bg-outline-variant")} />
                    <span className="text-[10px] font-black uppercase tracking-tight">{user.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-[10px] font-bold text-primary">{user.lastAccess}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CompanyManagement = ({ language, currency, userRole }: { language: 'es' | 'en', currency: string, userRole: string }) => {
  const t = TRANSLATIONS[language];
  const [filter, setFilter] = useState('Todos');
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [newCompany, setNewCompany] = useState({ name: '', email: '', sector: 'Metales' });

  const sectors = [t.metals, t.energy, t.agriculture, 'Logística'];

  const [companies, setCompanies] = useState([
    { id: 'CORP-2948-B', name: 'Aurum Metals SA', country: 'Suiza', code: 'CHE-101.928.374', access: 'TIER 1', status: 'VERIFICADO', activity: 'Hoy, 10:45 AM', trade: 'XAU/USD', sector: t.metals },
    { id: 'CORP-1122-E', name: 'Blue Energy Global', country: 'Noruega', code: 'NO-983210452', access: 'TIER 2', status: 'KYC PENDIENTE', activity: 'Ayer, 16:20 PM', trade: 'Carga de Documentos', sector: t.energy },
    { id: 'CORP-5582-A', name: 'AgroTrading Int.', country: 'Argentina', code: 'AR-30-708293-1', access: 'TIER 1', status: 'VERIFICADO', activity: '12 Oct, 09:15 AM', trade: 'Corn Futures', sector: t.agriculture },
    { id: 'CORP-0041-Z', name: 'Lux Trading Ltd', country: 'Reino Unido', code: 'UK-SC294811', access: 'TIER 1', status: 'RECHAZADO', activity: '05 Oct, 14:00 PM', trade: 'Fallo en Compliance', sector: t.metals },
  ]);

  if (selectedCompany) {
    return <UserManagement company={selectedCompany} onBack={() => setSelectedCompany(null)} language={language} userRole={userRole} />;
  }

  const canInvite = userRole === 'admin' || userRole === 'operator';

  const handleInvite = () => {
    if (!newCompany.name || !newCompany.email) return;
    
    const id = `CORP-${Math.floor(Math.random() * 9000) + 1000}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
    const company = {
      id,
      name: newCompany.name,
      country: 'Pendiente',
      code: 'PENDIENTE',
      access: 'TIER 2',
      status: 'KYC PENDIENTE',
      activity: 'Recién invitado',
      trade: 'N/A',
      sector: newCompany.sector
    };
    
    setCompanies([company, ...companies]);
    setNewCompany({ name: '', email: '', sector: t.metals });
    setShowInviteModal(false);
  };

  const toggleSector = (sector: string) => {
    setSelectedSectors(prev => 
      prev.includes(sector) 
        ? prev.filter(s => s !== sector) 
        : [...prev, sector]
    );
  };

  const filteredCompanies = companies.filter(c => {
    const statusMatch = filter === 'Todos' || c.status === filter;
    const sectorMatch = selectedSectors.length === 0 || selectedSectors.includes(c.sector);
    return statusMatch && sectorMatch;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-primary tracking-tighter font-headline">{t.manageCompanies}</h2>
          <p className="text-on-surface-variant text-sm mt-1">Supervise el ecosistema de instituciones y verifique su estado normativo.</p>
        </div>
        {canInvite && (
          <button 
            onClick={() => setShowInviteModal(true)}
            className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            {t.inviteCompany}
          </button>
        )}
      </div>

      <AnimatePresence>
        {showInviteModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInviteModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-surface p-8 rounded-2xl shadow-2xl w-full max-w-md border border-outline-variant/20"
            >
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter font-headline mb-4">{t.inviteCompany}</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1 block">{t.companyName}</label>
                  <input 
                    type="text" 
                    value={newCompany.name}
                    onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                    placeholder="Ej. Global Commodities SA" 
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-3 text-sm focus:outline-none focus:border-primary" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1 block">{t.contactEmail}</label>
                  <input 
                    type="email" 
                    value={newCompany.email}
                    onChange={(e) => setNewCompany({ ...newCompany, email: e.target.value })}
                    placeholder="compliance@empresa.com" 
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-3 text-sm focus:outline-none focus:border-primary" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1 block">{t.mainSector}</label>
                  <select 
                    value={newCompany.sector}
                    onChange={(e) => setNewCompany({ ...newCompany, sector: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-3 text-sm focus:outline-none focus:border-primary"
                  >
                    <option>Metales</option>
                    <option>Energía</option>
                    <option>Agrícolas</option>
                    <option>Logística</option>
                  </select>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <button 
                  onClick={() => setShowInviteModal(false)}
                  className="flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest border border-outline-variant/20 hover:bg-surface-container transition-colors"
                >
                  {t.cancel}
                </button>
                <button 
                  onClick={handleInvite}
                  className="flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest bg-primary text-white shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-transform"
                >
                  {t.sendInvitation}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-2">{t.totalCompanies}</p>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-primary font-headline">1,284</span>
            <span className="text-xs font-bold text-primary">~+12%</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-error shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-2">{t.kycPending}</p>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-primary font-headline">42</span>
            <span className="text-xs font-bold text-error">Acción requerida</span>
          </div>
        </div>
        <div className="bg-primary text-white p-6 rounded-xl shadow-xl">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-2">{t.transactionVolume}</p>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black font-headline">{formatCurrency(4200000000, currency)}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
              <Menu className="w-3 h-3" /> {t.filterByStatus}
            </h3>
            <div className="space-y-2">
              {['Todos', 'KYC PENDIENTE', 'VERIFICADO', 'RECHAZADO'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-xs font-bold transition-all flex justify-between items-center",
                    filter === f ? "bg-primary text-white" : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                  )}
                >
                  {f === 'KYC PENDIENTE' ? 'KYC Pendiente' : f === 'VERIFICADO' ? 'Verificado' : f === 'RECHAZADO' ? 'Rechazado' : 'Todos'}
                  {f === 'KYC PENDIENTE' && <span className={cn("px-1.5 py-0.5 rounded text-[8px]", filter === f ? "bg-white text-primary" : "bg-error/10 text-error")}>42</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
              <Building2 className="w-3 h-3" /> {t.filterBySectors}
            </h3>
            <div className="space-y-2">
              {sectors.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSector(s)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-xs font-bold transition-all flex items-center justify-between",
                    selectedSectors.includes(s) ? "bg-primary/10 text-primary border border-primary/20" : "text-on-surface-variant hover:bg-surface-container"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {s === t.metals && <Gem className="w-4 h-4" />}
                    {s === t.energy && <Fuel className="w-4 h-4" />}
                    {s === t.agriculture && <ArrowUpDown className="w-4 h-4" />}
                    {s === 'Logística' && <LayoutDashboard className="w-4 h-4" />}
                    {s}
                  </div>
                  {selectedSectors.includes(s) && <Check className="w-4 h-4" />}
                </button>
              ))}
              {selectedSectors.length > 0 && (
                <button 
                  onClick={() => setSelectedSectors([])}
                  className="w-full text-center py-2 text-[10px] font-black uppercase tracking-widest text-primary hover:underline"
                >
                  Limpiar Filtros
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-9">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low/50">
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{t.companyName}</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">País / Registro</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Acceso</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{t.status}</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Actividad</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {filteredCompanies.map((c, i) => (
                    <tr key={i} className="hover:bg-surface-container-low/30 transition-colors">
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-surface-container-high rounded flex items-center justify-center font-black text-primary text-xs">
                            {c.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-primary">{c.name}</p>
                            <p className="text-[10px] text-on-surface-variant">ID: {c.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-sm font-bold text-primary">{c.country}</p>
                        <p className="text-[10px] text-on-surface-variant">{c.code}</p>
                      </td>
                      <td className="px-6 py-6">
                        <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-black">{c.access}</span>
                      </td>
                      <td className="px-6 py-6">
                        <div className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black",
                          c.status === 'VERIFICADO' ? "bg-green-50 text-green-600" : 
                          c.status === 'KYC PENDIENTE' ? "bg-error/5 text-error" : "bg-outline-variant/10 text-on-surface-variant"
                        )}>
                          <div className={cn("w-1.5 h-1.5 rounded-full", 
                            c.status === 'VERIFICADO' ? "bg-green-600" : 
                            c.status === 'KYC PENDIENTE' ? "bg-error" : "bg-on-surface-variant"
                          )}></div>
                          {c.status}
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-[10px] font-bold text-primary">{c.activity}</p>
                        <p className="text-[10px] text-on-surface-variant">{c.trade}</p>
                      </td>
                      <td className="px-6 py-6 text-right">
                        <button 
                          onClick={() => setSelectedCompany(c)}
                          className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors flex items-center gap-2 ml-auto"
                          title={t.viewUsers}
                        >
                          <Users className="w-4 h-4" />
                          <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">{t.users}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-surface-container-low/30 border-t border-outline-variant/10 flex justify-between items-center">
              <p className="text-[10px] font-bold text-on-surface-variant">{t.showing} 1-{filteredCompanies.length} {t.of} 1,284 {t.institutions}</p>
              <div className="flex gap-2">
                <button className="p-2 border border-outline-variant/20 rounded hover:bg-surface-container transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                <button className="p-2 border border-outline-variant/20 rounded hover:bg-surface-container transition-colors"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ onNewMatch, selectedCategory, onManageCompanies, language, currency }: { onNewMatch: () => void, selectedCategory: string, onManageCompanies: () => void, language: 'es' | 'en', currency: string }) => {
  const t = TRANSLATIONS[language];
  const locale = language === 'es' ? 'es-ES' : 'en-US';
  
  const matches = [
    { category: t.metals, id: '8492', title: 'Cobre Grado A (Cathode)', buyer: 'INST-772', seller: 'MINE-014', amount: formatCurrency(1240000, currency, locale), colorClass: 'bg-blue-50 text-on-tertiary-container', column: 'PROPUESTO' },
    { category: t.energy, id: '8510', title: 'Crudo Brent (10k bbl)', buyer: 'REFI-44', seller: 'TRAD-99', amount: formatCurrency(842000, currency, locale), colorClass: 'bg-orange-50 text-orange-600', column: 'PROPUESTO' },
    { category: t.metals, id: '8492', title: 'Cobre Grado A (Cathode)', buyer: 'INST-772', seller: 'MINE-014', amount: formatCurrency(1240000, currency, locale), status: t.negotiation, colorClass: 'bg-blue-50 text-on-tertiary-container', column: 'NEGOCIACIÓN' },
    { category: t.agriculture, id: '7721', title: 'Trigo Soft Red Winter', buyer: 'FOOD-08', seller: 'AGRO-42', amount: formatCurrency(415500, currency, locale), status: t.documentation, colorClass: 'bg-green-50 text-green-600', column: 'DOCUMENTACIÓN' },
  ];

  const filteredMatches = selectedCategory === 'Global' 
    ? matches 
    : matches.filter(m => m.category === (selectedCategory === 'Metales' ? t.metals : selectedCategory === 'Energía' ? t.energy : t.agriculture));

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-primary font-headline">{t.brokerDashboard}</h2>
          <p className="text-on-surface-variant text-sm mt-1">{t.consolidatedView}</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={onManageCompanies}
            className="flex-1 md:flex-none border border-outline-variant/20 text-primary px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-surface-container transition-colors flex items-center justify-center gap-2"
          >
            <Building2 className="w-4 h-4" />
            {t.manageCompanies}
          </button>
          <button 
            onClick={onNewMatch}
            className="flex-1 md:flex-none cta-gradient text-white px-6 py-3 rounded-lg font-bold text-sm shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
          >
            <Plus className="w-4 h-4" />
            {t.newMatch}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard 
          title={t.totalTradedVolume} 
          value={formatCurrency(482500000, currency, locale)} 
          change="+12.4%" 
          label={t.vsLastMonth} 
          icon={BarChart3} 
          colorClass="bg-primary-fixed text-on-primary-fixed"
        />
        <KPICard 
          title={t.closedOperations} 
          value="142" 
          change="+8" 
          label={t.thisWeek} 
          icon={CheckCircle2} 
          colorClass="bg-secondary-container text-on-secondary-container"
        />
        <KPICard 
          title={t.estimatedCommissions} 
          value={formatCurrency(2140000, currency, locale)} 
          label={t.projectedPipeline} 
          icon={Wallet} 
          colorClass="bg-tertiary-fixed text-on-tertiary-fixed-variant"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-tight flex items-center gap-2 font-headline">
                <span className="w-1.5 h-6 bg-on-tertiary-container rounded-full"></span>
                {t.matchingPipeline}
              </h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-surface-container-high rounded text-on-surface-variant">
                  <Search className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-surface-container-high rounded text-on-surface-variant">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {/* Column: PROPUESTO */}
              <div className="flex-shrink-0 w-72">
                <div className="flex items-center justify-between mb-4 px-2">
                  <span className="text-[0.65rem] font-bold tracking-widest text-on-surface-variant uppercase">{t.proposed} ({filteredMatches.filter(m => m.column === 'PROPUESTO').length})</span>
                  <MoreHorizontal className="w-4 h-4 text-outline" />
                </div>
                <div className="space-y-4">
                  {filteredMatches.filter(m => m.column === 'PROPUESTO').map((m, i) => (
                    <MatchCard key={i} {...m} />
                  ))}
                </div>
              </div>

              {/* Column: NEGOCIACIÓN */}
              <div className="flex-shrink-0 w-72">
                <div className="flex items-center justify-between mb-4 px-2">
                  <span className="text-[0.65rem] font-bold tracking-widest text-on-surface-variant uppercase">{t.negotiation} ({filteredMatches.filter(m => m.column === 'NEGOCIACIÓN').length})</span>
                  <MoreHorizontal className="w-4 h-4 text-outline" />
                </div>
                <div className="space-y-4">
                  {filteredMatches.filter(m => m.column === 'NEGOCIACIÓN').map((m, i) => (
                    <MatchCard key={i} {...m} />
                  ))}
                </div>
              </div>

              {/* Column: DOCUMENTACIÓN */}
              <div className="flex-shrink-0 w-72">
                <div className="flex items-center justify-between mb-4 px-2">
                  <span className="text-[0.65rem] font-bold tracking-widest text-on-surface-variant uppercase">{t.documentation} ({filteredMatches.filter(m => m.column === 'DOCUMENTACIÓN').length})</span>
                  <MoreHorizontal className="w-4 h-4 text-outline" />
                </div>
                <div className="space-y-4">
                  {filteredMatches.filter(m => m.column === 'DOCUMENTACIÓN').map((m, i) => (
                    <MatchCard key={i} {...m} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <RecentActivity language={language} />
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-[10px] font-black tracking-widest uppercase text-on-surface-variant font-headline">{t.pendingListings}</h3>
              <button className="text-[0.6rem] font-bold text-on-tertiary-container hover:underline">{t.viewAll}</button>
            </div>
            <div className="space-y-3">
              {[
                { title: 'Litio (Carbonato)', seller: 'MIN-X8', amount: formatCurrency(2800000, currency, locale), icon: Zap, color: 'bg-primary-container text-white' },
                { title: 'Gas Natural (LNG)', seller: 'EURO-GRID', amount: formatCurrency(12400000, currency, locale), icon: Fuel, color: 'bg-slate-200 text-primary' },
                { title: 'Oro (Bullion 99.9)', seller: 'AU-RESERVE', amount: formatCurrency(5100000, currency, locale), icon: Gem, color: 'bg-slate-200 text-primary' },
              ].map((listing, i) => (
                <div key={i} className="bg-surface-container-low p-4 rounded-xl hover:bg-surface-container transition-all group cursor-pointer border border-outline-variant/5">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm", listing.color)}>
                      <listing.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-primary truncate">{listing.title}</p>
                      <p className="text-[0.65rem] text-on-surface-variant font-medium">Vendedor: {listing.seller}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-outline-variant/5 flex justify-between items-center">
                    <span className="text-[0.7rem] font-black text-primary">{listing.amount}</span>
                    <button className="text-[0.6rem] font-bold text-on-tertiary-container bg-on-tertiary-container/5 px-3 py-1.5 rounded-lg transition-colors uppercase hover:bg-on-tertiary-container hover:text-white">Match</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-48 rounded-xl bg-surface-container-high overflow-hidden border border-outline-variant/10 shadow-inner">
            <div className="absolute inset-0 ledger-dots opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-[0.6rem] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Mapa de Calor de Red</p>
              <div className="w-full h-20 flex items-end justify-between px-4 gap-1.5">
                {[8, 14, 10, 20, 16, 12, 18].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }}
                    animate={{ height: `${h * 4}px` }}
                    className={cn("w-full bg-on-tertiary-container/30 rounded-t-sm", i === 3 ? "bg-primary-fixed" : "")} 
                  />
                ))}
              </div>
              <p className="text-[0.55rem] mt-4 text-outline font-medium italic">Alta actividad en el corredor Metales Industriales</p>
            </div>
          </div>

          <div className="bg-on-tertiary-container text-white p-6 rounded-xl shadow-xl relative overflow-hidden group border border-white/10">
            <div className="relative z-10">
              <h4 className="text-lg font-black uppercase tracking-tighter font-headline mb-2">Gestión de Empresas</h4>
              <p className="text-[10px] opacity-80 mb-5 leading-relaxed">Administre el ecosistema de instituciones y verifique su estado normativo en tiempo real.</p>
              <button 
                onClick={onManageCompanies}
                className="w-full bg-white text-primary py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Acceder al Módulo
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NegotiationDetail = ({ language, userRole }: { language: 'es' | 'en', userRole: string }) => {
  const t = TRANSLATIONS[language];
  const [documents, setDocuments] = useState([
    { id: 1, name: 'LOI - Letter of Intent', status: 'APROBADA', ref: 'LOI-4920-CHILE-COPPER.pdf', size: '2.4 MB', date: 'Hace 2 días', type: 'approved' },
    { id: 2, name: 'FCO - Full Corporate Offer', status: 'PENDIENTE ACCIÓN', ref: 'FCO_COPPER_FINAL.pdf', size: '1.8 MB', date: 'Hoy, 09:15 GMT', type: 'pending' },
  ]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [auditLog, setAuditLog] = useState([
    { title: 'Firma Digital Detectada', desc: 'Vendedor #0988 ha firmado electrónicamente la FCO.', time: 'HOY, 14:22 GMT', color: 'bg-on-tertiary-container' },
    { title: 'Documento Subido', desc: 'Vendedor #0988 cargó FCO_COPPER_FINAL.pdf', time: 'AYER, 09:15 GMT', color: 'bg-outline-variant' },
    { title: 'Compliance Aprobado', desc: 'Mesa Central de Compliance verificó LOI.', time: '20 OCT, 11:30 GMT', color: 'bg-green-500' },
  ]);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [proposalData, setProposalData] = useState({ price: '', quantity: '', notes: '' });

  const canNegotiate = userRole === 'admin' || userRole === 'operator';

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!canNegotiate) return;
    const file = e.target.files?.[0];
    if (file) {
      const newDoc = {
        id: Date.now(),
        name: file.name.split('.')[0].toUpperCase(),
        status: 'EN REVISIÓN',
        ref: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        date: 'Recién subido',
        type: 'review'
      };
      setDocuments([newDoc, ...documents]);
      setAuditLog([{
        title: 'Documento Cargado',
        desc: `Se ha subido el documento: ${file.name}`,
        time: 'AHORA',
        color: 'bg-blue-500'
      }, ...auditLog]);
    }
  };

  const handleRequestVideo = () => {
    setStatusMessage(t.videoConfRequested);
    setAuditLog([{
      title: 'Videoconferencia Solicitada',
      desc: 'Se ha enviado una solicitud de reunión virtual a la contraparte.',
      time: 'AHORA',
      color: 'bg-on-tertiary-container'
    }, ...auditLog]);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const handleSendProposal = () => {
    setShowProposalModal(true);
  };

  const submitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(t.proposalSent);
    setAuditLog([{
      title: 'Propuesta Enviada',
      desc: `Nueva propuesta SPA enviada: ${proposalData.quantity} MT @ ${proposalData.price}`,
      time: 'AHORA',
      color: 'bg-primary'
    }, ...auditLog]);
    setShowProposalModal(false);
    setProposalData({ price: '', quantity: '', notes: '' });
    setTimeout(() => setStatusMessage(null), 3000);
  };

  return (
    <div className="space-y-8">
      {showProposalModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-surface-container-lowest w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/20"
          >
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-primary text-white">
              <h3 className="text-lg font-black uppercase tracking-widest font-headline">Enviar Propuesta SPA</h3>
              <button onClick={() => setShowProposalModal(false)}><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={submitProposal} className="p-6 space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Precio Ofertado (USD/MT)</label>
                <input 
                  required
                  type="number" 
                  value={proposalData.price}
                  onChange={e => setProposalData({...proposalData, price: e.target.value})}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary"
                  placeholder="Ej: 9250"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Cantidad (MT)</label>
                <input 
                  required
                  type="number" 
                  value={proposalData.quantity}
                  onChange={e => setProposalData({...proposalData, quantity: e.target.value})}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary"
                  placeholder="Ej: 5000"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Notas Adicionales</label>
                <textarea 
                  value={proposalData.notes}
                  onChange={e => setProposalData({...proposalData, notes: e.target.value})}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary h-24 resize-none"
                  placeholder="Términos de pago, logística, etc..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-lg shadow-xl shadow-primary/20 active:scale-[0.98] transition-all"
              >
                Confirmar y Enviar
              </button>
            </form>
          </motion.div>
        </div>
      )}

      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-headline">
            <span>Operaciones</span>
            <ChevronRight className="w-3 h-3" />
            <span>Sala de Negociación</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary font-bold">MATCH-CN-4920</span>
          </div>
          <h2 className="text-3xl font-extrabold text-primary tracking-tighter font-headline">Sala de Negociación: Cobre Catódico Grado A</h2>
        </div>
        <div className="flex items-center gap-3">
          <AnimatePresence>
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-on-tertiary-container text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg"
              >
                {statusMessage}
              </motion.div>
            )}
          </AnimatePresence>
          <span className="px-3 py-1 bg-on-tertiary-container/10 text-on-tertiary-container text-[10px] font-black uppercase tracking-widest rounded-full border border-on-tertiary-container/20">
            Estado: NEGOCIACIÓN
          </span>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors"><Share2 className="w-5 h-5" /></button>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors"><Printer className="w-5 h-5" /></button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 space-y-6">
          <section className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-on-tertiary-container shadow-sm">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Commodity</p>
                <p className="text-lg font-bold text-primary">Cobre (CU) 99.99%</p>
                <p className="text-[11px] text-on-surface-variant">Origen: Antofagasta, Chile</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Cantidad</p>
                <p className="text-lg font-bold text-primary">5,000 MT</p>
                <p className="text-[11px] text-on-surface-variant">Suministro Mensual x 12</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Precio Acordado</p>
                <p className="text-lg font-bold text-primary">LME - 2.5%</p>
                <p className="text-[11px] text-on-surface-variant">Incoterm: CIF Rotterdam</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-1">Referencia Match</p>
                <p className="text-lg font-bold text-primary">#4920-X</p>
                <p className="text-[11px] text-on-tertiary-container font-semibold">Broker: CORE-COMM-INTL</p>
              </div>
            </div>
          </section>

          <div className="bg-primary-container text-white p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Lock className="w-5 h-5 text-on-tertiary-container" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider">Identidades Protegidas por Protocolo</p>
                <p className="text-[10px] text-on-primary-container">Las identidades reales se revelarán automáticamente al aprobar el borrador SPA final.</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-on-primary-container/20 flex items-center justify-center text-[10px] font-bold">V</div>
                <span className="text-[11px] font-medium tracking-wide">Vendedor #0988</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-on-primary-container/20 flex items-center justify-center text-[10px] font-bold">C</div>
                <span className="text-[11px] font-medium tracking-wide">Comprador #1234</span>
              </div>
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex justify-between items-center px-2">
              <h3 className="text-sm font-black uppercase tracking-widest font-headline">Flujo de Documentación</h3>
              <label className="text-[10px] font-bold text-on-tertiary-container uppercase tracking-widest flex items-center gap-1 cursor-pointer hover:underline">
                <Plus className="w-4 h-4" /> 
                Subir Nuevo Documento
                <input type="file" className="hidden" onChange={handleFileUpload} />
              </label>
            </div>

            {documents.map((doc) => (
              <div key={doc.id} className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between group hover:shadow-md transition-shadow border border-transparent hover:border-outline-variant/20">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded flex items-center justify-center",
                    doc.type === 'approved' ? "bg-green-50" : doc.type === 'pending' ? "bg-blue-50" : "bg-orange-50"
                  )}>
                    {doc.type === 'approved' ? (
                      <CheckCircle2 className="text-green-600 w-6 h-6" />
                    ) : doc.type === 'pending' ? (
                      <Clock className="text-on-tertiary-container w-6 h-6" />
                    ) : (
                      <Upload className="text-orange-600 w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold">{doc.name}</p>
                      <span className={cn(
                        "px-2 py-0.5 text-[9px] font-black rounded",
                        doc.type === 'approved' ? "bg-green-100 text-green-700" : doc.type === 'pending' ? "bg-blue-100 text-on-tertiary-container" : "bg-orange-100 text-orange-700"
                      )}>
                        {doc.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant">Ref: {doc.ref} • {doc.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-[10px] font-bold">{doc.type === 'approved' ? 'Aprobado por Compliance' : 'Pendiente de Revisión'}</p>
                    <p className="text-[9px] text-on-surface-variant">{doc.date}</p>
                  </div>
                  <button className="text-on-surface-variant hover:text-primary transition-colors"><Download className="w-5 h-5" /></button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors"><Eye className="w-5 h-5" /></button>
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="col-span-4 space-y-6">
          <section className="bg-surface-container-low rounded-xl p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-black uppercase tracking-widest font-headline">Registro de Auditoría</h3>
              <History className="text-on-surface-variant w-5 h-5" />
            </div>
            <div className="space-y-6 flex-1 relative">
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-outline-variant/30"></div>
              {auditLog.map((item, i) => (
                <div key={i} className="relative pl-10">
                  <div className={cn("absolute left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-surface-container-low", item.color)}></div>
                  <p className="text-[11px] font-bold">{item.title}</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">{item.desc}</p>
                  <p className="text-[9px] text-outline mt-1 font-mono uppercase tracking-tighter">{item.time}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/20">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-3">Resumen de Cumplimiento</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px]">KYC/KYB Verificado</span>
                  <CheckCircle2 className="text-green-600 w-4 h-4" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px]">Prueba de Producto (POP)</span>
                  <Clock className="text-on-tertiary-container w-4 h-4" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center p-6 bg-surface-container-lowest rounded-xl shadow-lg border-t-2 border-primary">
        <div className="flex items-center gap-6">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-on-tertiary-container flex items-center justify-center text-white font-bold text-xs">V</div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-white font-bold text-xs">B</div>
            <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold text-xs">C</div>
          </div>
          <div>
            <p className="text-xs font-bold leading-tight">Mesa de Negociación Activa</p>
            <p className="text-[10px] text-on-surface-variant">Esperando aprobación de Comprador #1234</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handleRequestVideo}
            disabled={!canNegotiate}
            className="px-8 py-3 bg-surface-container-high text-on-surface text-xs font-black uppercase tracking-widest rounded transition-all hover:bg-surface-container-highest disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t.requestVideoConf}
          </button>
          <button 
            onClick={handleSendProposal}
            disabled={!canNegotiate}
            className="px-8 py-3 bg-primary text-white text-xs font-black uppercase tracking-widest rounded shadow-xl shadow-black/10 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t.sendProposal}
          </button>
        </div>
      </div>
    </div>
  );
};

const Markets = ({ selectedCategory, language, currency }: { selectedCategory: string, language: 'es' | 'en', currency: string }) => {
  const t = TRANSLATIONS[language];
  const [actionStatus, setActionStatus] = useState<string | null>(null);
  const [activeAction, setActiveAction] = useState<{ type: 'analyze' | 'trade', commodity: any } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const commodities = [
    { name: 'Cobre (LME)', price: formatCurrency(9432.50, currency), change: '+1.2%', trend: 'up', category: t.metals, volume: '12.4k tons', high: formatCurrency(9510, currency), low: formatCurrency(9380, currency) },
    { name: 'Petróleo Brent', price: formatCurrency(82.14, currency), change: '-0.5%', trend: 'down', category: t.energy, volume: '450k bbl', high: formatCurrency(83.40, currency), low: formatCurrency(81.90, currency) },
    { name: 'Oro (Spot)', price: formatCurrency(2341.20, currency), change: '+0.8%', trend: 'up', category: t.metals, volume: '85k oz', high: formatCurrency(2355, currency), low: formatCurrency(2330, currency) },
    { name: 'Gas Natural', price: formatCurrency(2.45, currency), change: '+4.2%', trend: 'up', category: t.energy, volume: '1.2M MMBtu', high: formatCurrency(2.52, currency), low: formatCurrency(2.38, currency) },
    { name: 'Trigo (CBOT)', price: formatCurrency(582.00, currency), change: '-1.1%', trend: 'down', category: t.agriculture, volume: '32k contracts', high: formatCurrency(595, currency), low: formatCurrency(578, currency) },
    { name: 'Litio', price: formatCurrency(13500.00, currency), change: '0.0%', trend: 'neutral', category: t.metals, volume: '5.2k tons', high: formatCurrency(13600, currency), low: formatCurrency(13450, currency) },
  ];

  const filteredCommodities = selectedCategory === 'Global' 
    ? commodities 
    : commodities.filter(c => c.category === (selectedCategory === 'Metales' ? t.metals : selectedCategory === 'Energía' ? t.energy : t.agriculture));

  const handleAction = (type: 'analyze' | 'trade', commodity: any) => {
    setActiveAction({ type, commodity });
  };

  const handleTradeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsProcessing(false);
    setActionStatus(`Orden ejecutada para ${activeAction?.commodity.name}`);
    setActiveAction(null);
    setTimeout(() => setActionStatus(null), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-primary tracking-tighter font-headline">{t.marketMonitor}</h2>
          <p className="text-on-surface-variant text-sm mt-1">{t.realTimePrices}</p>
        </div>
        <AnimatePresence>
          {actionStatus && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-on-tertiary-container text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg"
            >
              {actionStatus}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommodities.map((item, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{item.category}</span>
                <h3 className="text-lg font-bold text-primary mt-1">{item.name}</h3>
              </div>
              <div className={cn(
                "p-2 rounded-lg",
                item.trend === 'up' ? "bg-green-50 text-green-600" : item.trend === 'down' ? "bg-red-50 text-red-600" : "bg-slate-50 text-slate-600"
              )}>
                {item.trend === 'up' ? <BarChart3 className="w-5 h-5" /> : <History className="w-5 h-5" />}
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-black text-primary font-headline">{item.price}</div>
              <div className={cn(
                "text-xs font-bold px-2 py-1 rounded",
                item.trend === 'up' ? "text-green-600 bg-green-50" : item.trend === 'down' ? "text-red-600 bg-red-50" : "text-slate-600 bg-slate-50"
              )}>
                {item.change}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/5 flex gap-2">
              <button 
                onClick={() => handleAction('analyze', item)}
                className="flex-1 py-2 text-[10px] font-bold uppercase tracking-widest border border-outline-variant/20 rounded hover:bg-surface-container transition-colors flex items-center justify-center gap-2"
              >
                <LineChart className="w-3 h-3" /> Analizar
              </button>
              <button 
                onClick={() => handleAction('trade', item)}
                className="flex-1 py-2 text-[10px] font-bold uppercase tracking-widest bg-primary text-white rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3 h-3" /> Operar
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeAction && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setActiveAction(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/10"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "p-2 rounded-xl",
                    activeAction.commodity.trend === 'up' ? "bg-green-100 text-green-700" : activeAction.commodity.trend === 'down' ? "bg-red-100 text-red-700" : "bg-slate-100 text-slate-700"
                  )}>
                    {activeAction.type === 'analyze' ? <LineChart className="w-6 h-6" /> : <ShoppingBag className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-primary font-headline uppercase tracking-tighter">
                      {activeAction.type === 'analyze' ? 'Análisis Técnico' : 'Ejecutar Operación'}
                    </h3>
                    <p className="text-[10px] text-outline font-bold tracking-widest uppercase mt-1">{activeAction.commodity.name} • {activeAction.commodity.category}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveAction(null)}
                  className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                {activeAction.type === 'analyze' ? (
                  <div className="space-y-8">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                        <p className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">Precio Actual</p>
                        <p className="text-xl font-black text-primary">{activeAction.commodity.price}</p>
                        <span className={cn(
                          "text-[10px] font-bold",
                          activeAction.commodity.trend === 'up' ? "text-green-600" : "text-red-600"
                        )}>{activeAction.commodity.change}</span>
                      </div>
                      <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                        <p className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">Volumen 24h</p>
                        <p className="text-xl font-black text-primary">{activeAction.commodity.volume}</p>
                      </div>
                      <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                        <p className="text-[9px] font-bold text-outline uppercase tracking-widest mb-1">Rango Diario</p>
                        <p className="text-xs font-bold text-primary">{activeAction.commodity.low} - {activeAction.commodity.high}</p>
                      </div>
                    </div>

                    <div className="h-48 bg-surface-container-high rounded-xl relative overflow-hidden border border-outline-variant/10">
                      <div className="absolute inset-0 ledger-dots opacity-20"></div>
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <motion.path
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          d="M0,100 Q50,80 100,120 T200,60 T300,90 T400,40 T500,70 T600,20"
                          fill="none"
                          stroke={activeAction.commodity.trend === 'up' ? "#10b981" : "#ef4444"}
                          strokeWidth="3"
                        />
                        <path
                          d="M0,100 Q50,80 100,120 T200,60 T300,90 T400,40 T500,70 T600,20 V200 H0 Z"
                          fill={activeAction.commodity.trend === 'up' ? "url(#gradient-up)" : "url(#gradient-down)"}
                          opacity="0.1"
                        />
                        <defs>
                          <linearGradient id="gradient-up" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                          <linearGradient id="gradient-down" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="px-2 py-1 bg-white/80 backdrop-blur-sm rounded text-[8px] font-bold uppercase tracking-widest border border-outline-variant/10">1D</span>
                        <span className="px-2 py-1 bg-primary text-white rounded text-[8px] font-bold uppercase tracking-widest shadow-lg">1W</span>
                        <span className="px-2 py-1 bg-white/80 backdrop-blur-sm rounded text-[8px] font-bold uppercase tracking-widest border border-outline-variant/10">1M</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black text-primary uppercase tracking-widest border-b border-outline-variant/10 pb-2 flex items-center gap-2">
                        <Activity className="w-3 h-3" /> Insights de IA
                      </h4>
                      <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 space-y-4">
                        <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                          <p className="text-[9px] font-bold text-green-700 uppercase tracking-widest mb-1">Señal de Compra</p>
                          <p className="text-xs font-medium text-green-800 leading-relaxed">Fuerte soporte detectado en niveles actuales. La demanda industrial se mantiene sólida.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                          <p className="text-[9px] font-bold text-blue-700 uppercase tracking-widest mb-1">Correlación</p>
                          <p className="text-xs font-medium text-blue-800 leading-relaxed">Alta correlación con el índice de manufactura global (0.84).</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleTradeSubmit} className="space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-primary uppercase tracking-widest">Tipo de Orden</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button type="button" className="py-3 bg-primary text-white rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-blue-500/20">Compra</button>
                          <button type="button" className="py-3 bg-surface-container-high text-on-surface-variant rounded-xl font-bold text-[10px] uppercase tracking-widest border border-outline-variant/10">Venta</button>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-primary uppercase tracking-widest">Cantidad</label>
                        <div className="relative">
                          <input type="number" placeholder="0.00" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-primary transition-colors" />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-outline">UNIDADES</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-primary uppercase tracking-widest">Precio Límite</label>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                        <input type="text" defaultValue={activeAction.commodity.price.replace('$', '')} className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl pl-10 pr-4 py-3 text-sm font-bold focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    </div>

                    <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 space-y-4">
                      <div className="flex justify-between items-center">
                        <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Valor Estimado</p>
                        <p className="text-lg font-black text-primary">$0.00</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Comisión de Red (0.15%)</p>
                        <p className="text-sm font-bold text-on-surface-variant">$0.00</p>
                      </div>
                      <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Total a Liquidar</p>
                        <p className="text-xl font-black text-on-tertiary-container">$0.00</p>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isProcessing}
                      className={cn(
                        "w-full cta-gradient text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3",
                        isProcessing ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.01] active:scale-95"
                      )}
                    >
                      {isProcessing ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Zap className="w-5 h-5" />
                      )}
                      {isProcessing ? 'Procesando...' : 'Confirmar Operación'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-2 font-headline">Análisis de Sentimiento del Mercado</h3>
            <p className="text-sm text-on-surface-variant max-w-xl">Nuestro motor de IA ha detectado una tendencia alcista en los metales base debido a la interrupción de suministros en el sudeste asiático.</p>
            <div className="mt-6 flex gap-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Confianza</span>
                <span className="text-lg font-black text-on-tertiary-container">88%</span>
              </div>
              <div className="flex flex-col border-l border-outline-variant/20 pl-4">
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Impacto</span>
                <span className="text-lg font-black text-primary">ALTO</span>
              </div>
            </div>
          </div>
          <button className="cta-gradient text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl shadow-blue-500/20 whitespace-nowrap">
            VER REPORTE COMPLETO
          </button>
        </div>
      </div>
    </div>
  );
};

const Settlements = ({ language, currency, userRole }: { language: 'es' | 'en', currency: string, userRole: string }) => {
  const t = TRANSLATIONS[language];
  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedSettlement, setSelectedSettlement] = useState<any>(null);
  const [showReconciliation, setShowReconciliation] = useState(false);
  const [reconcilingItem, setReconcilingItem] = useState<any>(null);
  const [incomingPayments, setIncomingPayments] = useState([
    { id: 'PAY-001', amount: 842000, date: '2026-03-24', bank: 'Chase Manhattan', ref: 'TXN-0019283', matched: false },
    { id: 'PAY-002', amount: 1240000, date: '2026-03-26', bank: 'HSBC London', ref: 'TXN-0019284', matched: false },
    { id: 'PAY-003', amount: 415000, date: '2026-03-25', bank: 'Santander Madrid', ref: 'TXN-0019285', matched: false }, // Discrepancy: 415500 vs 415000
  ]);
  const [settlements, setSettlements] = useState([
    { id: 'SET-9012', client: 'REFI-44', amount: 842000, status: 'Completado', date: '2026-03-24', type: 'Pago', bank: 'Chase Manhattan', ref: 'TXN-0019283', fee: 1200, method: 'SWIFT', docs: [{ name: 'Invoice_9012.pdf', date: '2026-03-24' }] },
    { id: 'SET-9013', client: 'MINE-014', amount: 1240000, status: 'Pendiente', date: '2026-03-26', type: 'Cobro', bank: 'HSBC London', ref: 'TXN-0019284', fee: 2500, method: 'Wire Transfer', docs: [] },
    { id: 'SET-9014', client: 'FOOD-08', amount: 415500, status: 'En Proceso', date: '2026-03-25', type: 'Pago', bank: 'Santander Madrid', ref: 'TXN-0019285', fee: 850, method: 'SEPA', docs: [] },
    { id: 'SET-9015', client: 'AGRO-42', amount: 124000, status: 'Completado', date: '2026-03-22', type: 'Cobro', bank: 'Rabobank NL', ref: 'TXN-0019286', fee: 400, method: 'Wire Transfer', docs: [] },
    { id: 'SET-9016', client: 'TRAD-99', amount: 560000, status: 'Completado', date: '2026-03-21', type: 'Pago', bank: 'Standard Chartered', ref: 'TXN-0019287', fee: 1100, method: 'SWIFT', docs: [] },
    { id: 'SET-9017', client: 'INST-772', amount: 2100000, status: 'Pendiente', date: '2026-03-27', type: 'Cobro', bank: 'Goldman Sachs', ref: 'TXN-0019288', fee: 4200, method: 'Wire Transfer', docs: [] },
    { id: 'SET-9018', client: 'REFI-44', amount: 320000, status: 'Completado', date: '2026-03-20', type: 'Pago', bank: 'Chase Manhattan', ref: 'TXN-0019289', fee: 650, method: 'SWIFT', docs: [] },
    { id: 'SET-9019', client: 'MINE-014', amount: 980000, status: 'En Proceso', date: '2026-03-26', type: 'Cobro', bank: 'HSBC London', ref: 'TXN-0019290', fee: 1950, method: 'Wire Transfer', docs: [] },
    { id: 'SET-9020', client: 'FOOD-08', amount: 150000, status: 'Completado', date: '2026-03-19', type: 'Pago', bank: 'Santander Madrid', ref: 'TXN-0019291', fee: 300, method: 'SEPA', docs: [] },
    { id: 'SET-9021', client: 'AGRO-42', amount: 75000, status: 'Pendiente', date: '2026-03-28', type: 'Cobro', bank: 'Rabobank NL', ref: 'TXN-0019292', fee: 150, method: 'Wire Transfer', docs: [] },
  ]);
  const itemsPerPage = 5;

  const filteredSettlements = settlements.filter(item => {
    const matchesDate = (() => {
      if (!startDate && !endDate) return true;
      const itemDate = new Date(item.date);
      if (startDate && itemDate < new Date(startDate)) return false;
      if (endDate && itemDate > new Date(endDate)) return false;
      return true;
    })();

    const matchesSearch = searchQuery === '' || 
      item.ref.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.bank.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === 'all' || item.type === (typeFilter === 'payment' ? 'Pago' : 'Cobro');
    const matchesStatus = statusFilter === 'all' || item.status === (statusFilter === 'completed' ? 'Completado' : statusFilter === 'pending' ? 'Pendiente' : 'En Proceso');

    return matchesDate && matchesSearch && matchesType && matchesStatus;
  });

  const handleFileUpload = (settlementId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSettlements(prev => prev.map(s => {
        if (s.id === settlementId) {
          return {
            ...s,
            docs: [...s.docs, { name: file.name, date: new Date().toISOString().split('T')[0] }]
          };
        }
        return s;
      }));
      // Update selected settlement if it's the one being modified
      if (selectedSettlement?.id === settlementId) {
        setSelectedSettlement((prev: any) => ({
          ...prev,
          docs: [...prev.docs, { name: file.name, date: new Date().toISOString().split('T')[0] }]
        }));
      }
    }
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedSettlements = [...filteredSettlements].sort((a: any, b: any) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedSettlements.length / itemsPerPage);
  const paginatedSettlements = sortedSettlements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const SortIcon = ({ column }: { column: string }) => {
    if (sortConfig?.key !== column) return <ArrowUpDown className="w-3 h-3 ml-1 opacity-30" />;
    return sortConfig.direction === 'asc' 
      ? <ChevronUp className="w-3 h-3 ml-1 text-primary" /> 
      : <ChevronDown className="w-3 h-3 ml-1 text-primary" />;
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-primary tracking-tighter font-headline">{t.settlements}</h2>
          <p className="text-on-surface-variant text-sm mt-1">{t.consolidatedView}</p>
        </div>
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/10">
            <Filter className="w-4 h-4 text-outline" />
            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-transparent text-[10px] font-bold uppercase tracking-widest focus:outline-none"
            >
              <option value="all">{t.all} ({t.type})</option>
              <option value="payment">{t.payment}</option>
              <option value="collection">{t.collection}</option>
            </select>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/10">
            <Activity className="w-4 h-4 text-outline" />
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent text-[10px] font-bold uppercase tracking-widest focus:outline-none"
            >
              <option value="all">{t.all} ({t.status})</option>
              <option value="completed">{t.completed}</option>
              <option value="pending">{t.pending}</option>
              <option value="inProcess">{t.inProcess}</option>
            </select>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/10 flex-1 md:flex-none">
            <Search className="w-4 h-4 text-outline" />
            <input 
              type="text" 
              placeholder={t.searchByRefOrBank}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-[10px] font-bold uppercase tracking-widest focus:outline-none w-full md:w-48"
            />
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/10">
            <Calendar className="w-4 h-4 text-outline" />
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-transparent text-[10px] font-bold uppercase tracking-widest focus:outline-none"
            />
            <span className="text-outline">/</span>
            <input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-transparent text-[10px] font-bold uppercase tracking-widest focus:outline-none"
            />
          </div>
          <button className="bg-surface-container-high px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <Download className="w-4 h-4" /> {t.export}
          </button>
          <button 
            onClick={() => setShowReconciliation(true)}
            className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all active:scale-95"
          >
            {t.reconciliation}
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant/10">
              <th 
                className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant cursor-pointer hover:bg-surface-container-high transition-colors"
                onClick={() => handleSort('id')}
              >
                <div className="flex items-center">ID <SortIcon column="id" /></div>
              </th>
              <th 
                className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant cursor-pointer hover:bg-surface-container-high transition-colors"
                onClick={() => handleSort('client')}
              >
                <div className="flex items-center">{t.client} <SortIcon column="client" /></div>
              </th>
              <th 
                className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant cursor-pointer hover:bg-surface-container-high transition-colors"
                onClick={() => handleSort('type')}
              >
                <div className="flex items-center">{t.type} <SortIcon column="type" /></div>
              </th>
              <th 
                className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant cursor-pointer hover:bg-surface-container-high transition-colors"
                onClick={() => handleSort('amount')}
              >
                <div className="flex items-center">{t.amount} <SortIcon column="amount" /></div>
              </th>
              <th 
                className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant cursor-pointer hover:bg-surface-container-high transition-colors"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center">{t.date} <SortIcon column="date" /></div>
              </th>
              <th 
                className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant cursor-pointer hover:bg-surface-container-high transition-colors"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center">{t.status} <SortIcon column="status" /></div>
              </th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">{t.actions}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {paginatedSettlements.map((item) => (
              <tr 
                key={item.id} 
                className="hover:bg-surface-container-low/50 transition-colors group cursor-pointer"
                onClick={() => setSelectedSettlement(item)}
              >
                <td className="px-6 py-4 text-xs font-bold text-primary">{item.id}</td>
                <td className="px-6 py-4 text-xs font-medium">{item.client}</td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "text-[9px] font-black px-2 py-0.5 rounded uppercase",
                    item.type === 'Pago' ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700"
                  )}>
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs font-black text-primary">{formatCurrency(item.amount, currency, language === 'es' ? 'es-ES' : 'en-US')}</td>
                <td className="px-6 py-4 text-xs text-on-surface-variant">{item.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      item.status === 'Completado' ? "bg-green-500" : item.status === 'Pendiente' ? "bg-orange-500" : "bg-blue-500"
                    )}></div>
                    <span className="text-[10px] font-bold uppercase tracking-tight">{item.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination Controls */}
        <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between border-t border-outline-variant/10">
          <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
            Mostrando {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, sortedSettlements.length)} de {sortedSettlements.length}
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-1 rounded hover:bg-surface-container-high disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={cn(
                  "w-6 h-6 text-[10px] font-bold rounded transition-all",
                  currentPage === i + 1 ? "bg-primary text-white" : "hover:bg-surface-container-high text-on-surface-variant"
                )}
              >
                {i + 1}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1 rounded hover:bg-surface-container-high disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedSettlement && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedSettlement(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-surface-container-lowest w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/10"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
                <div>
                  <h3 className="text-xl font-black text-primary font-headline uppercase tracking-tighter">{t.settlementDetails}</h3>
                  <p className="text-[10px] text-outline font-bold tracking-widest uppercase mt-1">{t.ref}: {selectedSettlement.id}</p>
                </div>
                <button 
                  onClick={() => setSelectedSettlement(null)}
                  className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8 space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-outline uppercase tracking-widest">{t.client}</p>
                    <p className="text-sm font-bold text-primary">{selectedSettlement.client}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-outline uppercase tracking-widest">{t.date}</p>
                    <p className="text-sm font-bold text-primary">{selectedSettlement.date}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-outline uppercase tracking-widest">{t.type}</p>
                    <span className={cn(
                      "text-[10px] font-black px-2 py-0.5 rounded uppercase inline-block",
                      selectedSettlement.type === 'Pago' ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700"
                    )}>
                      {selectedSettlement.type}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-outline uppercase tracking-widest">{t.status}</p>
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        selectedSettlement.status === 'Completado' ? "bg-green-500" : selectedSettlement.status === 'Pendiente' ? "bg-orange-500" : "bg-blue-500"
                      )}></div>
                      <p className="text-sm font-bold text-primary">{selectedSettlement.status}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest">{t.amount}</p>
                    <p className="text-lg font-black text-primary">{formatCurrency(selectedSettlement.amount, currency, language === 'es' ? 'es-ES' : 'en-US')}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest">{t.fee}</p>
                    <p className="text-sm font-bold text-on-surface-variant">{formatCurrency(selectedSettlement.fee, currency, language === 'es' ? 'es-ES' : 'en-US')}</p>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Total</p>
                    <p className="text-xl font-black text-on-tertiary-container">{formatCurrency(selectedSettlement.amount, currency, language === 'es' ? 'es-ES' : 'en-US')}</p>
                  </div>
                </div>

                <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/10 space-y-4">
                  <div className="flex justify-between items-center border-b border-outline-variant/10 pb-2">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                      <FileText className="w-3 h-3" /> {t.associatedDocuments}
                    </h4>
                    {userRole !== 'viewer' && (
                      <label className="text-[9px] font-bold text-primary hover:underline cursor-pointer flex items-center gap-1">
                        <Plus className="w-3 h-3" /> {t.uploadDocument}
                        <input 
                          type="file" 
                          className="hidden" 
                          onChange={(e) => handleFileUpload(selectedSettlement.id, e)}
                        />
                      </label>
                    )}
                  </div>
                  <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                    {selectedSettlement.docs && selectedSettlement.docs.length > 0 ? (
                      selectedSettlement.docs.map((doc: any, i: number) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-surface-container-lowest rounded border border-outline-variant/5 group">
                          <div className="flex items-center gap-2">
                            <File className="w-3 h-3 text-outline" />
                            <span className="text-[10px] font-medium truncate max-w-[150px]">{doc.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[8px] text-outline">{doc.date}</span>
                            <button className="p-1 hover:bg-surface-container rounded transition-colors">
                              <Download className="w-3 h-3 text-primary" />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-[10px] text-outline italic text-center py-2">{t.noDocuments}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-widest border-b border-outline-variant/10 pb-2">{t.bankDetails}</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold text-outline uppercase tracking-widest">{t.bank}</p>
                      <p className="text-xs font-medium">{selectedSettlement.bank}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold text-outline uppercase tracking-widest">{t.method}</p>
                      <p className="text-xs font-medium">{selectedSettlement.method}</p>
                    </div>
                    <div className="col-span-2 space-y-1">
                      <p className="text-[9px] font-bold text-outline uppercase tracking-widest">{t.ref}</p>
                      <p className="text-xs font-mono bg-surface-container px-2 py-1 rounded border border-outline-variant/5">{selectedSettlement.ref}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-surface-container-low border-t border-outline-variant/10 flex flex-col gap-3">
                <div className="flex gap-3 w-full">
                  <button className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> {t.downloadReceipt || 'Descargar Comprobante'}
                  </button>
                  <button className="px-6 border border-outline-variant/20 text-primary py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-surface-container transition-colors">
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
                {selectedSettlement.status !== 'Completado' && (
                  <button 
                    onClick={() => {
                      setReconcilingItem(selectedSettlement);
                      setShowReconciliation(true);
                      setSelectedSettlement(null);
                    }}
                    className="w-full bg-on-tertiary-container text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-tertiary/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" /> {t.matchPayments}
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {showReconciliation && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => {
              setShowReconciliation(false);
              setReconcilingItem(null);
            }}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-surface-container-lowest w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/10"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
                <div>
                  <h3 className="text-xl font-black text-primary font-headline uppercase tracking-tighter">{t.reconciliation}</h3>
                  <p className="text-[10px] text-outline font-bold tracking-widest uppercase mt-1">{t.reconcileAccounts}</p>
                </div>
                <button 
                  onClick={() => {
                    setShowReconciliation(false);
                    setReconcilingItem(null);
                  }}
                  className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 max-h-[80vh] overflow-y-auto">
                {/* Left Side: Settlements List or Selected Item */}
                <div className="space-y-6">
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-4">Pago a Conciliar</h4>
                    {reconcilingItem ? (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold">{reconcilingItem.id}</span>
                          <span className={cn(
                            "text-[9px] font-black px-2 py-0.5 rounded uppercase",
                            reconcilingItem.type === 'Pago' ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                          )}>
                            {reconcilingItem.type}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-outline uppercase tracking-widest">{t.client}</span>
                          <span className="text-xs font-bold">{reconcilingItem.client}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-outline uppercase tracking-widest">{t.expectedAmount}</span>
                          <span className="text-sm font-black text-primary">{formatCurrency(reconcilingItem.amount, currency, language === 'es' ? 'es-ES' : 'en-US')}</span>
                        </div>
                        <button 
                          onClick={() => setReconcilingItem(null)}
                          className="w-full mt-2 text-[10px] font-bold text-error hover:underline uppercase tracking-widest"
                        >
                          {t.changeSelection}
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-[10px] text-outline italic mb-3">Seleccione un registro de la tabla para conciliar</p>
                        <div className="max-h-[300px] overflow-y-auto space-y-2">
                          {settlements.filter(s => s.status !== 'Completado').map(s => (
                            <button 
                              key={s.id}
                              onClick={() => setReconcilingItem(s)}
                              className="w-full text-left p-3 bg-surface-container-low hover:bg-surface-container-high rounded-lg border border-outline-variant/10 transition-colors flex justify-between items-center"
                            >
                              <div>
                                <p className="text-xs font-bold">{s.id}</p>
                                <p className="text-[10px] text-outline">{s.client}</p>
                              </div>
                              <p className="text-xs font-black text-primary">{formatCurrency(s.amount, currency, language === 'es' ? 'es-ES' : 'en-US')}</p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {reconcilingItem && (
                    <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/10">
                      <h4 className="text-[10px] font-black text-outline uppercase tracking-widest mb-4">Resumen de Conciliación</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-outline uppercase tracking-widest">Total Pagos Emparejados</span>
                          <span className="text-xs font-bold">
                            {formatCurrency(
                              incomingPayments.filter(p => p.matched && p.ref === reconcilingItem.ref).reduce((acc, p) => acc + p.amount, 0),
                              currency,
                              language === 'es' ? 'es-ES' : 'en-US'
                            )}
                          </span>
                        </div>
                        
                        {(() => {
                          const matchedTotal = incomingPayments.filter(p => p.matched && p.ref === reconcilingItem.ref).reduce((acc, p) => acc + p.amount, 0);
                          const discrepancy = reconcilingItem.amount - matchedTotal;
                          
                          if (matchedTotal > 0) {
                            return (
                              <div className={cn(
                                "p-3 rounded-lg flex items-center gap-3",
                                discrepancy === 0 ? "bg-green-50 text-green-700 border border-green-100" : "bg-error/5 text-error border border-error/10"
                              )}>
                                {discrepancy === 0 ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                                <div>
                                  <p className="text-[10px] font-black uppercase tracking-widest">
                                    {discrepancy === 0 ? t.perfectReconciliation : t.discrepancy}
                                  </p>
                                  {discrepancy !== 0 && (
                                    <p className="text-xs font-bold">{t.difference}: {formatCurrency(Math.abs(discrepancy), currency, language === 'es' ? 'es-ES' : 'en-US')}</p>
                                  )}
                                </div>
                              </div>
                            );
                          }
                          return null;
                        })()}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Incoming Payments to Match */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[10px] font-black text-outline uppercase tracking-widest">{t.incomingPaymentsBank}</h4>
                    <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full">
                      {incomingPayments.filter(p => !p.matched).length} {t.pending}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {incomingPayments.map(payment => (
                      <div 
                        key={payment.id}
                        className={cn(
                          "p-4 rounded-xl border transition-all",
                          payment.matched 
                            ? "bg-green-50/50 border-green-100 opacity-60" 
                            : "bg-surface-container-lowest border-outline-variant/10 hover:border-primary/30"
                        )}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="text-xs font-bold text-primary">{payment.bank}</p>
                            <p className="text-[10px] text-outline font-medium tracking-widest uppercase">{payment.ref}</p>
                          </div>
                          <p className="text-sm font-black text-primary">{formatCurrency(payment.amount, currency, language === 'es' ? 'es-ES' : 'en-US')}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-[10px] text-outline">{payment.date}</span>
                          {reconcilingItem && (
                            <button 
                              disabled={payment.matched}
                              onClick={() => {
                                setIncomingPayments(prev => prev.map(p => p.id === payment.id ? { ...p, matched: true } : p));
                              }}
                              className={cn(
                                "text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-lg transition-all",
                                payment.matched 
                                  ? "text-green-600 bg-green-100" 
                                  : "text-primary border border-primary/20 hover:bg-primary hover:text-white"
                              )}
                            >
                              {payment.matched ? "Emparejado" : "Emparejar"}
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-outline-variant/10 bg-surface-container-low flex gap-4">
                <button 
                  onClick={() => {
                    setShowReconciliation(false);
                    setReconcilingItem(null);
                  }}
                  className="flex-1 border border-outline-variant/20 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-surface-container transition-all"
                >
                  Cancelar
                </button>
                <button 
                  disabled={!reconcilingItem || !incomingPayments.some(p => p.matched && p.ref === reconcilingItem.ref)}
                  onClick={() => {
                    if (reconcilingItem) {
                      const matchedTotal = incomingPayments.filter(p => p.matched && p.ref === reconcilingItem.ref).reduce((acc, p) => acc + p.amount, 0);
                      const discrepancy = reconcilingItem.amount - matchedTotal;
                      
                      setSettlements(prev => prev.map(s => s.id === reconcilingItem.id ? { ...s, status: discrepancy === 0 ? 'Completado' : 'En Proceso' } : s));
                      setShowReconciliation(false);
                      setReconcilingItem(null);
                      // Reset matches for demo
                      setIncomingPayments(prev => prev.map(p => ({ ...p, matched: false })));
                    }
                  }}
                  className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                >
                  Confirmar Conciliación
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Reports = ({ language }: { language: 'es' | 'en' }) => {
  const t = TRANSLATIONS[language];
  const data = [
    { name: t.jan, volume: 400, comms: 24 },
    { name: t.feb, volume: 300, comms: 18 },
    { name: t.mar, volume: 600, comms: 36 },
    { name: t.apr, volume: 800, comms: 48 },
    { name: t.may, volume: 500, comms: 30 },
    { name: t.jun, volume: 900, comms: 54 },
  ];

  const pieData = [
    { name: t.metals, value: 45 },
    { name: t.energy, value: 30 },
    { name: t.agriculture, value: 25 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-extrabold text-primary tracking-tighter font-headline">{t.reportsAndAnalytics}</h2>
        <p className="text-on-surface-variant text-sm mt-1">{t.performanceVisualization}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant mb-6">{t.tradingVolume}</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0088FE" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0088FE" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  labelStyle={{ fontWeight: 800, color: '#1a1a1a' }}
                />
                <Area type="monotone" dataKey="volume" stroke="#0088FE" strokeWidth={3} fillOpacity={1} fill="url(#colorVolume)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant mb-6">{t.categoryDistribution}</h3>
          <div className="h-64 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-black text-primary">100%</span>
              <span className="text-[8px] font-bold text-outline uppercase tracking-widest">{t.totalNetwork}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-container text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2 font-headline">{t.generateCustomReport}</h3>
          <p className="text-sm text-on-primary-container max-w-md">{t.reportParamsDesc}</p>
        </div>
        <button className="bg-white text-primary px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl shadow-black/10 hover:scale-105 transition-all active:scale-95">
          {t.configureReport}
        </button>
      </div>
    </div>
  );
};

const SettingsView = ({ language, userRole, setUserRole }: { language: 'es' | 'en', userRole: string, setUserRole: (role: any) => void }) => {
  const t = TRANSLATIONS[language];
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) return;
    setShowSuccess(true);
    setPasswords({ current: '', new: '', confirm: '' });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-primary tracking-tighter font-headline">{t.systemSettings}</h2>
          <p className="text-on-surface-variant text-sm mt-1">{t.manageProfileDesc}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg border border-outline-variant/10">
            <Shield className="w-4 h-4 text-primary" />
            <select 
              value={userRole}
              onChange={(e) => setUserRole(e.target.value as any)}
              className="bg-transparent text-[10px] font-black uppercase tracking-widest focus:outline-none"
            >
              <option value="admin">{t.adminRole}</option>
              <option value="operator">{t.operatorRole}</option>
              <option value="viewer">{t.viewerRole}</option>
            </select>
          </div>
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg"
              >
                {t.passwordChanged}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="space-y-6">
        <section className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant mb-6">{t.userProfile}</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t.fullName}</label>
              <input type="text" defaultValue="Alexander Broker" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t.institutionalEmail}</label>
              <input type="email" defaultValue="alex@corefoundry.intl" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t.jobTitle}</label>
              <input type="text" defaultValue="Senior Commodities Broker" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t.timezone}</label>
              <select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors">
                <option>GMT (London)</option>
                <option>EST (New York)</option>
                <option>CET (Paris)</option>
              </select>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant mb-6">{t.companyInfo}</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t.legalName}</label>
              <input type="text" defaultValue="Core Foundry International Ltd." className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t.taxId}</label>
              <input type="text" defaultValue="CHE-123.456.789 MWST" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t.address}</label>
              <input type="text" defaultValue="Bahnhofstrasse 45, 8001 Zürich, Switzerland" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm font-medium focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t.sectors}</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {['metals', 'energy', 'agriculture', 'logistics'].map(sectorKey => (
                  <label key={sectorKey} className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/10 cursor-pointer hover:bg-surface-container transition-colors">
                    <input type="checkbox" defaultChecked={['metals', 'energy'].includes(sectorKey)} className="accent-primary" />
                    <span className="text-xs font-medium">{t[sectorKey as keyof typeof t]}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant mb-6">{t.securityAndAccess}</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Contraseña Actual</label>
                <input 
                  type="password" 
                  value={passwords.current}
                  onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t.newPassword}</label>
                <input 
                  type="password" 
                  value={passwords.new}
                  onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t.confirmPassword}</label>
                <input 
                  type="password" 
                  value={passwords.confirm}
                  onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" 
                />
              </div>
            </div>
            <button 
              onClick={handlePasswordChange}
              className="px-6 py-2 bg-surface-container-high text-primary rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              Actualizar Contraseña
            </button>

            <div className="pt-6 border-t border-outline-variant/10 space-y-4">
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                <div>
                  <p className="text-sm font-bold">{t.twoFactorAuth}</p>
                  <p className="text-[10px] text-on-surface-variant">Añade una capa extra de seguridad a tu cuenta.</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                <div>
                  <p className="text-sm font-bold">Notificaciones de Inicio de Sesión</p>
                  <p className="text-[10px] text-on-surface-variant">Recibe un correo cada vez que se acceda a tu cuenta.</p>
                </div>
                <div className="w-12 h-6 bg-outline-variant/30 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-4">
          <button className="px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest border border-outline-variant/20 hover:bg-surface-container transition-colors">{t.cancel}</button>
          <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:opacity-90 transition-opacity">{t.saveChanges}</button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showLanding, setShowLanding] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Global');
  const [showNewOpModal, setShowNewOpModal] = useState(false);
  const [showExecuteModal, setShowExecuteModal] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [currency, setCurrency] = useState('USD');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'operator' | 'viewer'>('admin');
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Nuevo Pago', desc: 'Se ha generado un nuevo pago para Aurum Metals SA.', time: 'Hace 5 min', read: false, type: 'settlement' },
    { id: 2, title: 'Documento Verificado', desc: 'El contrato para la operación #8492 ha sido verificado.', time: 'Hace 20 min', read: false, type: 'doc' },
    { id: 3, title: 'Alerta de Mercado', desc: 'El precio del Cobre ha subido un 2.5% en la última hora.', time: 'Hace 1 hora', read: true, type: 'market' },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const t = TRANSLATIONS[language];

  // Mock data for search
  const searchData = {
    companies: [
      { id: '1', name: 'Aurum Metals SA', type: 'Productor', sector: 'Metales' },
      { id: '2', name: 'Blue Energy Global', type: 'Inversor', sector: 'Energía' },
      { id: '3', name: 'AgroTrading Int.', type: 'Refinería', sector: 'Agrícolas' },
    ],
    operations: [
      { id: '8492', title: 'Cobre Grado A', amount: 1240000, currency: 'USD' },
      { id: '8510', title: 'Crudo Brent', amount: 842000, currency: 'USD' },
    ],
    documents: [
      { id: 'D1', title: 'Contrato Marco v2', type: 'PDF' },
      { id: 'D2', title: 'KYC Verification', type: 'DOCX' },
    ]
  };

  const filteredResults = searchQuery.length > 2 ? {
    companies: searchData.companies.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())),
    operations: searchData.operations.filter(o => o.title.toLowerCase().includes(searchQuery.toLowerCase())),
    documents: searchData.documents.filter(d => d.title.toLowerCase().includes(searchQuery.toLowerCase())),
  } : null;

  const handleExecute = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setShowExecuteModal(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-white">
      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <LandingPage onEnter={() => setShowLanding(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-surface"
          >
            <Sidebar 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              onLogout={() => setShowLanding(true)}
              onNewOperation={() => setShowNewOpModal(true)}
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              language={language}
              setLanguage={setLanguage}
              currency={currency}
              setCurrency={setCurrency}
            />
            <TopBar 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory}
              onExecuteOrder={() => setShowExecuteModal(true)}
              onNewOperation={() => setShowNewOpModal(true)}
              onProfileClick={() => setActiveTab('settings')}
              onMenuClick={() => setSidebarOpen(true)}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              showSearchResults={showSearchResults}
              setShowSearchResults={setShowSearchResults}
              filteredResults={filteredResults}
              language={language}
              onNavigate={setActiveTab}
              notifications={notifications}
              showNotifications={showNotifications}
              setShowNotifications={setShowNotifications}
              setNotifications={setNotifications}
            />
            
            <main className="md:ml-64 pt-24 px-4 md:px-8 pb-12">
              <div className="max-w-[1600px] mx-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'dashboard' && (
                    <motion.div
                      key="dashboard"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Dashboard 
                        onNewMatch={() => setShowNewOpModal(true)} 
                        selectedCategory={selectedCategory} 
                        onManageCompanies={() => setActiveTab('companies')}
                        language={language}
                        currency={currency}
                      />
                    </motion.div>
                  )}
                  {activeTab === 'companies' && (
                    <motion.div
                      key="companies"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CompanyManagement language={language} currency={currency} userRole={userRole} />
                    </motion.div>
                  )}
                  {activeTab === 'markets' && (
                    <motion.div
                      key="markets"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Markets selectedCategory={selectedCategory} language={language} currency={currency} />
                    </motion.div>
                  )}
                  {activeTab === 'operations' && (
                    <motion.div
                      key="operations"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <NegotiationDetail language={language} userRole={userRole} />
                    </motion.div>
                  )}
                  {activeTab === 'settlements' && (
                    <motion.div
                      key="settlements"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Settlements language={language} currency={currency} userRole={userRole} />
                    </motion.div>
                  )}
                  {activeTab === 'reports' && (
                    <motion.div
                      key="reports"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Reports language={language} />
                    </motion.div>
                  )}
                  {activeTab === 'settings' && (
                    <motion.div
                      key="settings"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <SettingsView language={language} userRole={userRole} setUserRole={setUserRole} />
                    </motion.div>
                  )}
                  {activeTab !== 'dashboard' && activeTab !== 'markets' && activeTab !== 'operations' && activeTab !== 'settlements' && activeTab !== 'reports' && activeTab !== 'settings' && (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center h-[60vh] text-on-surface-variant"
                    >
                      <BarChart3 className="w-16 h-16 mb-4 opacity-20" />
                      <p className="text-lg font-headline font-bold">{t.moduleInDevelopment}</p>
                      <p className="text-sm">{t.sectionAvailableSoon}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <AnimatePresence>
        {showNewOpModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNewOpModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-surface p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-outline-variant/20"
            >
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter font-headline mb-4">{t.newOperation}</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1 block">{t.commodity}</label>
                  <select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-3 text-sm">
                    <option>{t.copperGradeA}</option>
                    <option>{t.brentOil}</option>
                    <option>{t.goldBullion}</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1 block">{t.quantity} (MT)</label>
                    <input type="number" placeholder="5000" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-3 text-sm" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1 block">{t.targetPrice}</label>
                    <input type="text" placeholder="LME - 2%" className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-3 text-sm" />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <button 
                  onClick={() => setShowNewOpModal(false)}
                  className="flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest border border-outline-variant/20 hover:bg-surface-container transition-colors"
                >
                  {t.cancel}
                </button>
                <button 
                  onClick={() => setShowNewOpModal(false)}
                  className="flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest bg-primary text-white shadow-lg shadow-primary/20"
                >
                  {t.createListing}
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {showExecuteModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isExecuting && setShowExecuteModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-surface p-8 rounded-2xl shadow-2xl w-full max-w-md border border-outline-variant/20 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter font-headline mb-2">{t.confirmExecution}</h3>
              <p className="text-on-surface-variant text-sm mb-8">{t.confirmExecutionDesc}</p>
              
              <div className="flex gap-4">
                <button 
                  disabled={isExecuting}
                  onClick={() => setShowExecuteModal(false)}
                  className="flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest border border-outline-variant/20 hover:bg-surface-container transition-colors disabled:opacity-50"
                >
                  {t.cancel}
                </button>
                <button 
                  disabled={isExecuting}
                  onClick={handleExecute}
                  className="flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest bg-primary text-white shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isExecuting ? (
                    <>
                      <Clock className="w-4 h-4 animate-spin" />
                      {t.executing}...
                    </>
                  ) : t.confirm}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
