"use client"
import { ChakraProvider } from "@chakra-ui/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <ChakraProvider>{children}</ChakraProvider>
    </html>
  )
}
