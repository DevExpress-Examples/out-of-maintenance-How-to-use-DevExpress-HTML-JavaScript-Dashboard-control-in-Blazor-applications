# How to use DevExpress HTML JavaScript Dashboard control in Blazor applications

This example demonstrates how to integrate the [HTML JavaScript Dashboard](https://docs.devexpress.com/Dashboard/119108/designer-and-viewer-applications/web-dashboard/html-javascript-dashboard-control) into a Blazor application.

The solution is based on the client-server model and includes the **WebDashboardBlazor.Client** and **WebDashboardBlazor.Server** parts.

**Note:** DevExpress Blazor components are now free-of-charge, but you need to purchase the [Universal Subscription](https://www.devexpress.com/buy/net/) to use the Dashboard product.

## Solution's Server Part

An ASP.NET Core application that processes requests from the HTML JavaScript Dashboard control. 

These are the main steps to configure the server side: 
1. Install the **DevExpress.AspNetCore.Dashboard** NuGet package.
2. Create the **App_Data/Dashboards** folder to store dashboards.
3. Register and adjust **DashboardConfigurator** in the **Startup** class.

_Files to look at:_
* [Startup.cs](./CS/Server/Startup.cs)

## Solution's Client Part

Defines the UI for the HTML JavaScript Dashboard control and implements the logic to respond to UI updates. 

These are the main steps to configure the client side: 
1. Install the **devexpress-dashboard**, **@devexpress/analytics-core**, **devextreme** and **jquery-ui-dist** npm packages. 
2. Create the **Dashboard.razor** file for the HTML JavaScript Dashboard control. Invoke an initialization method in the **OnAfterRender** lifecycle event and release unused memory in the **Dispose** event.
3. Create the ***index.js** file and implement the logic to initialize and dispose of the dashboard control. 
4. Install the **BuildBundlerMinifier** NuGet package and create the **bundleconfig.json** file to create bundles for required CSS and JavaScript files.
5. Register bundled resources in the **index.html** file.
6. Modify the **NavMenu.razor** file to add the Dashboard item in the menu.

_Files to look at:_
* [package.json](./CS/Client/package.json)
* [Dashboard.razor](./CS/Client/Pages/Dashboard.razor)
* [index.js](./CS/Client/index.js)
* [index.html](./CS/Client/wwwroot/index.html)
* [bundleconfig.json](./CS/Client/bundleconfig.json)
* [NavMenu.razor](./CS/Client/Shared/NavMenu.razor)

For more information on the dashboard configuration in ASP.NET Core, refer to the [Create an ASP.NET Core 3.0 Dashboard Application](https://docs.devexpress.com/Dashboard/401369/get-started/build-web-dashboard-applications/create-an-aspnet-core-3-dashboard-application) help topic.
