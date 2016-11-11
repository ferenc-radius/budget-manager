import AccountPanel from "app/containers/sidepanels/account";

export class PanelType {

    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }

    getComponent() {
        return AccountPanel;
    }

    static getByName(name) {
        return panelTyps.find(t => t.name == name);
    }

    /**
     * allowes you to compare the stateId against the state object (if (panel == PanelType).. )
     * @returns {*}
     */
    valueOf() {
        return this.name;
    }
}

PanelType.NONE = new PanelType(null);
PanelType.ACCOUNTS = new PanelType("accounts");


// export all types
let panelTyps = [];
for (let item in PanelType) {
    if (PanelType.hasOwnProperty(item)) {
        let t = PanelType[item];
        if (t instanceof PanelType) {
            panelTyps.push(t);
        }
    }
}

export default panelTyps;
