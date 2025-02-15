"use client";
import { JSX, useState } from "react";

export interface ICategoryTab {
  id: string;
  label: string;
  content: JSX.Element;
}

export default function CategoryTabs({ tabs }: { tabs: ICategoryTab[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(+tab.id)}
            className={`flex-1 py-2 text-center font-medium ${
              activeTab === +tab.id ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 bg-white border border-gray-300 rounded-b-lg shadow-sm">{tabs[activeTab]?.content}</div>
    </div>
  );
}
