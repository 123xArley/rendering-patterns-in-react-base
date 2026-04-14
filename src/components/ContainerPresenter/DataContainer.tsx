import React from "react";
import { DataPresenter } from "./DataPresenter";

type DataItem = {
  id: number;
  name: string;
  value: string;
  image: string;
};

export const DataContainer = () => {
  const [data,setData] = React.useState<DataItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
                
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  },[]);

  return (
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <DataPresenter data={data} />}
    </div>
  );
};
