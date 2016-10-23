


// decorators
export function findOne() {
    return {_id: "one"};
}

export async function findAll(projection) {
    return await this.find({}, projection);
}

export async function create() {

}
