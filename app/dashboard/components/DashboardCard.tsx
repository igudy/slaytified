import React from "react";

interface IDashboardCard {
  user: any;
}

const DashboardCard = ({ user }: IDashboardCard) => {
  console.log("🚀 ~ DashboardCard ~ user:", user);
  return <div>DashboardCard</div>;
};

export default DashboardCard;
