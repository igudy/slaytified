"use client";
import React from "react";

const DashboardCard = ({ user }) => {
  console.log("🚀 ~ DashboardCard ~ user:", user);
  return <div>Welcome, {user?.name || "User"}</div>;
};

export default DashboardCard;
