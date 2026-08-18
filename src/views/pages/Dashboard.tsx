import { useEffect } from "react";
import { useSampleResponse } from "../../hooks/useSampleResponse";
import { useSampleDataStore } from "../../store/useSampleStoreData";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export const DashboardPage = () => {
  const history = useHistory();
  const { sampleData, setSampleData } = useSampleDataStore((state) => state);
  const response = useSampleResponse();
  console.log(response);

  useEffect(() => {
    if (!response.data) return;
    setSampleData(response.data.data);
    const sampleDataTimeOut = setTimeout(() => {
      setSampleData(null);
    }, 5000);
    return () => {
      clearTimeout(sampleDataTimeOut);
    };
  }, [response.data]);

  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <h1>ComputeSphere</h1>
      <div className="card">Sample data: {JSON.stringify(response.data)}</div>
      <p className="read-the-docs">Welcome to computesphere......</p>
      <h2>
        sampleData from store:
        {"   " + JSON.stringify(sampleData)}
      </h2>

      <Button variant="contained" color="primary" onClick={goBack}>
        Go back
      </Button>
    </>
  );
};
