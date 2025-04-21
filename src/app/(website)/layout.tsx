import Footer from '@/components/footer'
import Header from '@/components/header'

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden pb-16">{children}</main>
      <Footer />
    </>
  )
}
