import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-1 gap-4 px-4">
      <h1 className="text-4xl font-bold">HajiPoker Help Center</h1>
      <p className="text-lg text-fd-muted-foreground max-w-lg">
        Find answers to your questions about using HajiPoker. Browse our guides on authentication, account security, and more.
      </p>
      <Link
        href="/docs"
        className="inline-flex items-center justify-center rounded-md bg-fd-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-fd-primary/90"
      >
        Browse Documentation
      </Link>
    </div>
  );
}
