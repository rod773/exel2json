import convertExcelToJson from "./excelToJson";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    input: undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.input);
  };

  const convertExel = async () => {
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
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          value={formData.input}
          onChange={(e) => setFormData({ ...formData, input: e.target.value })}
        />
        <button>Convert</button>
      </form>
    </div>
  );
}

export default App;
