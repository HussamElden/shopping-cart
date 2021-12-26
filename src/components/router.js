import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<ItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
