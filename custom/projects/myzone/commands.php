{
	"commands": [
 {
   "Command": "/zone",
   "Permission": "myzone.zone",
   "Details": "Gives access to the gui."
 },
 {
   "Command": "/zone create <zonename>",
   "Permission": "myzone.zone.create",
   "Details": "Gives access to create zones"
 },
 {
   "Command": "/zone delete <zonename>",
   "Permission": "myzone.zone.delete \nmyzone.zone.delete.others",
   "Details": "Gives access to delete zones"
 },
 {
   "Command": "/zone flag <zonename> <flag> <value>",
   "Permission": "myzone.zone.flag \nmyzone.zone.flag.others \nmyzone.zone.flag.[flag]",
   "Details": "Gives access to manage the zones flags"
 },
 {
   "Command": "/zone members",
   "Permission": "myzone.zone.members",
   "Details": "Gives access to manage the zones members"
 },
 {
   "Command": "/zone members <zonename> <add> <player>",
   "Permission": "myzone.zone.members.add \nmyzone.zone.members.add.others",
   "Details": "Gives access to add members to zones"
 },
 {
   "Command": "/zone members <zonename> <remove> <player>",
   "Permission": "myzone.zone.members.remove \nmyzone.zone.members.remove.others",
   "Details": "Gives access to remove members to zones"
 },
 {
   "Command": "/zone owners",
   "Permission": "myzone.zone.owners",
   "Details": "Gives access to manage the zones owners"
 },
 {
   "Command": "/zone owners <zonename> <add> <player>",
   "Permission": "myzone.zone.owners.add \nmyzone.zone.owners.add.others",
   "Details": "Gives access to add owners to zones"
 },
 {
   "Command": "/zone owners <zonename> <remove> <player>",
   "Permission": "myzone.zone.owners.remove \nmyzone.zone.owners.remove.others",
   "Details": "Gives access to remove owners to zones"
 },
 {
   "Command": "/zone expand <zone> <size> <up|down|north|east|south|west>",
   "Permission": "myzone.zone.expand \nmyzone.zone.expand.others",
   "Details": "Gives access to expand zones."
 },
 {
   "Command": "/zone info <zone>",
   "Permission": "myzone.zone.info",
   "Details": "Gives access to view the zones information."
 },
 {
   "Command": "/zone setpos <1|2>",
   "Permission": "myzone.zone.setpos",
   "Details": "Gives access to set the positions of a zone."
 },
 {
   "Command": "/zone reload",
   "Permission": "myzone.reload",
   "Details": "Gives access to reload the configuration."
 }
]}
