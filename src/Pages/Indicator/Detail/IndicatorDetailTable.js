const DATA_YEARS = [2016, 2017, 2018, 2019];

function IndicatorDetailTable({ indicator }) {
  function getBaselineValue(i) {
    const baseline = i.milestone_set.find((m) => m.is_baseline);
    return baseline ? baseline.value : null;
  }
  function getBaselineYear(i) {
    const baseline = i.milestone_set.find((m) => m.is_baseline);
    return baseline ? baseline.year : null;
  }
  function getBaselineSource(i) {
    const baseline = i.milestone_set.find((m) => m.is_baseline);
    return baseline ? baseline.remarks : null;
  }

  function getValueForYear(i, year) {
    const dataObj = i.data_set.find((d) => d.year === year);
    return dataObj ? dataObj.value : null;
  }

  function getRemarksForYear(i, year) {
    const dataObj = i.data_set.find((d) => d.year === year);
    return dataObj ? dataObj.remarks : null;
  }

  return (
    <table className="table table-responsive table-condensed table-bordered">
      <thead>
        <tr>
          <th colspan="2">Indicators</th>
          <th>Indicators (Nepali)</th>
          <th>Baseline</th>
          <th>Base Year</th>
          <th>Base Source</th>
          {DATA_YEARS.map((year) => (
            <>
              <td>{year}</td>
              <td>Source</td>
            </>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan={indicator.indicator_set.length + 1}>{indicator.code}</td>
          <td>{indicator.name}</td>
          <td>{indicator.name_np}</td>
          <td>{getBaselineValue(indicator)}</td>
          <td>{getBaselineYear(indicator)}</td>
          <td>{getBaselineSource(indicator)}</td>
          {DATA_YEARS.map((year) => (
            <>
              <td>{getValueForYear(indicator, year)}</td>
              <td>{getRemarksForYear(indicator, year)}</td>
            </>
          ))}
        </tr>
        {indicator.indicator_set.map((subindicator) => (
          <tr>
            <td>
              {subindicator.code} {subindicator.name}
            </td>
            <td>{subindicator.name_np}</td>
            <td>{getBaselineValue(subindicator)}</td>
            <td>{getBaselineYear(subindicator)}</td>
            <td>{getBaselineSource(subindicator)}</td>
            {DATA_YEARS.map((year) => (
              <>
                <td>{getValueForYear(subindicator, year)}</td>
                <td>{getRemarksForYear(subindicator, year)}</td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default IndicatorDetailTable;
