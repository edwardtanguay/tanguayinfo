import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=641f654d"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=641f654d"; const ReactDOM = __vite__cjsImport1_reactDom_client.__esModule ? __vite__cjsImport1_reactDom_client.default : __vite__cjsImport1_reactDom_client;
import App from "/src/App.tsx?t=1745925266756";
import { createBrowserRouter, Navigate, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=641f654d";
import "/src/index.scss?t=1745925368588";
import { PageAbout } from "/src/pages/PageAbout.tsx?t=1745924819965";
import { Page404 } from "/src/pages/Page404.tsx";
import { StoreProvider } from "/node_modules/.vite/deps/easy-peasy.js?v=641f654d";
import { store } from "/src/store/store.ts";
import { PageProjects } from "/src/pages/PageProjects.tsx?t=1745925174391";
import { PageLatest } from "/src/pages/PageLatest.tsx?t=1745925356333";
const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: /* @__PURE__ */ jsxDEV(Page404, {}, void 0, false, {
        fileName: "C:/edward/projects/apps/tanguayinfo/src/main.tsx",
        lineNumber: 15,
        columnNumber: 17
      }, this),
      element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
        fileName: "C:/edward/projects/apps/tanguayinfo/src/main.tsx",
        lineNumber: 16,
        columnNumber: 12
      }, this),
      children: [
        {
          path: "/projects",
          element: /* @__PURE__ */ jsxDEV(PageProjects, {}, void 0, false, {
            fileName: "C:/edward/projects/apps/tanguayinfo/src/main.tsx",
            lineNumber: 20,
            columnNumber: 14
          }, this)
        },
        {
          path: "latest",
          element: /* @__PURE__ */ jsxDEV(PageLatest, {}, void 0, false, {
            fileName: "C:/edward/projects/apps/tanguayinfo/src/main.tsx",
            lineNumber: 24,
            columnNumber: 14
          }, this)
        },
        {
          path: "about",
          element: /* @__PURE__ */ jsxDEV(PageAbout, {}, void 0, false, {
            fileName: "C:/edward/projects/apps/tanguayinfo/src/main.tsx",
            lineNumber: 28,
            columnNumber: 14
          }, this)
        },
        {
          path: "/",
          element: /* @__PURE__ */ jsxDEV(Navigate, { to: "/projects", replace: true }, void 0, false, {
            fileName: "C:/edward/projects/apps/tanguayinfo/src/main.tsx",
            lineNumber: 32,
            columnNumber: 14
          }, this)
        }
      ]
    }
  ]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(StoreProvider, { store, children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "C:/edward/projects/apps/tanguayinfo/src/main.tsx",
    lineNumber: 40,
    columnNumber: 3
  }, this) }, void 0, false, {
    fileName: "C:/edward/projects/apps/tanguayinfo/src/main.tsx",
    lineNumber: 39,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBY2dCO0FBZGhCLE9BQU9BLGNBQWM7QUFDckIsT0FBT0MsU0FBUztBQUNoQixTQUFTQyxxQkFBcUJDLFVBQVVDLHNCQUFzQjtBQUM5RCxPQUFPO0FBQ1AsU0FBU0MsaUJBQWlCO0FBQzFCLFNBQVNDLGVBQWU7QUFDeEIsU0FBU0MscUJBQXFCO0FBQzlCLFNBQVNDLGFBQWE7QUFDdEIsU0FBU0Msb0JBQW9CO0FBQzdCLFNBQVNDLGtCQUFrQjtBQUUzQixNQUFNQyxTQUFTVDtBQUFBQSxFQUFvQjtBQUFBLElBQ2xDO0FBQUEsTUFDQ1UsTUFBTTtBQUFBLE1BQ05DLGNBQWMsdUJBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVE7QUFBQSxNQUN0QkMsU0FBUyx1QkFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSTtBQUFBLE1BQ2JDLFVBQVU7QUFBQSxRQUNUO0FBQUEsVUFDQ0gsTUFBTTtBQUFBLFVBQ05FLFNBQVMsdUJBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBYTtBQUFBLFFBQ3ZCO0FBQUEsUUFDQTtBQUFBLFVBQ0NGLE1BQU07QUFBQSxVQUNORSxTQUFTLHVCQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVc7QUFBQSxRQUNyQjtBQUFBLFFBQ0E7QUFBQSxVQUNDRixNQUFNO0FBQUEsVUFDTkUsU0FBUyx1QkFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVU7QUFBQSxRQUNwQjtBQUFBLFFBQ0E7QUFBQSxVQUNDRixNQUFNO0FBQUEsVUFDTkUsU0FBUyx1QkFBQyxZQUFTLElBQUcsYUFBWSxTQUFPLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWdDO0FBQUEsUUFDMUM7QUFBQSxNQUFDO0FBQUEsSUFFSDtBQUFBLEVBQUM7QUFDRDtBQUVEZCxTQUFTZ0IsV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUUsRUFBRUM7QUFBQUEsRUFDckQsdUJBQUMsaUJBQWMsT0FDZCxpQ0FBQyxrQkFBZSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCLEtBRGhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUNEIiwibmFtZXMiOlsiUmVhY3RET00iLCJBcHAiLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiTmF2aWdhdGUiLCJSb3V0ZXJQcm92aWRlciIsIlBhZ2VBYm91dCIsIlBhZ2U0MDQiLCJTdG9yZVByb3ZpZGVyIiwic3RvcmUiLCJQYWdlUHJvamVjdHMiLCJQYWdlTGF0ZXN0Iiwicm91dGVyIiwicGF0aCIsImVycm9yRWxlbWVudCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC50c3hcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlciwgTmF2aWdhdGUsIFJvdXRlclByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCB7IFBhZ2VBYm91dCB9IGZyb20gXCIuL3BhZ2VzL1BhZ2VBYm91dC50c3hcIjtcclxuaW1wb3J0IHsgUGFnZTQwNCB9IGZyb20gXCIuL3BhZ2VzL1BhZ2U0MDQudHN4XCI7XHJcbmltcG9ydCB7IFN0b3JlUHJvdmlkZXIgfSBmcm9tICdlYXN5LXBlYXN5JztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL3N0b3JlL3N0b3JlLnRzJztcclxuaW1wb3J0IHsgUGFnZVByb2plY3RzIH0gZnJvbSBcIi4vcGFnZXMvUGFnZVByb2plY3RzLnRzeFwiO1xyXG5pbXBvcnQgeyBQYWdlTGF0ZXN0IH0gZnJvbSBcIi4vcGFnZXMvUGFnZUxhdGVzdC50c3hcIjtcclxuXHJcbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiL1wiLFxyXG5cdFx0ZXJyb3JFbGVtZW50OiA8UGFnZTQwNCAvPixcclxuXHRcdGVsZW1lbnQ6IDxBcHAgLz4sXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCIvcHJvamVjdHNcIixcclxuXHRcdFx0XHRlbGVtZW50OiA8UGFnZVByb2plY3RzLz5cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwibGF0ZXN0XCIsXHJcblx0XHRcdFx0ZWxlbWVudDogPFBhZ2VMYXRlc3QvPlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJhYm91dFwiLFxyXG5cdFx0XHRcdGVsZW1lbnQ6IDxQYWdlQWJvdXQgLz4sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIi9cIixcclxuXHRcdFx0XHRlbGVtZW50OiA8TmF2aWdhdGUgdG89XCIvcHJvamVjdHNcIiByZXBsYWNlIC8+LFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5dKTtcclxuXHJcblJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpISkucmVuZGVyKFxyXG5cdDxTdG9yZVByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcblx0XHQ8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XHJcblx0PC9TdG9yZVByb3ZpZGVyPlxyXG4pO1xyXG4iXSwiZmlsZSI6IkM6L2Vkd2FyZC9wcm9qZWN0cy9hcHBzL3Rhbmd1YXlpbmZvL3NyYy9tYWluLnRzeCJ9