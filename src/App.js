import convertExcelToJson from "./excelToJson";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    input: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = formData.input;

    convertExel(file);
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
    <div className="w-full h-full flex items-center justify-center bg-slate-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              value={formData.input}
              onChange={(e) =>
                setFormData({ ...formData, input: e.target.value })
              }
              id="input"
              autoComplete="on"
            />
          </div>

          <button className="bg-blue-400 p-2 px-4 m-4 rounded">Convert</button>
        </div>
      </form>
    </div>
  );
}

export default App;
