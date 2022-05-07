// In this simple problem the world includes both the environment and the robot
// but in most problems the environment and world would be separate
class World {
    constructor(numFloors) {
        this.location = 0;
        this.floors = [];
        for (let i = 0; i < numFloors; i++) {
            this.floors.push({dirty: false});
        }
    }

    markFloorDirty(floorNumber) {
        this.floors[floorNumber].dirty = true;
    }

    // markFloorWet(floorNumber) {
    //     this.floors[floorNumber].wet = true;
    // }

    simulate(action) {
        switch(action) {
        case 'SUCK':
            this.floors[this.location].dirty = false;
            break;
        case 'LEFT':
            this.location = 2;
            break;
        case 'RIGHT':
            this.location = 1;
            break;
        case 'UP':
            this.location = 0;
            break;
        case 'DOWN':
            this.location = 3;
            break;
        // case 'CONTINUE':
        //     if(this.location == 3){
        //         this.location = 2
        //     }else if(this.location == 2){
        //         this.location = 0
        //     }else{
        //         this.location = this.location+1;
        //     }
        }

        return action;
    }
}


// Rules are defined in code
function reflexVacuumAgent(world) {
    if (world.floors[world.location].dirty) { return 'SUCK'; }
    //else if (world.floors[world.location].wet) { return 'CONTINUE'; }
    else if (world.location == 0)           { return 'RIGHT'; }
    else if (world.location == 1)           { return 'DOWN'; }
    else if (world.location == 2)           { return 'UP'; }
    else if (world.location == 3)           { return 'LEFT'; }
}

// Rules are defined in data, in a table indexed by [location][dirty]
function tableVacuumAgent(world, table) {
    let location = world.location;
    let dirty = world.floors[location].dirty ? 1 : 0;
    //let wet = world.floors[location].wet ? 1 : 0;
    return table[location][dirty];
    //return table[location][wet];
}
