export const metadata = {
  title: 'SAP HANA Fiori Tile Creation Tutorial',
  description: 'Step-by-step guide to creating Fiori tiles and assigning them to T-codes in SAP HANA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
