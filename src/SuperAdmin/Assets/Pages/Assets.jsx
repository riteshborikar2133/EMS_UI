import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AssetsView from "./AssetsView";
import AssetsBatch from "./AssetsBatch";
import ReqAndAllo from "./ReqAndAllo";
import AssetsHistroy from "./AssetsHistroy";


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
