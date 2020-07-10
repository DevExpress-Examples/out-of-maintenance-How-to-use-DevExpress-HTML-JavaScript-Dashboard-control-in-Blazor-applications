window.JsFunctions = {
    InitWebDashboard: function () {
        DevExpress.Dashboard.ResourceManager.embedBundledResources();
        this.dashboardControl = new DevExpress.Dashboard.DashboardControl(document.getElementById("web-dashboard"), {
            endpoint: "/api/dashboard"
        });
        this.dashboardControl.render();
    },
    DisposeWebDashboard: function () {
        this.dashboardControl.dispose();
    }
};