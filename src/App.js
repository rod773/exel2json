import convertExcelToJson from "./excelToJson";

function App() {
  const convertedExel = async () => {
    try {
      const jsonData = await convertExcelToJson("your_excel_file_url.xlsx");
      console.log(jsonData);
      // Now you can use jsonData in your React component
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Exel To Json</h1>
    </div>
  );
}

export default App;
