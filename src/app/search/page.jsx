import { Suspense } from "react";
import SearchContent from "./search/SearchContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ padding: "30px" }}>جارٍ تحميل نتائج البحث...</div>}>
      <SearchContent />
    </Suspense>
  );
}
