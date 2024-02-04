import stagingData from "../../logs/example.json";
import { ReactNode } from "react";

const jsonData = JSON.parse(JSON.stringify(stagingData));

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 text-center">
        {Object.entries(jsonData).map(([key, value]) => (
          <div key={key} className="bg-gray-100 p-4 rounded-2xl">
            <h2 className="text-lg font-bold mb-2 capitalize">{key.replace(/_/g, ' ')}</h2>
            <p className="text-gray-800">{value as ReactNode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
