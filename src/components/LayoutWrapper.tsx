import { PropsWithChildren } from "react";

export const LayoutWrapper = ({ children }: PropsWithChildren) => (
    <div className="mx-auto flex flex-col min-h-screen max-w-screen-lg w-full items-center justify-center gap-3 px-4 lg:px-0">
        {children}
    </div>
);
