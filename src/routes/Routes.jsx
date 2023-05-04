import React, { Suspense } from "react";
import {
  Route,
  Routes as RoutesReactRouterDom,
} from "react-router-dom";
import { Home, AddProduct } from "./paths.js";

export function Routes() {
  return (
    <Suspense>
      <RoutesReactRouterDom>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
      </RoutesReactRouterDom>
    </Suspense>
  );
}