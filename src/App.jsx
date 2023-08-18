import "@/App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import AuthProvider from "./providers/AuthProvider";
import Router from "./Router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout>
          <Router />
        </Layout>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
