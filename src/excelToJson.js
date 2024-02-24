import * as XLSX from "xlsx";

const ExcelToJson = () => {
  const downloadExcelAsArrayBuffer = async (excelUrl) => {
    try {
      // Fetch the Excel file
      const response = await fetch(excelUrl);

      if (!response.ok) {
        throw new Error(
          `Failed to download Excel file. Status: ${response.status}`
        );
      }
      // Convert the response to ArrayBuffer
      const arrayBuffer = await response.arrayBuffer();
      return arrayBuffer;
    } catch (error) {
      console.error("Error downloading Excel file:", error);
      throw error;
    }
  };

  const convertExcelToJson = async (excelUrl) => {
    try {
      // Download the Excel file as ArrayBuffer
      const arrayBuffer = await downloadExcelAsArrayBuffer(excelUrl);

      // Convert the Excel buffer to a workbook
      const workbook = XLSX.read(arrayBuffer, { type: "array" });

      // Get the first sheet
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert the sheet data to JSON
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Map the array to an array of objects
      const resultArray = jsonData.map((row) => {
        const obj = {};
        for (let i = 0; i < jsonData[0].length; i++) {
          obj[jsonData[0][i]] = row[i];
        }
        return obj;
      });

      return resultArray.slice(1);
    } catch (error) {
      console.error("Error converting Excel to JSON:", error);
      throw error;
    }
  };

  return <div></div>;
};

export default ExcelToJson;
