import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/App-Overview.png"
            alt="Auth image"
            width={850}
            height={850}
            className="rounded-xl border-2 border-gray-600 object-contain"
          />
        </div>
      </div>
    </main>
  );
}
