export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      <div className='mt-6'>{children}</div>
    </div>
  );
}