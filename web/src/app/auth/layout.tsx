export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}
                <main className="h-screen flex flex-col justify-between py-10">{children}</main>
            </body>
        </html>
    );
}
