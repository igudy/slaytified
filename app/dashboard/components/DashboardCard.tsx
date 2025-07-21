import React from "react";

interface IDashboardCard {
  user: string;
}

const DashboardCard = ({ user }: IDashboardCard) => {
  console.log("🚀 ~ DashboardCard ~ user:", user);
  return <div>DashboardCard</div>;
};

export default DashboardCard;
