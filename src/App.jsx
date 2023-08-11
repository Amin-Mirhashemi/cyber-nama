import "@/App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import AuthProvider from "./providers/AuthProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout>hello bitches</Layout>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
