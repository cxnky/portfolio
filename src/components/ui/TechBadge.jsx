export default function TechBadge({ name }) {
  return (
    <span className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 
      text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 
      transition-colors duration-300">
      {name}
    </span>
  );
} 