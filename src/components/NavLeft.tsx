import { Link } from "waku";

export function NavLeft() {
    return (
        <ul>
            <li><Link to="/appshell/mantine/core" className="mt-4 inline-block underline">
                Mantine Core
            </Link></li>
            <li><Link to="/appshell/mantine/date" className="mt-4 inline-block underline">
                Mantine Date
            </Link></li>
            <li><Link to="/appshell/mantine/form" className="mt-4 inline-block underline">
                Mantine Form
            </Link></li>
            <li><Link to="/appshell/mantine/charts" className="mt-4 inline-block underline">
                Mantine Charts
            </Link></li>
            <li><Link to="/appshell/mantine/extentions" className="mt-4 inline-block underline">
                Mantine Extentions
            </Link></li>
        </ul>
    )
}