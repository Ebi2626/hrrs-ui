import { ChildrenType } from "../../../models/utils.model";

type MainProps = {
    children: ChildrenType
}

export function Main({children}: MainProps) {
    return (
    <main className="flex-auto max-w-max overflow-x-hidden">
        {children}
    </main>
    );
}