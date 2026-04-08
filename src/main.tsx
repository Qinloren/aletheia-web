import {createRoot} from "react-dom/client";
import {StrictMode, Suspense} from "react";
import router from "@/router";
import { RouterProvider } from "react-router-dom";
import VLoading from "@/components/loading";

const root = createRoot(document.querySelector("#root")!);
root.render(
    <StrictMode>
        <Suspense fallback={<VLoading />}>
            <RouterProvider router={router}/>
        </Suspense>
    </StrictMode>
)