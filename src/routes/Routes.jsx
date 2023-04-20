import React, { Suspense } from "react";
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from "react-router-dom";
import { Home, AddProduct } from "./paths.js";

export function Routes() {
  return (
    <Suspense>
      <RoutesReactRouterDom>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </RoutesReactRouterDom>
    </Suspense>
  );
}