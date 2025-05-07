type dataFetchProps = {
  readonly status: "loading" | "error" | "success";
};

function DataFetch({ status }: dataFetchProps) {
  if (status === "loading") {
    return <h2>Loading.....</h2>;
  } else if (status === "error") {
    return <h2>Error:Data could not fetch...</h2>;
  }
  return (
    <div>
      <h2>Data Fetch Successfully</h2>
    </div>
  );
}

export default DataFetch;
