import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#000000", // background color of the icon
              secondary: "#ffffff", // color of the tick itself
            },
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px", // note: should be maxWidth, not maxwidth
            padding: "16px 20px",
            backgroundColor: "#fff",
            color: "#000000",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
