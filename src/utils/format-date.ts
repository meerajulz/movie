import { format } from 'date-fns';

function formatDate(date: string): string {
  return format(new Date(date), 'dd/MM/yyyy');
} 
export default formatDate;
