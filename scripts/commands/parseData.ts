import * as qcli from "../qtools/qcli";
import { parseProjects } from "../subcommands/parseProjects";
import { parseLatestItems } from "../subcommands/parseLatestItems";

parseProjects();
parseLatestItems();
qcli.message("Parsing completed.");

