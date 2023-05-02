import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/data/constants";
import Toaster from "@/components/atoms/toast/Toaster";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import DashboardLayout from "@/components/templates/DashboardLayout";
import "nprogress/nprogress.css";
import "react-responsive-modal/styles.css";
import { Router } from "next/router";
import { GlobalProvider } from "@/contexts/GlobalContext";
import { MessagesProvider } from "@/contexts/MessagesContext";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <ReactQueryDevtools position="bottom-right" />
        <MessagesProvider>
          <GlobalProvider>
            <ThemeProvider theme={theme}>
              {pathname.includes("dashboard") ? (
                <DashboardLayout>
                  <Component {...pageProps} />
                </DashboardLayout>
              ) : (
                <Component {...pageProps} />
              )}
            </ThemeProvider>
          </GlobalProvider>
        </MessagesProvider>
      </QueryClientProvider>
    </>
  );
}
