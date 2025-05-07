type dataFetchProps = {
  readonly status: "loading" | "error" | "success";
};
// combine two types into one
type demoProp1 = {
  readonly status: string;
};
type dempProp2 = {
  readonly status: string;
};
type demoProp = demoProp1 | dempProp2;

function DataFetch({ status }: dataFetchProps | demoProp) {
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
