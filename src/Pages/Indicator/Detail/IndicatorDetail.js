import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import Api from "api";
import IndicatorDetailTable from "Pages/Indicator/Detail/IndicatorDetailTable";
import IndicatorDetailGraph from "Pages/Indicator/Detail/IndicatorDetailGraph";
import "./IndicatorDetail.css";

function IndicatorDetail() {
  const { id } = useParams();

  const [indicator, setIndicator] = useState(null);

  useEffect(() => {
    async function fetchIndicator() {
      const res = await Api.getIndicator(id);
      setIndicator(res.data);
    }
    fetchIndicator();
  }, [id]);

  if (!indicator) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 id="indicatorTitle">
        {indicator.code}: {indicator.name}
      </h2>
      <hr />
      <p id="indicatorTable">
        <Tabs defaultActiveKey="data">
          <Tab eventKey="data" title="Data">
            <IndicatorDetailTable indicator={indicator} />
          </Tab>
          <Tab eventKey="graphs" title="Graphs">
            <IndicatorDetailGraph indicator={indicator} />
          </Tab>
          <Tab eventKey="metadata" title="Metadata">
            Metadata
          </Tab>
        </Tabs>
      </p>
    </>
  );
}

export default IndicatorDetail;
