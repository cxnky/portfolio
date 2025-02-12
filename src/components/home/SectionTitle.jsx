export default function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent 
      bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 animate-gradient">
      {children}
    </h2>
  );
} 