import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    async function fetchTotal() {
      const res = await fetch("/api/expenses/total-spent");
      const data = await res.json()
      setTotalSpent(data.total)
    }

    fetchTotal()
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Total Spent</CardTitle>
          <CardDescription>The Total amount you have spent</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{totalSpent}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
