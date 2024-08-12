"use client";

import { ResumeInputForm } from "@/components/ResumeInputForm";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function ResumeBuilder() {
  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-6">
          <div className="col-span-3">
            <ResumeInputForm />
          </div>
          <div className="col-span-3">{/* <Resume /> */}</div>
        </div>
      </main>
    </Provider>
  );
}
