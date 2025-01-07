import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import AssetsView from "../Components/AssetsView";
import ReqAndAllo from "../Components/ReqAndAllo";
import AssetsHistroy from "../Components/AssetsHistroy";
import AssetsBatch from "../Components/AssetsBatch";

export default function Assets() {
  return (
    <div>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="asset-category-view" element={<AssetsView />} />
        <Route path="asset-batch-view" element={<AssetsBatch />} />
        <Route path="asset-req-view" element={<ReqAndAllo />} />
        <Route path="asset-history" element={<AssetsHistroy />} />
      </Routes>
    </div>
  );
}
