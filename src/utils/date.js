export function calculateDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  const totalMonths = years * 12 + months;
  
  if (totalMonths < 12) {
    return `${totalMonths} months`;
  }
  const remainingMonths = totalMonths % 12;
  return `${Math.floor(totalMonths / 12)} years${remainingMonths ? ` ${remainingMonths} months` : ''}`;
}

export function formatDate(date) {
  if (date === "Present") return date;
  const [year, month] = date.split("-");
  return new Date(year, month - 1).toLocaleDateString('en-GB', {
    month: 'short',
    year: 'numeric'
  });
} 