import { CSVData } from "@/types/Form/CSVData";

export const exportCSV = (data: CSVData) => {
  const headers = Object.keys(data).join(',');
  const row = Object.values(data).join(',');
  const csvContent = [headers, row].join('\n');
  
  // Let's allow special characters in CSV file as accents
  const BOM = '\uFEFF';
  const csvContentWithBOM = BOM + csvContent;
  
  const blob = new Blob([csvContentWithBOM], { type: 'text/csv,charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);

  // Set the file name to the current date (YYYY-MM-DD)
  link.setAttribute('download', `form_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};