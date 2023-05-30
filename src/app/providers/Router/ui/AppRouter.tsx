import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routesConfig } from "shared/config/routesConfig/routesConfig";

export function AppRouter() {
    return  (
        <Suspense fallback={<div>Loading...</div>}> 
            <Routes>
                {Object.values(routesConfig).map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Routes>
        </Suspense>
    )
}